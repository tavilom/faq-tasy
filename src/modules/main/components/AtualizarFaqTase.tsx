import { useState, useEffect } from "react";
import {
  Dialog, DialogTitle, DialogContent, TextField, Button, Box,
  CircularProgress, Alert, Divider, useMediaQuery, useTheme,
  DialogActions, Typography,
} from "@mui/material";
import type { FaqTasy } from "@/types/store/FaqTasy";
import useFaqTasy from "@/shared/hooks/useFaqTasy";

type AtualizarFaqTasyProps = {
  open: boolean;
  onClose: () => void;
  faqSelecionada: FaqTasy | null;
  refreshLista: () => void;
};

const MAX_VIDEO_BYTES = 15 * 1024 * 1024; // 15MB
const ACCEPT_TYPES = ["video/mp4", "video/webm", "video/ogg"];

const AtualizarFaqTasy = ({
  open,
  onClose,
  faqSelecionada,
  refreshLista,
}: AtualizarFaqTasyProps) => {
  const { apiUrl } = useFaqTasy();
  const [formData, setFormData] = useState<Partial<FaqTasy>>({});
  const [file, setFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);
  const [sendSuccess, setSendSuccess] = useState<boolean>(false);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  // Ex.: se apiUrl = "http://localhost:3000/faq_tasy"
  const baseEndpoint = (apiUrl ?? "").split("?")[0].replace(/\/+$/, "");

  useEffect(() => {
    if (faqSelecionada?.id != null) setFormData(faqSelecionada);
    else setFormData({});
    setFile(null);
    setFileError(null);
    setSendError(null);
    setSendSuccess(false);
  }, [faqSelecionada?.id, open]);

  const handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setFileError(null);
    setSendError(null);
    setSendSuccess(false);
    const f = e.target.files?.[0] ?? null;
    if (!f) { setFile(null); return; }
    if (!ACCEPT_TYPES.includes(f.type)) {
      setFileError("Tipo de arquivo não suportado. Use mp4, webm ou ogg.");
      setFile(null);
      return;
    }
    if (f.size > MAX_VIDEO_BYTES) {
      setFileError("Arquivo muito grande (máximo 15MB).");
      setFile(null);
      return;
    }
    setFile(f);
  };

  // PATCH multipart único: envia video (se houver) + campos preenchidos
  const patchFaqMultipart = async (id: number, fields: Partial<FaqTasy>, video?: File | null) => {
    const url =
      // se apiUrl já é .../faq_tasy, então fica /faq_tasy/:id
      `${baseEndpoint}/${id}`;

    const fd = new FormData();

    // arquivo (nome do campo TEM QUE SER 'video')
    if (video) fd.append("video", video);

    // anexa só campos definidos (evita sobrescrever com null/empty)
    const addIfDefined = (key: keyof FaqTasy, val: any) => {
      if (val === undefined) return;
      // back já transforma ""/null -> undefined quando inválido (pelo DTO)
      fd.append(String(key), String(val));
    };

    addIfDefined("question", fields.question);
    addIfDefined("description", fields.description);
    addIfDefined("id_ws", (fields as any).id_ws);
    // NÃO envie nome_video manualmente quando mandar arquivo. Se NÃO houver arquivo
    // e você quer atualizar manualmente, descomente:
    if (!video) addIfDefined("nome_video", fields.nome_video);

    const res = await fetch(url, { method: "PATCH", body: fd });
    if (!res.ok) {
      const text = await res.text().catch(() => "");
      throw new Error(`Falha ao atualizar (${res.status}): ${text || res.statusText}`);
    }
    return res.json() as Promise<FaqTasy>;
  };

  const handleSalvar = async () => {
    if (!faqSelecionada?.id) return;

    setSendError(null);
    setSendSuccess(false);
    setSending(true);

    try {
      // monta payload textual (apenas o que o usuário preencheu)
      const payload: Partial<FaqTasy> = {
        question: formData.question ?? undefined,
        description: formData.description ?? undefined,
        // se nenhum arquivo foi escolhido e o usuário alterou manualmente:
        nome_video: file ? undefined : (formData.nome_video ?? undefined),
        // id_ws se existir no teu tipo:
        // id_ws: (formData as any).id_ws ?? undefined,
      };

      await patchFaqMultipart(faqSelecionada.id, payload, file);
      setSendSuccess(true);

      // Atualiza lista e fecha
      await refreshLista();
      onClose();
    } catch (e: any) {
      setSendError(e?.message ?? "Erro ao salvar alterações");
    } finally {
      setSending(false);
      setFile(null);
    }
  };

  const handleClose = () => {
    if (!sending) onClose();
  };

  const busy = sending;

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="sm"
      fullScreen={fullScreen}
    >
      <DialogTitle sx={{ textAlign: "center", fontWeight: "bold" }}>
        Editar Faq
      </DialogTitle>
      <Divider sx={{ my: 2 }} />
      <DialogContent sx={{ px: fullScreen ? 2 : 4, py: fullScreen ? 2 : 3 }}>
        <Box display="flex" flexDirection="column" gap={3}>
          {sendError && <Alert severity="error">{sendError}</Alert>}
          {sendSuccess && <Alert severity="success">Alterações salvas com sucesso.</Alert>}

          <TextField
            label="Pergunta"
            name="question"
            value={formData.question ?? ""}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            size="medium"
            disabled={busy}
          />

          <TextField
            label="Descrição"
            name="description"
            value={formData.description ?? ""}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            size="medium"
            multiline
            minRows={3}
            disabled={busy}
          />

          <TextField
            label="Nome do vídeo (opcional)"
            name="nome_video"
            value={formData.nome_video ?? ""}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            size="medium"
            disabled={busy || !!file} // se vai enviar arquivo, não edita nome manualmente
            helperText={file ? "Será substituído pelo nome do arquivo enviado" : undefined}
          />

          {/* Upload de vídeo */}
          <Box display="flex" flexDirection="column" gap={1}>
            <Typography variant="body2" color="text.secondary">Vídeo</Typography>
            <Button variant="outlined" component="label" disabled={busy}>
              {file ? "Trocar vídeo" : "Selecionar vídeo"}
              <input
                hidden
                type="file"
                accept={ACCEPT_TYPES.join(",")}
                onChange={handleFileChange}
              />
            </Button>
            {file && (
              <Typography variant="caption">
                Selecionado: <strong>{file.name}</strong> ({(file.size / 1024 / 1024).toFixed(2)} MB)
              </Typography>
            )}
            {fileError && <Alert severity="warning">{fileError}</Alert>}
          </Box>
        </Box>
      </DialogContent>

      <DialogActions
        sx={{ justifyContent: "space-between", px: fullScreen ? 2 : 4, pb: fullScreen ? 2 : 3 }}
      >
        <Button onClick={handleClose} color="primary" variant="outlined" disabled={busy}>
          Cancelar
        </Button>
        <Button
          onClick={handleSalvar}
          color="primary"
          variant="contained"
          disabled={busy || !!fileError}
          startIcon={busy ? <CircularProgress size={18} /> : null}
        >
          Salvar Alterações
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AtualizarFaqTasy;
