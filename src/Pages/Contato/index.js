import React from "react";
import { Container, Grid, Box, Typography, Paper } from "@mui/material";
import SchoolIcon from '@mui/icons-material/School';
import PhoneIcon from '@mui/icons-material/Phone';
import Importantes from "../../Components/Importantes";

function Contato() {
  return (
    <Box sx={{ backgroundColor: '#f0f4f8', minHeight: '100vh', py: 4 }}>
      <Container maxWidth="md">
        <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 4, display: 'flex', alignItems: 'center' }}>
          <PhoneIcon sx={{ mr: 1, color: 'primary.main' }} />
          Contatos importantes do Bairro!
        </Typography>

        <Importantes />

        <Paper elevation={3} sx={{ mt: 6, p: 3, backgroundColor: 'white' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <SchoolIcon sx={{ mr: 1, color: 'primary.main' }} />
            <Typography variant="h5" component="h2">
              Escola Municipal Lucilas Freitas
            </Typography>
          </Box>
          <Typography variant="body1" sx={{ mb: 1 }}>
            <strong>Número:</strong> (00) 00000 - 00000
          </Typography>
          <Typography variant="body1">
            <strong>Missão:</strong> Formar cidadãos conscientes, críticos e preparados para transformar
            a sociedade por meio da educação de qualidade, respeito e inclusão.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}

export default Contato;
