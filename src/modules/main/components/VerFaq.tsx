import { useState, useMemo } from "react";
import {
  Box,
  CircularProgress,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Alert,
  TextField,
  IconButton,
  Card,
  CardContent,
  CardActions,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit"
import useFaqTasy from "@/shared/hooks/useFaqTasy";
import { motion } from "framer-motion";
import { pageVariants } from "@/shared/styles/animationStyle";

const VerFaqTasy = () => {
  const {
    faqtasy,
    loadingFaqTasy,
    errorFaqTasy,
    refreshFaqTasy: fetchFaq,
  } = useFaqTasy();

  const listaFaqTasy = Array.isArray(faqtasy) ? faqtasy : [];

  const [serach, setSearch] = useState("");
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
    if (!serach) return listaFaqTasy;
    const lowerSearch = serach.toLowerCase();
    return listaFaqTasy.filter((f) => {
      return (
        String(f?.id ?? "")
          .toLowerCase()
          .includes(lowerSearch) ||
        (f?.question?.toLowerCase().includes(lowerSearch) ?? false) ||
        (f?.description?.toLocaleLowerCase().includes(lowerSearch) ?? false)
      );
    });
  }, [serach, listaFaqTasy]);

  if (loadingFaqTasy) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="50vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (errorFaqTasy) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="50vh"
      >
        <Alert severity="error">{errorFaqTasy}</Alert>
      </Box>
    );
  }

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4 }}
      variants={pageVariants}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          px: isMobile ? 1 : 3,
          py: 2,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h5"
          sx={{ mb: 2, textAlign: isMobile ? "center" : "left" }}
        ></Typography>

        <Box sx={{ mb: 2 }}>
          <TextField
            fullWidth
            label="Pesquise por Nome ou descrição"
            value={serach}
            onChange={(e) => setSearch(e.target.value)}
            variant="outlined"
          ></TextField>
        </Box>

        {filteredFaqTasy.length === 0 ? (
          <Typography align="center">Nenhuma Faq encontrada.</Typography>
        ) : isMobile ? (
          <Box display="flex" flexDirection="column" gap={2}>
            {filteredFaqTasy.map((f) => (
              <Card
                key={f.id ?? Math.random()}
                variant="outlined"
                sx={{
                  transition: "all 0.2s ease-in-out",
                  cursor: "pointer",
                  "&:hover": {
                    boxShadow: 6,
                    transform: "translateY(-2px)",
                  },
                }}
              >
                <CardContent>
                  <Typography variant="subtitle2" color="textSecondary">
                    Pergunta: {f?.question ?? "-"}
                  </Typography>
                  <Typography variant="h6">
                    Descrição: {f?.description ?? "-"}
                  </Typography>
                  <Typography variant="body2">
                    Video Descritivo: {f?.nome_video ?? "-"}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "flex-end" }}>
                  <IconButton
                    color="primary"
                    onClick={() => handleOpenModal(f)}
                  >
                    <EditIcon fontSize="small" />
                  </IconButton>
                </CardActions>
              </Card>
            ))}
          </Box>
        ) : (
          <TableContainer
            component={Paper}
            sx={{
              width: "100%",
              flex: 1,
              overflow: "visible",
              boxShadow: "none",
            }}
          >
            <Table
              size="medium"
              sx={{
                width: "100%",
                tableLayout: "auto",
              }}
            >
              <TableHead>
                <TableRow>
                  <TableCell>Pergunta</TableCell>
                  <TableCell>Descrição</TableCell>
                  <TableCell>Video Desmonstrativo</TableCell>
                  <TableCell align="center">Ações</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredFaqTasy.map((f) => (
                  <TableRow key={f?.question ?? Math.random()}>
                    <TableCell
                      sx={{ whiteSpace: "normal", wordBreak: "break-word" }}
                    >
                      {f?.question ?? "-"}
                    </TableCell>
                    <TableCell
                      sx={{ whiteSpace: "normal", wordBreak: "break-word" }}
                    >
                      {f?.description ?? "-"}
                    </TableCell>
                    <TableCell
                      sx={{ whiteSpace: "normal", wordBreak: "break-word" }}
                    >
                      {f?.nome_video ?? "-"}
                    </TableCell>
                    <TableCell align="center">
                      <IconButton
                        color="primary"
                        onClick={() => handleOpenModal(f)}
                      >
                        <EditIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
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
