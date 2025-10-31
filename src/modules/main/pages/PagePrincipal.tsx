import { useContext, useMemo } from "react"; 
import { Box, Typography, Divider, Button, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { pageVariants } from "@/shared/styles/animationStyle";
import PaperBackground from "@/shared/components/PaperBackground";
import { useNavigate } from "react-router-dom";
import VerFaqTasy from "../components/VerFaq";
import { AuthContext } from "@/stores/AuthContext"; 

//  normalizador e checagem de setor TI
function normalizarSetor(valor?: string): string {
  return String(valor ?? "")
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .replace(/[\s-]+/g, "_")
    .trim();
}
function isSetorTI(setor?: string): boolean {
  const s = normalizarSetor(setor);
  const candidatos = new Set([
    "tecnologia_da_informacao",
    "ti",
    "tecnologia_informacao",
    "tecnologia_da_informacao_ti",
  ]);
  return s.length > 0 && (candidatos.has(s) || s.includes("tecnologia_da_informacao"));
}

const Inicial = () => {
  const navigate = useNavigate();
  const auth = useContext(AuthContext); 

  const podeAdicionar = useMemo(
    () => isSetorTI(auth?.perfil?.setor),
    [auth?.perfil?.setor]
  ); 

  function handleGoAddFaq() {
    if (!podeAdicionar) return; 
    navigate("/faq/adicionar");
  }

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4 }}
      variants={pageVariants}
    >
      <Box p={2}>
        <PaperBackground>
          <Stack
            className="no-print"
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ m: 3, mt: 1 }}
          >
            <Typography variant="h1" sx={{ m: 1, fontSize: 28 }}>
              FAQ Tasy
            </Typography>

            {/* << ADIÇÃO: botão só aparece para TI */}
            {podeAdicionar && (
              <Button
                variant="contained"
                onClick={handleGoAddFaq}
                color="primary"
              >
                Adicionar FAQ
              </Button>
            )}
          </Stack>

          <Divider sx={{ my: 2 }} />

          <VerFaqTasy />
        </PaperBackground>
      </Box>
    </motion.div>
  );
};

export default Inicial;
