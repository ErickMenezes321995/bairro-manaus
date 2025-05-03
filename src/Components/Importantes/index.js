import React, { useState } from "react";
import { Box, Card, CardContent, CardMedia, Grid, Typography, Avatar, Divider } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import imege from '../../imgs/Foto perfil instagram homem sofisticado elegante fundo geométrico preto e vermelho.png';

function Importantes() {
  const theme = useTheme();

  const [presidente, setPresidente] = useState([
    {
      img: imege,
      Cargo: 'Presidente do Bairro',
      nome: 'Sr(a) Vlademir Putin',
      Missão: 'Nosso compromisso com o bairro!',
    }
  ]);

  const [comissao, setComissao] = useState([
    {
      nome: 'Sr(a) Erick',
      cargo: 'Acessor',
      funcao: 'Administrar'
    },
  ]);

  const [igreja, setIgreja] = useState([
    {
      igreja: 'Santo Antonio',
      ministro: 'Padre Francisco',
      missao: '',
    }
  ]);

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" align="center" sx={{ marginBottom: 3 }}>
        Comissão de Frente do Bairro
      </Typography>

      {/* Seção Presidente */}
      <Grid container spacing={3} justifyContent="center">
        {presidente.map((presidente, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: 3 }}>
              <CardMedia
                component="img"
                image={presidente.img}
                alt={presidente.nome}
                sx={{ width: '100%', height: 250, objectFit: 'cover' }}
              />
              <CardContent sx={{ textAlign: 'center' }}>
                <Avatar
                  alt={presidente.nome}
                  src={presidente.img}
                  sx={{ width: 80, height: 80, marginBottom: 2 }}
                />
                <Typography variant="h6" gutterBottom>{presidente.Cargo}</Typography>
                <Typography variant="h5" gutterBottom>{presidente.nome}</Typography>
                <Typography variant="body2">{presidente.Missão}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ marginY: 4 }} />

      {/* Seção Comissão */}
      <Typography variant="h5" align="center" sx={{ marginBottom: 3 }}>
        Membros da Comissão
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {comissao.map((comissao, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: 3 }}>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h6">{comissao.cargo}</Typography>
                <Typography variant="h5" gutterBottom>{comissao.nome}</Typography>
                <Typography variant="body2">{comissao.funcao}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ marginY: 4 }} />

      {/* Seção Igreja */}
      <Typography variant="h5" align="center" sx={{ marginBottom: 3 }}>
        Igreja Santo Antonio
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {igreja.map((igreja, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: 3 }}>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h6" gutterBottom>{igreja.igreja}</Typography>
                <Typography variant="body1">{igreja.ministro}</Typography>
                <Typography variant="body2">{igreja.missao}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Importantes;
