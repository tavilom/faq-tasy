import { Box, Typography, Divider, Button } from "@mui/material";
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
          <Typography variant="h1" sx={{ m: 3, fontSize: 28 }}>
            FAQ Tasy
          </Typography>

          <Divider sx={{ my: 2 }} />

          <Button
            variant="contained"
            onClick={handleGoAddFaq}
            sx={{
              mt: 2,
              backgroundColor: "transparent",
              backgroundImage: "linear-gradient(to right, #000000, #003366)",
              color: "#fff",
              backgroundSize: "200%",
              transition: "0.4s",
              "&:hover": {
                backgroundPosition: "right center",
                backgroundImage: "linear-gradient(to right, #000000, #003366)",
              },
            }}
          >
            Adicionar FAQ
          </Button>

          <VerFaqTasy />
        </PaperBackground>
      </Box>
    </motion.div>
  );
};

export default Inicial;
