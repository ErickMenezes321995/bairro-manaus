import React, { useState } from "react";
import '../../Components/Importantes/presidente.css';
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
    { nome: 'Sr(a) Erick',
      cargo: 'Acessor', 
      funcao: 'Administrar' 
    },
    { nome: 'Sr(a) Ana Paula', 
      cargo: 'Tesoureira', 
      funcao: 'Gerenciar finanças do bairro'
    },
    { nome: 'Sr(a) Carlos Silva', 
      cargo: 'Secretário', 
      funcao: 'Organizar documentos e reuniões' 
    },
    { nome: 'Sr(a) Marta Oliveira', 
      cargo: 'Coordenadora de Eventos', 
      funcao: 'Planejar atividades comunitárias' 
    },
    { nome: 'Sr(a) João Ferreira', 
      cargo: 'Responsável pela Segurança', 
      funcao: 'Monitorar e cuidar da segurança local' 
    },
  ]);

  const [igreja, setIgreja] = useState([
    { igreja: 'Santo Antonio', ministro: 'Padre Francisco', missao: '' }
  ]);

  return (
    <Box className="container-principal">
      <Typography variant="h4" className="titulo-secao">
        Comissão de Frente do Bairro
      </Typography>

     {/* Presidente */}
<Typography variant="h4" className="titulo-secao">Presidência</Typography>
<Grid container spacing={3} justifyContent="center">
  {presidente.map((p, index) => (
    <Grid item xs={12} sm={8} md={6} key={index}>
      <Card sx={{ borderRadius: 4, boxShadow: 6, textAlign: 'center', p: 2 }}>
        <CardMedia
          component="img"
          height="240"
          image={p.img}
          alt={p.nome}
          sx={{ borderRadius: 3 }}
        />
        <CardContent>
          <Avatar
            src={p.img}
            alt={p.nome}
            sx={{
              width: 100,
              height: 100,
              margin: '-60px auto 10px',
              border: '4px solid white',
              boxShadow: 3
            }}
          />
          <Typography variant="h6" color="text.secondary">{p.Cargo}</Typography>
          <Typography variant="h5" fontWeight="bold" color="primary">{p.nome}</Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>{p.Missão}</Typography>
          <Box mt={2}>
            <a
              href={`https://wa.me/5599999999999`} // altere para o número real
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <button className="btn btn-success">Falar no WhatsApp</button>
            </a>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  ))}
</Grid>


      <Divider className="divisor" />

      <Typography variant="h4" className="titulo-secao" sx={{ mt: 5 }}>Membros da Comissão</Typography>
<Grid container spacing={3} justifyContent="center">
  {comissao.map((c, index) => (
    <Grid item xs={12} sm={6} md={4} key={index}>
      <Card sx={{ borderRadius: 3, boxShadow: 4, textAlign: 'center', p: 2 }}>
        <CardContent>
          <Typography variant="h6" color="text.secondary">{c.cargo}</Typography>
          <Typography variant="h6" fontWeight="bold">{c.nome}</Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>{c.funcao}</Typography>
          <a
            href={`https://wa.me/5599999999999`} // personalize por pessoa se desejar
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <button className="btn btn-outline-success btn-sm">WhatsApp</button>
          </a>
        </CardContent>
      </Card>
    </Grid>
  ))}
</Grid>


      <Divider className="divisor" />

      {/* Igreja */}
      <Typography variant="h5" className="titulo-secao">
        Igreja Santo Antonio
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {igreja.map((igreja, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className="cartao">
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h6" className="texto-cargo" gutterBottom>
                  {igreja.igreja}
                </Typography>
                <Typography variant="body1" className="texto-nome">
                  {igreja.ministro}
                </Typography>
                <Typography variant="body2" className="texto-missao">
                  {igreja.missao}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Importantes;
