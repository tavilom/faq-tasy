import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
  useTheme,
  useMediaQuery,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

import { useHumor } from "./useHumor";
import GraficoHumor from "./components/GraficoHumor";
import Navbar from "@/modules/users/components/Navbar";
import Logo from "@/assets/images/logo_unimed.png";
import Logo2 from "@/assets/images/pinheiro.jpg";

import {
  mainContainerStyle,
  paperStyle,
  tituloStyle,
  gridMobileStyle,
  buttonMobileStyle,
  gridDesktopStyle,
  buttonDesktopStyle,
  buttonSelectedStyle,
  humorSelecionadoStyle,
  comentarioTituloStyle,
  buttonEnviarStyle,
  statusTextStyle,
} from "@/modules/users/humorStyle";

const opcoes = [
  { label: "Muito Ruim", emoji: "😢" },
  { label: "Ruim", emoji: "😞" },
  { label: "Neutro", emoji: "😐" },
  { label: "Bem", emoji: "🙂" },
  { label: "Muito Bem", emoji: "😄" },
];

const negativos = ["Ruim", "Muito Ruim"];

export default function HumorPage() {
  const {
    status,
    comentario,
    setComentario,
    humorSelecionado,
    ajuda,        
    setAjuda,
    enviadoHoje,
    handleClickHumor,
    enviarHumor,
    setMostrarGrafico,
    mostrarGrafico,
    perfil,
  } = useHumor();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box component="main" sx={mainContainerStyle}>
      <Navbar Logo={Logo} Logo2={Logo2} />

      <Paper elevation={5} sx={paperStyle}>
        <Typography variant="h1" sx={tituloStyle}>
          Como você está se sentindo hoje?
        </Typography>

        {/* ‣ Botões de humor */}
        {isMobile ? (
          <Box sx={gridMobileStyle}>
            {opcoes.map(({ label, emoji }, index) => (
              <Button
                key={label}
                variant="contained"
                onClick={() => handleClickHumor(label)}
                sx={[
                  buttonMobileStyle,
                  humorSelecionado === label && buttonSelectedStyle(theme),
                  index === opcoes.length - 1 && {
                    gridColumn: "span 2",
                    mx: "auto",
                  },
                ]}
                fullWidth
              >
                <span style={{ fontSize: "1.5rem" }}>{emoji}</span>
                <span>{label}</span>
              </Button>
            ))}
          </Box>
        ) : (
          <Box sx={gridDesktopStyle}>
            {opcoes.map(({ label, emoji }) => (
              <Button
                key={label}
                variant="contained"
                onClick={() => handleClickHumor(label)}
                sx={[
                  buttonDesktopStyle,
                  humorSelecionado === label && buttonSelectedStyle(theme),
                ]}
              >
                {emoji} {label}
              </Button>
            ))}
          </Box>
        )}

       
        {humorSelecionado && (
          <Typography variant="h6" sx={humorSelecionadoStyle}>
            Você selecionou: {humorSelecionado}
          </Typography>
        )}

        {/* Comentário */}
        <Box sx={{ width: "100%", mt: 3 }}>
          <Typography variant="h6" sx={comentarioTituloStyle}>
            Caso deseje escrever algum comentário, sinta-se livre
          </Typography>
          <TextField
            label="Digite aqui"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
          />
        </Box>

        
        {humorSelecionado &&
         negativos.includes(humorSelecionado) &&
         !enviadoHoje && (
          <Box sx={{ mt: 2, textAlign: "center" }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={ajuda}
                  onChange={(e) => setAjuda(e.target.checked)}
                />
              }
              label="Precisa de assistência?"
            />
          </Box>
        )}

        
        <Button
          variant="contained"
          sx={buttonEnviarStyle}
          onClick={enviarHumor}
          disabled={!humorSelecionado || enviadoHoje}
        >
          Enviar
        </Button>
        {status && <Typography sx={statusTextStyle}>{status}</Typography>}

        
        <Dialog
          open={mostrarGrafico}
          onClose={() => setMostrarGrafico(false)}
          fullWidth
          maxWidth="md"
        >
          <DialogTitle>
            Seu Histórico de Humor
            <IconButton
              aria-label="Fechar"
              onClick={() => setMostrarGrafico(false)}
              sx={{ position: "absolute", right: 8, top: 8 }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <GraficoHumor id_ws={perfil.id!} />
          </DialogContent>
        </Dialog>
      </Paper>
    </Box>
  );
}
