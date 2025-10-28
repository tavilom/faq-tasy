import { useState, useMemo } from "react";
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
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EditIcon from "@mui/icons-material/Edit";
import useFaqTasy from "@/shared/hooks/useFaqTasy";
import { motion } from "framer-motion";
import { pageVariants } from "@/shared/styles/animationStyle";

const VerFaqTasy = () => {
  const { faqtasy, loadingFaqTasy, errorFaqTasy, refreshFaqTasy: fetchFaq } = useFaqTasy();

  const listaFaqTasy = Array.isArray(faqtasy) ? faqtasy : [];

  // corrigido: serach -> search
  const [search, setSearch] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [faqSelecionada, setFaqSelecionada] = useState<any>(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleOpenModal = (f: any) => {
    setFaqSelecionada(f);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setFaqSelecionada(null);
  };

  const filteredFaqTasy = useMemo(() => {
    if (!search) return listaFaqTasy;
    const lowerSearch = search.toLowerCase();
    return listaFaqTasy.filter((f) => {
      return (
        String(f?.id ?? "").toLowerCase().includes(lowerSearch) ||
        (f?.question?.toLowerCase().includes(lowerSearch) ?? false) ||
        // corrigido: toLocaleLowerCase com "o" minúsculo
        (f?.description?.toLowerCase().includes(lowerSearch) ?? false) ||
        (f?.nome_video?.toLowerCase().includes(lowerSearch) ?? false)
      );
    });
  }, [search, listaFaqTasy]);

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
          FAQ Tasy
        </Typography>

        <TextField
          fullWidth
          label="Pesquise por pergunta, descrição ou vídeo"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          variant="outlined"
        />

        {filteredFaqTasy.length === 0 ? (
          <Typography align="center">Nenhuma FAQ encontrada.</Typography>
        ) : (
          <Box>
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
              <Typography variant="subtitle2">
                Resultados: {filteredFaqTasy.length}
              </Typography>
              {/* <Chip label="Exibindo em Accordion" size="small" /> */}
            </Stack>

            {filteredFaqTasy.map((f) => {
              const key = f?.id ?? `${f?.question}-${Math.random()}`;
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

                    <IconButton
                      size="small"
                      color="primary"
                      onClick={(e) => {
                        e.stopPropagation(); 
                        handleOpenModal(f);
                      }}
                      aria-label="Editar FAQ"
                    >
                      <EditIcon fontSize="small" />
                    </IconButton>
                  </AccordionSummary>

                  <Divider />

                  <AccordionDetails>
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
                        <Typography variant="body2" sx={{ wordBreak: "break-word" }}>
                          {f?.nome_video ?? "-"}
                        </Typography>
                      </Box>

                    
                    </Stack>
                  </AccordionDetails>
                </Accordion>
              );
            })}
          </Box>
        )}

        {/* <AtualizarFaqTasy
          open={openModal}
          onClose={handleCloseModal}
          faqSelecionada={faqSelecionada}
          refreshLista={fetchFaq}
        /> */}
      </Box>
    </motion.div>
  );
};

export default VerFaqTasy;
