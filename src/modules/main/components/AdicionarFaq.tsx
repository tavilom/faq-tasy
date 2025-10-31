import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  Box,
  Stack,
  TextField,
  Button,
  Typography,
  CircularProgress,
  Alert,
} from "@mui/material";
import useFaqTasy from "@/shared/hooks/useFaqTasy";
import type { FaqTasy } from "@/types/store/FaqTasy";
import { AuthContext } from "@/stores/AuthContext";
import { useNavigate } from "react-router-dom";

type FaqCreatePayload = {
  question: string | null;
  description: string | null;
  criado_em: string | null; // será enviado pelo front (UTC)
  id_ws: string | null;
};

type FormState = { question: string; description: string };

const initialForm: FormState = {
  question: "",
  description: "",
};

// --------- helpers dentro do componente ----------

const nowBrasiliaNaiveIso = () => {
  const now = new Date();
  const offsetMinutes = 180; // 3h
  const adjusted = new Date(now.getTime() - offsetMinutes * 60 * 1000);
  return adjusted.toISOString();
};

const MAX_VIDEO_BYTES = 15 * 1024 * 1024; // 15MB
const ACCEPT_TYPES = ["video/mp4", "video/webm", "video/ogg"];

const AdicionarFaq: React.FC = () => {
  const { apiUrl, refreshFaqTasy } = useFaqTasy();
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState<FormState>(initialForm);
  const [file, setFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);

  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [created, setCreated] = useState<FaqTasy | null>(null);

  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);

  const [triedSubmit, setTriedSubmit] = useState(false);

  const ws_id = (auth?.perfil?.ws_id ?? null) as string | null;

  const handleChange =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileError(null);
    setUploadError(null);
    const f = e.target.files?.[0] ?? null;
    if (!f) {
      setFile(null);
      return;
    }
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

  const toPayload = useCallback((): FaqCreatePayload => {
    return {
      question: form.question || null,
      description: form.description || null,
      criado_em: nowBrasiliaNaiveIso(), // envia SEMPRE em UTC
      id_ws: ws_id,
    };
  }, [ws_id, form]);

  const createEndpoint = useMemo(() => {
    const clean = (apiUrl ?? "").split("?")[0].replace(/\/+$/, "");
    return clean;
  }, [apiUrl]);

  // --------- validações de formulário ----------
  const isTextFilled =
    form.question.trim().length > 0 && form.description.trim().length > 0;

  // vídeo obrigatório e válido
  const isVideoOk = !!file && !fileError;

  const canSubmit = isTextFilled && isVideoOk && !submitting && !uploading;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTriedSubmit(true);
    setSubmitError(null);
    setCreated(null);
    setUploadError(null);

    // bloqueia se faltar algo
    if (!canSubmit) {
      setSubmitError("Preencha todos os campos obrigatórios antes de salvar.");
      return;
    }

    setSubmitting(true);
    try {
      const payload = toPayload();

      const res = await fetch(createEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const text = await res.text().catch(() => "");
        console.error("[FAQ CREATE] body:", text);
        throw new Error(`Erro ao criar FAQ: ${res.status} ${res.statusText}`);
      }
      const novo: FaqTasy = await res.json();
      setCreated(novo);

      if (file) {
        setUploading(true);
        const uploadUrl = `${createEndpoint}/${(novo as any).id}/video`;
        const fd = new FormData();
        fd.append("video", file);

        const up = await fetch(uploadUrl, {
          method: "POST",
          body: fd, // NÃO definir Content-Type manualmente
        });
        if (!up.ok) {
          const text = await up.text().catch(() => "");
          console.error("[FAQ UPLOAD] body:", text);
          throw new Error(
            `Erro no upload do vídeo: ${up.status} ${up.statusText}`
          );
        }
        const uploaded = await up.json();
        console.log("Uploaded: ", uploaded);
      }

      setForm(initialForm);
      setFile(null);
      refreshFaqTasy();
    } catch (err: any) {
      if (uploading) {
        setUploadError(err?.message ?? "Falha ao enviar o vídeo");
      } else {
        setSubmitError(err?.message ?? "Falha ao criar FAQ");
      }
    } finally {
      setUploading(false);
      setSubmitting(false);
    }
  };

  useEffect(() => {
    return () => {};
  }, []);

  if (!auth?.perfil) return null;

  return (
    <Box component="section" sx={{ p: 2 }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 2 }}
      >
        <Typography variant="h6">Adicionar FAQ</Typography>
        <Button
          variant="outlined"
          onClick={() => navigate("/", { replace: true })}
          color="primary"
        >
          Voltar
        </Button>
      </Stack>

      {submitError && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {submitError}
        </Alert>
      )}
      {uploadError && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {uploadError}
        </Alert>
      )}
      {created && (
        <Alert severity="success" sx={{ mb: 2 }}>
          Cadastrado com Sucesso!
          {/* Não mostramos data na UI */}
        </Alert>
      )}

      <Box component="form" onSubmit={handleSubmit} noValidate>
        <Stack spacing={2}>
          <TextField
            label="Pergunta"
            value={form.question}
            onChange={handleChange("question")}
            fullWidth
            required
            error={triedSubmit && form.question.trim().length === 0}
            helperText={
              triedSubmit && form.question.trim().length === 0
                ? "Informe a pergunta."
                : undefined
            }
          />
          <TextField
            label="Descrição"
            value={form.description}
            onChange={handleChange("description")}
            fullWidth
            multiline
            minRows={3}
            required
            error={triedSubmit && form.description.trim().length === 0}
            helperText={
              triedSubmit && form.description.trim().length === 0
                ? "Informe a descrição."
                : undefined
            }
          />

          <Stack spacing={1}>
            <Typography variant="body2" color="text.secondary">
              Vídeo (obrigatório)
            </Typography>
            <Button variant="outlined" component="label">
              {file ? "Trocar vídeo" : "Selecionar vídeo"}
              <input
                hidden
                type="file"
                name="video"
                accept="video/mp4,video/webm,video/ogg"
                onChange={handleFileChange}
              />
            </Button>

            {triedSubmit && !file && !fileError && (
              <Alert severity="warning" sx={{ mt: 1 }}>
                Selecione um vídeo.
              </Alert>
            )}

            {file && (
              <Typography variant="caption">
                Selecionado: <strong>{file.name}</strong> (
                {(file.size / 1024 / 1024).toFixed(2)} MB)
              </Typography>
            )}
            {fileError && (
              <Alert severity="warning" sx={{ mt: 1 }}>
                {fileError}
              </Alert>
            )}
          </Stack>

          <Box>
            <Button
              type="submit"
              variant="contained"
              disabled={!!fileError ||!canSubmit}
              startIcon={
                submitting || uploading ? (
                  <CircularProgress size={18} />
                ) : undefined
              }
            >
              {submitting
                ? "Salvando..."
                : uploading
                ? "Enviando vídeo..."
                : "Salvar"}
            </Button>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default AdicionarFaq;
