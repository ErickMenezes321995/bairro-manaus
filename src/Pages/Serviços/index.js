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
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  useTheme,
  useMediaQuery,
  Snackbar,
  Alert,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CircleIcon from "@mui/icons-material/Circle";

const statusColors = {
  online: "green",
  ocupado: "orange",
  offline: "gray",
};

const profissionaisMockInicial = [
  {
    id: 1,
    nome: "João da Silva",
    servico: "Pedreiro",
    telefone: "11912345678",
    localizacao: "https://maps.google.com?q=Bairro+Central",
    status: "online",
    foto: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    nome: "Carlos Oliveira",
    servico: "Carpinteiro",
    telefone: "11998765432",
    localizacao: "https://maps.google.com?q=Vila+Nova",
    status: "ocupado",
    foto: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: 3,
    nome: "Maria Souza",
    servico: "Soldadora",
    telefone: "11987654321",
    localizacao: "https://maps.google.com?q=Jardim+das+Flores",
    status: "offline",
    foto: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: 4,
    nome: "erick saraiva",
    servico: "programador",
    telefone: "92993847070",
    localizacao: "https://maps.google.com?q=Jardim+das+Flores",
    status: "offline",
    foto: "https://i.pravatar.cc/150?img=3",
  },
];

function PaginaProfissionais() {
  const [profissionais, setProfissionais] = useState(profissionaisMockInicial);
  const [busca, setBusca] = useState("");
  const [imagemSelecionada, setImagemSelecionada] = useState(null);
  const [modalAberto, setModalAberto] = useState(false);

  const [loginTelefone, setLoginTelefone] = useState("");
  const [usuarioLogado, setUsuarioLogado] = useState(null);
  const [novoStatus, setNovoStatus] = useState("");

  // Estados para Snackbar
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  // Abrir modal de imagem
  const abrirModalImagem = (imagem) => {
    setImagemSelecionada(imagem);
    setModalAberto(true);
  };

  // Fechar modal de imagem
  const fecharModalImagem = () => {
    setImagemSelecionada(null);
    setModalAberto(false);
  };

  // Abrir WhatsApp com mensagem
  const openWhatsApp = (numero, nome) => {
    const mensagem = `Olá! Gostaria de saber mais sobre seus serviços, ${nome}.`;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
  };

  // Função para abrir snackbar
  const abrirSnackbar = (message, severity = "success") => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setSnackbarOpen(true);
  };

  // Fechar snackbar
  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") return;
    setSnackbarOpen(false);
  };

  // Filtra profissionais pelo nome ou serviço
  const profissionaisFiltrados = profissionais.filter(
    (p) =>
      p.nome.toLowerCase().includes(busca.toLowerCase()) ||
      p.servico.toLowerCase().includes(busca.toLowerCase())
  );

  // Fazer login só com telefone
  const handleLogin = () => {
    const usuario = profissionais.find((p) => p.telefone === loginTelefone);
    if (usuario) {
      setUsuarioLogado(usuario);
      setNovoStatus(usuario.status);
      abrirSnackbar(`Bem-vindo, ${usuario.nome}! Você está logado.`, "success");
    } else {
      abrirSnackbar("Usuário não encontrado.", "error");
    }
  };

  // Fazer logout
  const handleLogout = () => {
    setUsuarioLogado(null);
    setLoginTelefone("");
    setNovoStatus("");
    abrirSnackbar("Você saiu da conta.", "info");
  };

  // Atualizar status do usuário logado
  const handleSalvarStatus = () => {
    if (!novoStatus) {
      abrirSnackbar("Selecione um status válido.", "warning");
      return;
    }

    setProfissionais((prev) =>
      prev.map((p) =>
        p.id === usuarioLogado.id ? { ...p, status: novoStatus } : p
      )
    );

    setUsuarioLogado((prev) => ({ ...prev, status: novoStatus }));
    abrirSnackbar("Status atualizado com sucesso!", "success");
  };

  return (
    <div
      style={{
        padding: "1rem",
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
          mb: 3,
          fontSize: {
            xs: "1.5rem",
            sm: "2rem",
            md: "2.5rem",
            lg: "3rem",
          },
        }}
      >
        👷 Profissionais de Mão de Obra da Comunidade
      </Typography>

      {/* Área de login e logout */}
      {!usuarioLogado ? (
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="center"
          mb={3}
          alignItems="center"
        >
          <TextField
            label="Senha"
            variant="outlined"
            value={loginTelefone}
            onChange={(e) => setLoginTelefone(e.target.value)}
            sx={{ width: { xs: "100%", sm: 250 } }}
            placeholder="Digite sua Senha"
            inputProps={{ inputMode: "tel" }}
          />
          <Button
            variant="contained"
            onClick={handleLogin}
            sx={{ width: { xs: "100%", sm: "auto" }, py: 1.5 }}
          >
            Entrar
          </Button>
        </Stack>
      ) : (
        <Stack
          direction="column"
          spacing={2}
          alignItems="center"
          mb={3}
          sx={{
            border: "1px solid #ccc",
            p: 2,
            borderRadius: 2,
            maxWidth: 400,
            margin: "0 auto",
            backgroundColor: "#fff",
            width: "100%",
          }}
        >
          <Typography variant="h6" align="center">
            Olá, {usuarioLogado.nome}!
          </Typography>

          <FormControl fullWidth>
            <InputLabel id="select-status-label">Alterar Status</InputLabel>
            <Select
              labelId="select-status-label"
              value={novoStatus}
              label="Alterar Status"
              onChange={(e) => setNovoStatus(e.target.value)}
            >
              <MenuItem value="online">Online</MenuItem>
              <MenuItem value="ocupado">Ocupado</MenuItem>
              <MenuItem value="offline">Offline</MenuItem>
            </Select>
          </FormControl>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            width="100%"
            justifyContent="center"
          >
            <Button
              variant="contained"
              color="primary"
              onClick={handleSalvarStatus}
              sx={{ py: 1.5, width: { xs: "100%", sm: "auto" } }}
            >
              Salvar
            </Button>
            <Button
              variant="outlined"
              color="error"
              onClick={handleLogout}
              sx={{ py: 1.5, width: { xs: "100%", sm: "auto" } }}
            >
              Sair
            </Button>
          </Stack>
        </Stack>
      )}

      <Stack direction="row" justifyContent="center" mb={3} px={1}>
        <TextField
          label="Buscar por nome ou serviço"
          variant="outlined"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          sx={{ width: "100%", maxWidth: 400 }}
        />
      </Stack>

      <Grid container spacing={3} justifyContent="center" px={1}>
        {profissionaisFiltrados.map((item) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={item.id}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              sx={{
                width: { xs: "100%", sm: 320 },
                height: 280,
                borderRadius: 3,
                boxShadow: 3,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                backgroundColor: "#fff",
              }}
            >
              <CardHeader
                avatar={
                  <Avatar
                    alt={item.nome}
                    src={item.foto}
                    sx={{
                      width: 64,
                      height: 64,
                      border: `3px solid ${statusColors[item.status]}`,
                    }}
                  />
                }
                title={
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    color="#212121"
                    noWrap
                    sx={{ maxWidth: 180 }}
                  >
                    {item.nome}
                  </Typography>
                }
                subheader={
                  <Typography
                    variant="body2"
                    fontWeight="bold"
                    color="#757575"
                    sx={{ mt: 0.5 }}
                  >
                    {item.servico}
                  </Typography>
                }
                sx={{ pb: 0 }}
              />

              <CardContent
                sx={{
                  pt: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                }}
              >
                <Stack direction="row" alignItems="center" spacing={1}>
                  <PhoneIcon sx={{ color: "#555" }} />
                  <Typography
                    variant="body2"
                    sx={{
                      cursor: "default",
                      userSelect: "text",
                      color: "#555",
                      fontWeight: "bold",
                    }}
                  >
                {item.telefone.replace(
                  /^(\d{2})(\d{5})(\d{4})$/,
                  "($1) $2-$3"
                )}
              </Typography>
            </Stack>

            <Stack direction="row" alignItems="center" spacing={1}>
              <LocationOnIcon sx={{ color: "#555" }} />
              <Button
                variant="text"
                href={item.localizacao}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: "#1976d2", padding: 0, textTransform: "none" }}
              >
                Ver localização
              </Button>
            </Stack>

            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              mt={1}
              justifyContent="space-between"
            >
              <Stack direction="row" alignItems="center" spacing={0.5}>
                <CircleIcon
                  sx={{
                    fontSize: 14,
                    color: statusColors[item.status] || "gray",
                  }}
                />
                <Typography
                  variant="caption"
                  sx={{ textTransform: "capitalize", color: "#555" }}
                >
                  {item.status}
                </Typography>
              </Stack>

              <Button
                variant="contained"
                startIcon={<WhatsAppIcon />}
                onClick={() => openWhatsApp(item.telefone, item.nome)}
                size="small"
                sx={{ fontWeight: "bold" }}
              >
                WhatsApp
              </Button>
            </Stack>
          </CardContent>

          <Button
            variant="text"
            onClick={() => abrirModalImagem(item.foto)}
            sx={{
              fontSize: 12,
              color: "#1976d2",
              textTransform: "none",
              mb: 1,
              mx: 2,
            }}
          >
            Visualizar foto
          </Button>
        </Card>
      </Grid>
    ))}

    {profissionaisFiltrados.length === 0 && (
      <Typography
        variant="body1"
        align="center"
        sx={{ mt: 5, width: "100%", color: "#777" }}
      >
        Nenhum profissional encontrado para a busca "{busca}".
      </Typography>
    )}
  </Grid>

  {/* Modal da imagem */}
  <Dialog
    open={modalAberto}
    onClose={fecharModalImagem}
    fullScreen={fullScreen}
    maxWidth="sm"
    fullWidth
    aria-labelledby="modal-foto-profissional"
  >
    <DialogContent
      sx={{
        p: 1,
        position: "relative",
        backgroundColor: "#000",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <IconButton
        onClick={fecharModalImagem}
        sx={{
          position: "absolute",
          top: 8,
          right: 8,
          color: "white",
          backgroundColor: "rgba(0,0,0,0.5)",
          "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
          zIndex: 10,
        }}
        aria-label="fechar modal"
      >
        <CloseIcon />
      </IconButton>

      {imagemSelecionada && (
        <img
          src={imagemSelecionada}
          alt="Foto do profissional"
          style={{
            maxWidth: "100%",
            maxHeight: "80vh",
            borderRadius: 8,
            objectFit: "contain",
          }}
        />
      )}
    </DialogContent>
  </Dialog>

  {/* Snackbar para mensagens */}
  <Snackbar
    open={snackbarOpen}
    autoHideDuration={4000}
    onClose={handleSnackbarClose}
    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
  >
    <Alert
      onClose={handleSnackbarClose}
      severity={snackbarSeverity}
      sx={{ width: "100%" }}
      variant="filled"
    >
      {snackbarMessage}
    </Alert>
  </Snackbar>
</div>
);
}

export default PaginaProfissionais;