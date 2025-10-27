// AdicionarFaq.tsx
import React, { useCallback, useContext, useState } from "react";
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

type FormState = {
  question: string;
  description: string;
  nome_video: string;
  criado_em: string; // yyyy-MM-dd
};

const initialForm: FormState = {
  question: "",
  description: "",
  nome_video: "",
  criado_em: "",
};

const AdicionarFaq: React.FC = () => {
  const { apiUrl, refreshFaqTasy } = useFaqTasy();
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState<FormState>(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [created, setCreated] = useState<FaqTasy | null>(null);

  const ws_id = auth?.perfil?.ws_id ?? null;
  console.log("WS_ID vindo do AuthContext:", ws_id);

  const handleChange =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const toPayload = useCallback(() => {
    const payload: Omit<FaqTasy, "id"> = {
      question: form.question || null,
      description: form.description || null,
      nome_video: form.nome_video || null,
      criado_em: form.criado_em ? new Date(form.criado_em) : null,
      id_ws: ws_id,
    };
    return payload;
  }, [ws_id, form]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError(null);
    setCreated(null);

    try {
      const createUrl = (apiUrl ?? "").replace(/\/+$/, "");
      const payload = toPayload();

      console.log("[FAQ CREATE] apiUrl:", apiUrl);
      console.log("[FAQ CREATE] POST URL:", createUrl);
      console.log("[FAQ CREATE] payload:", payload);

      const res = await fetch(createUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error(`Erro: ${res.status} ${res.statusText}`);
      }

      const novo: FaqTasy = await res.json();
      setCreated(novo);
      setForm(initialForm);
      refreshFaqTasy();
    } catch (err: any) {
      setSubmitError(err?.message ?? "Falha ao criar FAQ");
    } finally {
      setSubmitting(false);
    }
  };

  if (!auth?.perfil) {
    return null;
  }

  return (
    <Box component="section" sx={{ p: 2 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
        <Typography variant="h6">Adicionar FAQ</Typography>
        <Button variant="outlined" onClick={() => navigate(-1)}>
          Voltar
        </Button>
      </Stack>

      {submitError && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {submitError}
        </Alert>
      )}

      {created && (
        <Alert severity="success" sx={{ mb: 2 }}>
          FAQ criada com id {created.id}
        </Alert>
      )}

      <Box component="form" onSubmit={handleSubmit} noValidate>
        <Stack spacing={2}>
          <TextField
            label="Pergunta"
            value={form.question}
            onChange={handleChange("question")}
            fullWidth
          />

          <TextField
            label="Descrição"
            value={form.description}
            onChange={handleChange("description")}
            fullWidth
            multiline
            minRows={3}
          />

          <TextField
            label="Nome do Vídeo"
            value={form.nome_video}
            onChange={handleChange("nome_video")}
            fullWidth
          />

          <TextField
            label="Criado em"
            type="date"
            value={form.criado_em}
            onChange={handleChange("criado_em")}
            InputLabelProps={{ shrink: true }}
            fullWidth
          />

          <Box>
            <Button
              type="submit"
              variant="contained"
              disabled={submitting}
              startIcon={submitting ? <CircularProgress size={18} /> : undefined}
            >
              {submitting ? "Salvando..." : "Salvar"}
            </Button>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default AdicionarFaq;
