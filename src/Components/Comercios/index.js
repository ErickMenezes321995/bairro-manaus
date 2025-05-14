import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  CardHeader,
  Avatar,
  Button,
  Stack,
  TextField
} from "@mui/material";
import StoreIcon from "@mui/icons-material/Store";
import PhoneIcon from "@mui/icons-material/Phone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function Comercio() {

  const [Busca, setBusca] = useState("");
  
  const openWhatsApp = (numero, nome) => {
    const mensagem = `Olá! Gostaria de saber mais sobre os serviços do ${nome}.`;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
  };

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
  ]);

  const [lanchonetes] = useState([
    {
      nome: "Lanche do Zé",
      numero: "+5592991112222",
      horario: "18h às 23h",
      entrega: "Entrega por WhatsApp",
    },
  ]);

  const [farmacias] = useState([
    {
      nome: "Farmácia Popular",
      numero: "+5592992223333",
      horario: "8h às 20h",
      entrega: "Entrega gratuita acima de R$50",
    },
  ]);

  const [saloes] = useState([
    {
      nome: "Salão da Cléo",
      numero: "+5592993334444",
      horario: "10h às 18h",
      entrega: "Atendimento com horário marcado",
    },
  ]);

  const [igrejas] = useState([
    {
      nome: "Igreja Batista Santo Antônio",
      numero: "+5592994445555",
      horario: "Domingo às 19h",
      entrega: "Atividades semanais",
    },
  ]);

  const [escolas] = useState([
    {
      nome: "Escola Estadual João da Silva",
      numero: "+5592995556666",
      horario: "7h às 17h",
      entrega: "Ensino fundamental e médio",
    },
  ]);

  const comerciosFiltrados = [...mercadinhos, ...lanchonetes, ...farmacias, ...saloes, ...igrejas, ...escolas].filter((item) =>
    item.nome.toLowerCase().includes(Busca.toLowerCase())
  );

  const renderComercios = (titulo, lista) => (
    <>
       {titulo && (
      <Typography
        variant="h5"
        sx={{
          mt: 6,
          mb: 2,
          fontWeight: "bold",
          textAlign: "center"
        }}
      >
        {titulo}
      </Typography>
    )}

      <Grid container spacing={3} justifyContent="center">
        {lista.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
           <Card
              sx={{
                width: 300,           // Largura fixa
                height: 250,          // Altura fixa
                borderRadius: 3,
                boxShadow: 3,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between", // distribui melhor os espaços
                p: 1,                  // padding interno opcional
              }}
            >
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: "#25D366" }}>
                    <StoreIcon />
                  </Avatar>
                }
                title={item.nome}
                subheader="Comércio local"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  <PhoneIcon fontSize="small" /> {item.numero}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  <AccessTimeIcon fontSize="small" /> {item.horario}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <LocalShippingIcon fontSize="small" /> {item.entrega}
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
                    onClick={() => openWhatsApp(item.numero, item.nome)}
                  >
                    WhatsApp
                  </Button>
                </Stack>
              </CardContent>
            </Card>

          </Grid>
        ))}
      </Grid>
    </>
  );

  return (
    <div
      style={{
        padding: "2rem",
        paddingLeft: "1rem",
        paddingRight: "1rem",
        backgroundColor: "#f9fafb",
        minHeight: "100vh",
      }}
    >
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          fontWeight: "bold",
          mb: 4,
          fontSize: {
            xs: "1.3rem",
            sm: "2rem",
            md: "2.5rem",
            lg: "2.5rem",
          },
          maxWidth: "900px",
          margin: "0 auto",
          px: 2,
        }}
      >
        🏘️ Guia de Comércios e Serviços da Colônia Santo Antônio!
      </Typography>

      {/* Input de pesquisa único para todas as categorias */}
      <Stack direction="row" justifyContent="center" mb={4} px={{ xs: 2, sm: 0 }} sx={{marginTop:"8px"}}>
        <TextField
          label="Buscar por nome"
          variant="outlined"
          value={Busca}
          onChange={(e) => setBusca(e.target.value)}
          sx={{ width: "100%", maxWidth: 400 }}
        />
      </Stack>

     {/* Se há busca, mostra resultados sem título */}
      {Busca.trim()
        ? renderComercios("", comerciosFiltrados)
        : (
          <>
            {renderComercios("🛒 Mercadinhos", mercadinhos)}
            {renderComercios("🍔 Lanchonetes", lanchonetes)}
            {renderComercios("💊 Farmácias", farmacias)}
            {renderComercios("✂️ Salões de Beleza", saloes)}
            {renderComercios("⛪ Igrejas", igrejas)}
            {renderComercios("🏫 Escolas", escolas)}
          </>
        )}
    </div>
  );
}

export default Comercio;





