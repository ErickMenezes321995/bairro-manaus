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
import Calendario from "../../Components/Calendario"; 


function Home() { 
  const [email, setEmail] = useState(""); 
  const [mensagem, setMensagem] = useState(""); 

  const [snackbarOpen, setSnackbarOpen] = useState(false); 
  const [snackbarMessage, setSnackbarMessage] = useState(""); 
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
   // Adicionando o estado para o nome


  const handleSubmit = () => { 
    if (email.trim() === "" || mensagem.trim() === "") { 
      setSnackbarMessage("Por favor, preencha todos os campos."); 
      setSnackbarSeverity("error"); // vermelho
      setSnackbarOpen(true); 
      return; 
    } else { 
      setSnackbarMessage(`Sua mensagem foi enviada! Em breve entraremos em contato com ${email}.`); 
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
  
      <Container maxWidth="lg" sx={{ mt: 4, marginTop:"-5px" }}> 
        <Grid container spacing={4}> 
          <Grid item xs={12} md={6}> 
            <div className="todos"> 
              <div className="primeira"> 
                <Container maxWidth="md" sx={{ mt: 4 }}>
                   <Typography
                    variant="h5"
                    gutterBottom
                    sx={{
                      fontSize: { xs: "1.5rem", sm: "2rem" }, // tamanho de fonte responsivo
                    }}
                  >
                    Bem-vindo à Comunidade Manaus Conectada!
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      mb: { xs: 2, sm: 4 },
                      fontSize: { xs: "1rem", sm: "1.125rem" }, // texto ajustado para leitura confortável
                      lineHeight: 1.6,
                    }}
                  >
                    Conecte-se com a comunidade, compartilhe notícias e aproveite as promoções dos mercados locais!
                  </Typography>

                    <Typography
                    variant="h5"
                    gutterBottom
                    sx={{
                      fontSize: { xs: "1.5rem", sm: "2rem" }, // tamanho de fonte responsivo
                    }}
                  >
                    Compartilhe aqui!!
                  </Typography>
                </Container>
                <TextField 
                  fullWidth 
                  label="Seu e-mail ou whatssap" 
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
                  <Calendario />
                </div>

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
        autoHideDuration={7000} // Fecha automaticamente após 6 segundos
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }} // Centraliza a mensagem
        onClose={() => setSnackbarOpen(false)}
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


