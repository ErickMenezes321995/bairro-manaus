import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
  useTheme,
  Paper,
  BottomNavigation,
  BottomNavigationAction,
} from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';
import StoreIcon from '@mui/icons-material/Store';
import GroupIcon from '@mui/icons-material/Group';
import BuildIcon from '@mui/icons-material/Build';
import ArticleIcon from '@mui/icons-material/Article';
import InfoIcon from '@mui/icons-material/Info';
import Logo from "../../imgs/1projeto.png";

const Navigation = () => {
  const theme = useTheme();
  const location = useLocation();
  const currentPath = location.pathname;

  const menuItems = [
    { label: 'Home', to: '/', icon: <HomeIcon /> },
    { label: 'Comércios', to: '/mercadao', icon: <StoreIcon /> },
    { label: 'Comissão', to: '/contato', icon: <GroupIcon /> },
    { label: 'Serviços', to: '/serviços', icon: <BuildIcon /> },
    { label: 'Notícias', to: '/informações', icon: <ArticleIcon /> },
    { label: 'Sobre', to: '/sobre', icon: <InfoIcon /> },
  ];

  return (
    <>
      {/* AppBar */}
      <AppBar position="sticky" sx={{ backgroundColor: theme.palette.info.main }}>
        <Container maxWidth="lg">
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            {/* Logo no desktop */}
            <Typography
              variant="h6"
              component="div"
              sx={{ fontWeight: 'bold', display: { xs: 'none', sm: 'block' } }}
            >
              <Link to="/" style={{ color: theme.palette.common.white, textDecoration: 'none' }}>
                Colônia Santo Antônio
              </Link>
            </Typography>

            {/* Logo no mobile */}
          <Box
              sx={{
                display: { xs: 'flex', sm: 'none' },
                flexGrow: 1,
                justifyContent: 'flex-start', // alinha à esquerda
                alignItems: 'center',
                gap: 1, // espaço entre texto e imagem
                flexDirection: 'row', // texto à esquerda, imagem à direita
              }}
            >
              <img
                src={Logo} // Substitua pelo caminho real da imagem
                alt="Neighborly Logo"
                style={{ height: 50, objectFit: 'contain', borderRadius:"20px" }}
              />
              <Typography variant="h5" component="span"
              style={{fontFamily:"sans-serif", color:"black", }}
              >
              Neighborly
              </Typography>
            
            </Box>

            {/* Menu Desktop */}
            <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2 }}>
              {menuItems.map(({ label, to }) => (
                <Button
                  key={label}
                  color="inherit"
                  component={Link}
                  to={to}
                  sx={{ textTransform: 'none' }}
                >
                  {label}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Bottom Navigation só em mobile */}
      <Paper
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          display: { xs: 'flex', sm: 'none' },
          zIndex: 1300,
        }}
        elevation={3}
      >
        <BottomNavigation showLabels value={currentPath}>
          {menuItems.map(({ label, to, icon }) => (
            <BottomNavigationAction
              key={label}
              label={label}
              value={to}
              icon={icon}
              component={Link}
              to={to}
            />
          ))}
        </BottomNavigation>
      </Paper>
    </>
  );
};

export default Navigation;
