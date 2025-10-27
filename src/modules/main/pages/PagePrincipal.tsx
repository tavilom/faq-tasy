import { Box, Typography, Divider, Button } from "@mui/material";
import { motion } from "framer-motion";
import { pageVariants } from "@/shared/styles/animationStyle";
import PaperBackground from "@/shared/components/PaperBackground";
import { useNavigate } from "react-router-dom";

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
          <Typography variant="h1" sx={{ m: 3, fontSize: 28 }}>
            FAQ
          </Typography>

          <Divider sx={{ my: 2 }} />

          <Button
            variant="contained"
            onClick={handleGoAddFaq}
            sx={{ mt: 2 }}
          >
            Adicionar FAQ
          </Button>

        </PaperBackground>
      </Box>
    </motion.div>
  );
};

export default Inicial;
