import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  CardHeader,
  Avatar,
  Button,
  Stack
} from "@mui/material";
import StoreIcon from "@mui/icons-material/Store";
import PhoneIcon from "@mui/icons-material/Phone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function Comercio() {
  const [mercadinhos] = useState([
    {
      nome: "Mercadinho Ceará",
      numero: "+5592993847070",
      horario: "5h30 às 9h00",
      entrega: "Entregamos a domicílio",
    },
    {
      nome: "Mini Box da Leste",
      numero: "+5592991234567",
      horario: "6h00 às 22h00",
      entrega: "Delivery grátis na ZL",
    },
    {
      nome: "Super Econômico",
      numero: "+5592992349876",
      horario: "24 horas",
      entrega: "Delivery e retirada",
    },
    {
      nome: "supermercado Atack",
      numero: "+5592992349876",
      horario: "24 horas",
      entrega: "Delivery e retirada",
    },
  ]);

  const openWhatsApp = (numero, nome) => {
    const mensagem = `Olá! Gostaria de saber mais sobre os produtos do ${nome}.`;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
  };

  return (
    <div
      style={{
        padding: "2rem",
        backgroundColor: "#f9fafb",
        minHeight: "100vh",
      }}
    >
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", mb: 4, fontSize: {
          xs: '1.3rem',  // para telas pequenas
          sm: '2rem',
          md: '2.5rem',
          lg: '3rem',     // em telas grandes mantém o h3
        },
        textAlign: 'center',
        maxWidth: '900px',
        margin: '0 auto',
        px: 2, // padding horizontal responsivo
       }}
      >
        🛒 Comércios do Bairro
      </Typography>

      <Grid container spacing={3}>
        {mercadinhos.map((mercado, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: 3,
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: "#25D366" }}>
                    <StoreIcon />
                  </Avatar>
                }
                title={mercado.nome}
                subheader="Comércio local"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  <PhoneIcon fontSize="small" /> {mercado.numero}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  <AccessTimeIcon fontSize="small" /> {mercado.horario}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <LocalShippingIcon fontSize="small" /> {mercado.entrega}
                </Typography>

                <Stack
                  mt={3}
                  direction={{ xs: "column", sm: "row" }}
                  spacing={1}
                  justifyContent="flex-end"
                >
                  <Button
                    fullWidth
                    variant="contained"
                    color="success"
                    startIcon={<WhatsAppIcon />}
                    onClick={() => openWhatsApp(mercado.numero, mercado.nome)}
                  >
                    WhatsApp
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Comercio;
