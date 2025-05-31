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
  TextField,
  Dialog,
  DialogContent,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import StoreIcon from "@mui/icons-material/Store";
import PhoneIcon from "@mui/icons-material/Phone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import dadosComercios from "./comercios.json";

function Comercio() {
  const [busca, setBusca] = useState("");
  const [imagemSelecionada, setImagemSelecionada] = useState(null);
  const [modalAberto, setModalAberto] = useState(false);
  const [filtro, setFiltro] = useState(null);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const openWhatsApp = (numero, nome) => {
    const mensagem = `Olá! Gostaria de saber mais sobre os serviços do ${nome}.`;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
  };

  const abrirModalImagem = (imagem) => {
    setImagemSelecionada(imagem);
    setModalAberto(true);
  };

  const fecharModalImagem = () => {
    setImagemSelecionada(null);
    setModalAberto(false);
  };

  const categorias = {
    mercadinhos: dadosComercios.mercadinhos || [],
    lanchonetes: dadosComercios.lanchonetes || [],
    farmacias: dadosComercios.farmacias || [],
    saloes: dadosComercios.saloes || [],
    igrejas: dadosComercios.igrejas || [],
    escolas: dadosComercios.escolas || [],
  };

  const todosComercios = Object.values(categorias).flat();

  // Filtra com base na busca por nome (independente da categoria/filtro)
  const comerciosFiltrados = todosComercios.filter((item) =>
    item.nome.toLowerCase().includes(busca.toLowerCase())
  );

  // Renderiza os cards em grid, com título opcional
  const renderComercios = (titulo, lista) => (
    <>
      {titulo && (
        <Typography
          variant="h5"
          sx={{ mt: 6, mb: 2, fontWeight: "bold", textAlign: "center" }}
        >
          {titulo}
        </Typography>
      )}

      <Grid container spacing={3} justifyContent="center">
        {lista.map((item, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              sx={{
                width: 300,
                height: 320,
                borderRadius: 3,
                boxShadow: 3,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                p: 1,
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
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  <LocalShippingIcon fontSize="small" /> {item.entrega}
                </Typography>

                {item.localizacao && (
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    gutterBottom
                    sx={{ cursor: "pointer", textDecoration: "underline" }}
                    onClick={() => window.open(item.localizacao, "_blank")}
                  >
                    <LocationOnIcon
                      fontSize="small"
                      sx={{ mr: 0.5, verticalAlign: "middle" }}
                    />
                    Localização
                  </Typography>
                )}

                <Stack mt={3} spacing={1}>
                  <Button
                    fullWidth
                    variant="contained"
                    color="success"
                    startIcon={<WhatsAppIcon />}
                    onClick={() => openWhatsApp(item.numero, item.nome)}
                  >
                    WhatsApp
                  </Button>
                  {item.imagem && (
                    <Button
                      fullWidth
                      variant="outlined"
                      color="primary"
                      onClick={() => abrirModalImagem(item.imagem)}
                    >
                      Ver Panfleto
                    </Button>
                  )}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );

  const tituloCategoria = {
    mercadinhos: "🛒 Mercadinhos",
    lanchonetes: "🍔 Lanchonetes",
    farmacias: "💊 Farmácias",
    saloes: "✂️ Salões de Beleza",
    igrejas: "⛪ Igrejas",
    escolas: "🏫 Escolas",
  };

  return (
    <div
      style={{
        padding: "2rem 1rem",
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
          fontSize: { xs: "1.3rem", sm: "2rem", md: "2.5rem" },
          maxWidth: "900px",
          margin: "0 auto",
          px: 2,
        }}
      >
        🏘️ Guia de Comércios e Serviços da Colônia Santo Antônio!
      </Typography>

      {/* Filtros */}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={1}
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        mb={2}
      >
        {["Todos", ...Object.keys(categorias)].map((cat) => (
          <Button
            key={cat}
            fullWidth
            variant={
              filtro === (cat === "Todos" ? null : cat) ? "contained" : "outlined"
            }
            onClick={() => setFiltro(cat === "Todos" ? null : cat)}
          >
            {cat === "Todos" ? "Todos" : tituloCategoria[cat]}
          </Button>
        ))}
      </Stack>

      {/* Busca */}
      <Stack direction="row" justifyContent="center" mb={4} px={{ xs: 2, sm: 0 }}>
        <TextField
          label="Buscar por nome"
          variant="outlined"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          sx={{ width: "100%", maxWidth: 400 }}
        />
      </Stack>

      {/* Lista */}
      {busca.trim() ? (
        // Se tem busca, mostra todos que bateram na busca, sem título, em grid
        renderComercios("", comerciosFiltrados)
      ) : filtro ? (
        // Se tem filtro, mostra só essa categoria em grid
        renderComercios(tituloCategoria[filtro], categorias[filtro])
      ) : (
        // Se não tem filtro nem busca, mostra todas categorias, cada uma em seu grid com título
        Object.entries(categorias).map(([chave, lista]) =>
          renderComercios(tituloCategoria[chave], lista)
        )
      )}

      {/* Modal */}
      <Dialog open={modalAberto} onClose={fecharModalImagem} maxWidth="md" fullScreen={fullScreen}>
        <DialogContent sx={{ position: "relative", p: 0 }}>
          <IconButton
            onClick={fecharModalImagem}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              color: "white",
              backgroundColor: "rgba(0,0,0,0.4)",
              "&:hover": { backgroundColor: "rgba(0,0,0,0.6)" },
            }}
          >
            <CloseIcon />
          </IconButton>
          {imagemSelecionada && (
            <div style={{ overflow: "auto", touchAction: "pinch-zoom" }}>
              <img
                src={imagemSelecionada}
                alt="Panfleto"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  maxWidth: "100%",
                }}
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Comercio;










