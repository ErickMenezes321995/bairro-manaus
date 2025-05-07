import React, { useState } from "react";
import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Box,
} from "@mui/material";
import Noticia from "../../Components/G1news";
import Importantes from "../../Components/Importantes";
import Comercio from "../../Components/Comercios";
import CarroselComponent from "../../Components/Carrosel";
import '../Home/Home.css';

function Home() {
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = () => {
    if (email.trim() === "" || mensagem.trim() === "") {
      alert("Por favor, preencha todos os campos.");
      return;
    } else {
      alert(`Sua dúvida foi enviada! Em breve entraremos em contato com ${email}.`);
      setEmail("");
      setMensagem("");
    }
  };

  return (
    <Box sx={{ bgcolor: "#f5f5f5", minHeight: "100vh" }}>

      <CarroselComponent />

      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Grid container spacing={4}>
          {/* Coluna da direita: Formulário + extras */}
          <Grid item xs={12} md={6}>

            <div className="todos">
              <div className="primeira">
                {/* Formulário para tirar dúvidas */}
                <Typography variant="h5" gutterBottom>
                  Tire suas dúvidas com a equipe da comunidade
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

                {/* Seção de comercios locais */}
                <div style={{ marginTop: "20px" }}>
                  <Comercio />
                </div>

                {/* Seção de informações importantes */}
                <div style={{ marginTop: "20px" }}>
                  <Importantes />
                </div>
              </div>

              <div className="segunda">
                {/* Coluna da esquerda: Notícias */}
                <Typography variant="h5" gutterBottom>
                  Últimas Notícias de Manaus
                </Typography>
                <Noticia />
              </div>
            </div>

          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Home;

