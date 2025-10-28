import { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  Box,
  CircularProgress,
  Alert,
  Divider,
  useMediaQuery,
  useTheme,
  DialogActions,
} from "@mui/material";
import type { FaqTasy } from "@/types/store/FaqTasy";
import useFaqTasy from "@/shared/hooks/useFaqTasy";

type AtualizarFaqTasyProps = {
  open: boolean;
  onClose: () => void;
  faqSelecionada: FaqTasy | null;
  refreshLista: () => void;
};


const AtualizarFaqTasy = ({
  open,
  onClose,
  faqSelecionada,
  refreshLista,
}: AtualizarFaqTasyProps) => {
  const { updateFaqTasyPartial, updatingFaqTasy, updateError } = useFaqTasy();
  const [formData, setFormData] = useState<Partial<FaqTasy>>({});

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  
  useEffect(() => {
    if (faqSelecionada?.id != null) setFormData(faqSelecionada);
    else setFormData({});
  }, [faqSelecionada?.id]);

  const handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSalvar = async () => {
    if (!faqSelecionada?.id) return;

    const patch = {
      question: formData.question ?? null,
      description: formData.description ?? null,
      nome_video: formData.nome_video ?? null,
    } as any;

    const updated = await updateFaqTasyPartial(faqSelecionada.id, patch);
    if (updated) {
      refreshLista(); 
      onClose();
    }
  };

  const handleClose = () => {
    if (!updatingFaqTasy) onClose();
  };

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
          {updateError && <Alert severity="error">{String(updateError)}</Alert>}

          <TextField
            label="Pergunta"
            name="question"
            value={formData.question ?? ""}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            size="medium"
            disabled={updatingFaqTasy}
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
            disabled={updatingFaqTasy}
          />

          <TextField
            label="Nome do vídeo"
            name="nome_video"                 
            value={formData.nome_video ?? ""} 
            onChange={handleChange}
            fullWidth
            variant="outlined"
            size="medium"
            disabled={updatingFaqTasy}
          />
        </Box>
      </DialogContent>

      <DialogActions
        sx={{
          justifyContent: "space-between",
          px: fullScreen ? 2 : 4,
          pb: fullScreen ? 2 : 3,
        }}
      >
        <Button onClick={handleClose} color="inherit" variant="outlined" disabled={updatingFaqTasy}>
          Cancelar
        </Button>
        <Button
          onClick={handleSalvar}
          color="primary"
          variant="contained"
          disabled={updatingFaqTasy}
          startIcon={updatingFaqTasy ? <CircularProgress size={18} /> : null}
        >
          Salvar Alterações
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AtualizarFaqTasy;
