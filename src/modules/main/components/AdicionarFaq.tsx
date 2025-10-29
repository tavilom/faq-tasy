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


type FaqCreatePayload = Omit<FaqTasy, "id" | "criado_em"> & {
  criado_em: string | null;
};

type FormState = { question: string; description: string; nome_video: string };

const initialForm: FormState = {
  question: "",
  description: "",
  nome_video: "",
};


function formatLocalNaive(): string {
  const d = new Date();
  const pad = (n: number) => String(n).padStart(2, "0");
  const y = d.getFullYear();
  const m = pad(d.getMonth() + 1);
  const day = pad(d.getDate());
  const hh = pad(d.getHours());
  const mm = pad(d.getMinutes());
  const ss = pad(d.getSeconds());
  return `${y}-${m}-${day}T${hh}:${mm}:${ss}`;
}

const AdicionarFaq: React.FC = () => {


  const { apiUrl, refreshFaqTasy } = useFaqTasy();
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState<FormState>(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [created, setCreated] = useState<FaqTasy | null>(null);

  const ws_id = auth?.perfil?.ws_id ?? null;

  const handleChange =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const toPayload = useCallback((): FaqCreatePayload => {
    return {
      question: form.question || null,
      description: form.description || null,
      nome_video: form.nome_video || null,
      criado_em: formatLocalNaive(),
      id_ws: ws_id,
    };
  }, [ws_id, form]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError(null);
    setCreated(null);

    try {
      const createUrl = (apiUrl ?? "").replace(/\/+$/, "");
      const payload = toPayload();

      const res = await fetch(createUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error(`Erro: ${res.status} ${res.statusText}`);

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
        <Button variant="outlined" onClick={() => navigate(-1)}  color="primary">
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
          Cadastrado com Sucesso!
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
          <Box>
            <Button
              type="submit"
              variant="contained"
              disabled={submitting}
              startIcon={
                submitting ? <CircularProgress size={18} /> : undefined
              }
              sx={{
                backgroundColor: "transparent",
                backgroundImage: "linear-gradient(to right, #000000, #003366)",
                color: "#fff",
                backgroundSize: "200%",
                transition: "0.4s",
                "&:hover": {
                  backgroundPosition: "right center",
                  backgroundImage:
                    "linear-gradient(to right, #000000, #003366)",
                },
              }}
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
