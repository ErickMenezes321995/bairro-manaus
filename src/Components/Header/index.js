import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: theme.palette.info.main }}>
      <Container maxWidth="lg">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Logo */}
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
            <Link to="/" style={{ color: theme.palette.common.white, textDecoration: 'none' }}>
              Jose Bonifacio
            </Link>
          </Typography>

          {/* Menu for desktop */}
          <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/contato">Contatos do Bairro</Button>
            <Button color="inherit" component={Link} to="/noticias">Notícias</Button>
            <Button color="inherit" component={Link} to="/comercios">Comercios Locais</Button>
            <Button color="inherit" component={Link} to="/sobre">Sobre</Button>
            <Button color="inherit" component={Link} to="/associe-se">Associe-se</Button>
            <Button color="inherit" component={Link} to="/reunioes">Reuniões</Button>
          </Box>

          {/* Hamburger Menu for mobile */}
          <IconButton
            size="large"
            color="inherit"
            onClick={handleMenuClick}
            sx={{ display: { xs: 'block', sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Menu for mobile */}
          <Menu
            anchorEl={anchorEl}
            open={openMenu}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <MenuItem onClick={handleMenuClose} component={Link} to="/">Home</MenuItem>
            <MenuItem onClick={handleMenuClose} component={Link} to="/contato">Contatos do Bairro</MenuItem>
            <MenuItem onClick={handleMenuClose} component={Link} to="/noticias">Notícias</MenuItem>
            <MenuItem onClick={handleMenuClose} component={Link} to="/comercios">Comercios Locais</MenuItem>
            <MenuItem onClick={handleMenuClose} component={Link} to="/sobre">Sobre</MenuItem>
            <MenuItem onClick={handleMenuClose} component={Link} to="/associe-se">Associe-se</MenuItem>
            <MenuItem onClick={handleMenuClose} component={Link} to="/reunioes">Reuniões</MenuItem>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
