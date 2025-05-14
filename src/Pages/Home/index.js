import React, { useState } from "react";
import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Box,
  Snackbar,
  Alert
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Noticia from "../../Components/G1news";
import CarroselComponent from "../../Components/Carrosel";
import Importantes from "../../Components/Importantes";
import "../Home/Home.css";
import MarkVip from "../../Components/MarkVip";

function Home() {
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const handleSubmit = () => {
    if (email.trim() === "" || mensagem.trim() === "") {
      setSnackbarMessage("Por favor, preencha todos os campos.");
      setSnackbarSeverity("error"); // vermelho
      setSnackbarOpen(true);
      return;
    } else {
      setSnackbarMessage(`Sua dúvida foi enviada! Em breve entraremos em contato com ${email}.`);
      setSnackbarSeverity("success"); // verde
      setSnackbarOpen(true);
      setEmail("");
      setMensagem("");
    }
  };

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box sx={{ bgcolor: "#f5f5f5", minHeight: "100vh" }}>
      <CarroselComponent />

      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <div className="todos">
              <div className="primeira">
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{
                    background: "white",
                    fontSize: {
                      xs: "1.3rem",
                      sm: "2rem",
                      md: "2.5rem",
                      lg: "3rem"
                    },
                    textAlign: "center",
                    maxWidth: "900px",
                    margin: "0 auto",
                    px: 2
                  }}
                >
                  Tire suas dúvidas com a equipe da comunidade!!
                </Typography>

                <TextField
                  fullWidth
                  label="Seu e-mail"
                  variant="outlined"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  multiline
                  minRows={4}
                  label="Sua dúvida"
                  variant="outlined"
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                  sx={{ mb: 2 }}
                />
                <Button fullWidth variant="contained" onClick={handleSubmit}>
                  Enviar dúvida
                </Button>

                <div style={{ marginTop: "20px" }}>
                  <MarkVip />
                </div>

                {isDesktop && (
                  <div style={{ marginTop: "20px" }}>
                    <Importantes />
                  </div>
                )}
              </div>

              <div className="segunda">
                <Typography variant="h5" gutterBottom>
                  Últimas Notícias de Manaus
                </Typography>
                <Noticia />
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>

      {/* Snackbar para mensagem de sucesso ou erro */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default Home;


