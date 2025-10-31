import { useState, useMemo, useContext } from "react";
import {
  Box,
  CircularProgress,
  Typography,
  Alert,
  TextField,
  IconButton,
  useMediaQuery,
  useTheme,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
  Stack,
  Tooltip,
  Snackbar,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import useFaqTasy from "@/shared/hooks/useFaqTasy";
import AtualizarFaqTasy from "./AtualizarFaqTasy";
import { motion } from "framer-motion";
import { pageVariants } from "@/shared/styles/animationStyle";

import { AuthContext } from "@/stores/AuthContext";

function normalizarSetor(valor?: string): string {
  return String(valor ?? "")
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .replace(/[\s-]+/g, "_")
    .trim();
}

const VerFaqTasy = () => {
  const {
    faqtasy,
    loadingFaqTasy,
    errorFaqTasy,
    refreshFaqTasy: fetchFaq,
    apiUrl,
    deleteFaqTasy,
    deletingFaqId,
    deleteError,
  } = useFaqTasy();

  const auth = useContext(AuthContext);

  const listaFaqTasy = Array.isArray(faqtasy) ? faqtasy : [];

  const [search, setSearch] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [faqSelecionada, setFaqSelecionada] = useState<any>(null);

  // estados de exclusão / feedback
  const [openConfirmDelete, setOpenConfirmDelete] = useState(false);
  const [faqParaExcluir, setFaqParaExcluir] = useState<any>(null);
  const [excluindo, setExcluindo] = useState(false);
  const [snack, setSnack] = useState<{
    open: boolean;
    message: string;
    severity: "success" | "error" | "info";
  }>({
    open: false,
    message: "",
    severity: "info",
  });

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const podeEditarFAQ = useMemo(() => {
    const setorNorm = normalizarSetor(auth?.perfil?.setor);

    const candidatosPermitidos = new Set([
      "tecnologia_da_informacao",
      "tecnologia_da_informacao_ti",
      "ti",
      "tecnologia_informacao",
    ]);
    return (
      setorNorm.length > 0 &&
      (candidatosPermitidos.has(setorNorm) ||
        setorNorm.includes("tecnologia_da_informacao"))
    );
  }, [auth?.perfil?.setor]);

  const handleOpenModal = (f: any) => {
    if (!podeEditarFAQ) return;
    setFaqSelecionada(f);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setFaqSelecionada(null);
  };

  const viewBase = useMemo(
    () => (apiUrl ?? "").split("?")[0].replace(/\/+$/, ""),
    [apiUrl]
  );

  const filteredFaqTasy = useMemo(() => {
    if (!search) return listaFaqTasy;
    const lowerSearch = search.toLowerCase();
    return listaFaqTasy.filter((f) => {
      return (
        String(f?.id ?? "").toLowerCase().includes(lowerSearch) ||
        (f?.question?.toLowerCase().includes(lowerSearch) ?? false) ||
        (f?.description?.toLowerCase().includes(lowerSearch) ?? false) ||
        (f?.nome_video?.toLowerCase().includes(lowerSearch) ?? false)
      );
    });
  }, [search, listaFaqTasy]);

  const handleClickExcluir = (f: any) => {
    if (!podeEditarFAQ) return;
    setFaqParaExcluir(f);
    setOpenConfirmDelete(true);
  };

  const handleCloseConfirm = () => {
    if (excluindo) return;
    setOpenConfirmDelete(false);
    setFaqParaExcluir(null);
  };

  const confirmarExclusao = async () => {
    if (!faqParaExcluir?.id) return;
    setExcluindo(true);
    try {
      const ok = await deleteFaqTasy(Number(faqParaExcluir.id));
      if (ok) {
        setSnack({
          open: true,
          message: "FAQ excluída com sucesso.",
          severity: "success",
        });
        // opcional: await fetchFaq();
      } else {
        setSnack({
          open: true,
          message: deleteError ?? "Não foi possível excluir a FAQ.",
          severity: "error",
        });
      }
    } finally {
      setExcluindo(false);
      setOpenConfirmDelete(false);
      setFaqParaExcluir(null);
    }
  };

  if (loadingFaqTasy) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="50vh">
        <CircularProgress />
      </Box>
    );
  }

  if (errorFaqTasy) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="50vh">
        <Alert severity="error">{errorFaqTasy}</Alert>
      </Box>
    );
  }

  return (
    <motion.div initial="initial" animate="animate" exit="exit" transition={{ duration: 0.4 }} variants={pageVariants}>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          px: isMobile ? 1 : 3,
          py: 2,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography variant="h5" sx={{ textAlign: isMobile ? "center" : "left" }}>
          Pesquisar...
        </Typography>

        <TextField
          fullWidth
          label="Pesquise por pergunta ou descrição"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          variant="outlined"
        />

        {filteredFaqTasy.length === 0 ? (
          <Typography align="center">Nenhuma FAQ encontrada.</Typography>
        ) : (
          <Box>
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
              <Typography variant="subtitle2">Resultados: {filteredFaqTasy.length}</Typography>
            </Stack>

            {filteredFaqTasy.map((f) => {
              const key = f?.id ?? `${f?.question}-${Math.random()}`;
              const summaryId = `faq-summary-${key}`;
              const detailsId = `faq-details-${key}`;
              const videoSrc = f?.id ? `${viewBase}/${f.id}/video` : null;

              return (
                <Accordion
                  key={key}
                  disableGutters
                  sx={{
                    mb: 1,
                    borderRadius: 1,
                    overflow: "hidden",
                    "&::before": { display: "none" },
                    border: (theme) => `1px solid ${theme.palette.divider}`,
                  }}
                >
                  <AccordionSummary
                    id={summaryId}
                    aria-controls={detailsId}
                    expandIcon={<ExpandMoreIcon />}
                    sx={{
                      "& .MuiAccordionSummary-content": {
                        alignItems: "center",
                        gap: 2,
                        mr: 1,
                      },
                    }}
                  >
                    <Typography sx={{ flex: 1, fontWeight: 600, wordBreak: "break-word" }}>
                      {f?.question ?? "Pergunta não informada"}
                    </Typography>

                    {podeEditarFAQ && (
                      <Box
                        onClick={(e) => e.stopPropagation()}
                        onFocus={(e) => e.stopPropagation()}
                        sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                      >
                        <Tooltip title="Editar FAQ">
                          <IconButton
                            component="div"
                            size="small"
                            aria-label="Editar FAQ"
                            onClick={() => handleOpenModal(f)}
                            sx={{ "& svg": { color: "#003366" } }}
                          >
                            <EditIcon fontSize="small" />
                          </IconButton>
                        </Tooltip>

                        <Tooltip title="Excluir FAQ">
                          <IconButton
                            component="div"
                            size="small"
                            aria-label="Excluir FAQ"
                            onClick={() => handleClickExcluir(f)}
                            disabled={deletingFaqId === f?.id}
                            sx={{ "& svg": { color: "#8B0000" } }}
                          >
                            <DeleteIcon fontSize="small" />
                          </IconButton>
                        </Tooltip>
                      </Box>
                    )}
                  </AccordionSummary>

                  <Divider sx={{ my: 2 }} />

                  <AccordionDetails id={detailsId} aria-labelledby={summaryId}>
                    <Stack spacing={1.5}>
                      <Box>
                        <Typography variant="caption" color="text.secondary">
                          Descrição
                        </Typography>
                        <Typography variant="body1" sx={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
                          {f?.description ?? "-"}
                        </Typography>
                      </Box>

                      <Box>
                        <Typography variant="caption" color="text.secondary">
                          Vídeo demonstrativo
                        </Typography>

                        {f?.nome_video ? (
                          <Box sx={{ mt: 1 }} onClick={(e) => e.stopPropagation()} onFocus={(e) => e.stopPropagation()}>
                            <video controls style={{ width: "100%", maxHeight: 400, borderRadius: 8 }} src={videoSrc ?? undefined} />
                          </Box>
                        ) : (
                          <Typography variant="body2" sx={{ wordBreak: "break-word" }}>
                            -
                          </Typography>
                        )}
                      </Box>
                    </Stack>
                  </AccordionDetails>
                </Accordion>
              );
            })}
          </Box>
        )}

        <AtualizarFaqTasy open={openModal} onClose={handleCloseModal} faqSelecionada={faqSelecionada} refreshLista={fetchFaq} />
      </Box>

      <Dialog open={openConfirmDelete} onClose={handleCloseConfirm} fullWidth maxWidth="xs">
        <DialogTitle>Excluir FAQ</DialogTitle>
        <DialogContent dividers>
          <Typography>
            Tem certeza que deseja excluir a FAQ <strong>{faqParaExcluir?.question ?? `#${faqParaExcluir?.id}`}</strong>?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseConfirm} disabled={excluindo}>
            Cancelar
          </Button>
          <Button onClick={confirmarExclusao} color="error" variant="contained" disabled={excluindo}>
            {excluindo ? "Excluindo..." : "Excluir"}
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={snack.open}
        autoHideDuration={4000}
        onClose={() => setSnack((s) => ({ ...s, open: false }))}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={() => setSnack((s) => ({ ...s, open: false }))} severity={snack.severity} variant="filled" sx={{ width: "100%" }}>
          {snack.message}
        </Alert>
      </Snackbar>
    </motion.div>
  );
};

export default VerFaqTasy;
