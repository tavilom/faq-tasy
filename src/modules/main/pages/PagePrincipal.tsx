import { Box, Typography, Divider, Button, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { pageVariants } from "@/shared/styles/animationStyle";
import PaperBackground from "@/shared/components/PaperBackground";
import { useNavigate } from "react-router-dom";
import VerFaqTasy from "../components/VerFaq";

const Inicial = () => {
  const navigate = useNavigate();

  function handleGoAddFaq() {
    navigate("/faq/adicionar"); // ajuste conforme sua rota
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
            <Button
              variant="contained"
              onClick={handleGoAddFaq}
              color="primary"
            >
              Adicionar FAQ
            </Button>
          </Stack>

          <Divider sx={{ my: 2 }} />

          <VerFaqTasy />
        </PaperBackground>
      </Box>
    </motion.div>
  );
};

export default Inicial;
