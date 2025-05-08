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
    <AppBar position="sticky" sx={{ backgroundColor: theme.palette.info.main}}>
      <Container maxWidth="lg">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between'}}>
          {/* Logo */}
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
            <Link to="/" style={{ color: theme.palette.common.white, textDecoration: 'none' }}>
              Colonia Santo Antonio
            </Link>
          </Typography>

          {/* Menu for desktop */}
          <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/Mercadao">Comercios</Button>
            <Button color="inherit" component={Link} to="/contato">Presidência & Comissão</Button>
            <Button color="inherit" component={Link} to="/serviços">Serviços Locais</Button>
            <Button color="inherit" component={Link} to="/informações">Notícias</Button>
            <Button color="inherit" component={Link} to="/sobre">Sobre</Button>
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
            <MenuItem onClick={handleMenuClose} component={Link} to="/mercadao">Comercios</MenuItem>
            <MenuItem onClick={handleMenuClose} component={Link} to="/contato">Presidência & Comissão</MenuItem>
            <MenuItem onClick={handleMenuClose} component={Link} to="/serviços">Serviços Locais</MenuItem>
            <MenuItem onClick={handleMenuClose} component={Link} to="/informações">Notícias</MenuItem>
            <MenuItem onClick={handleMenuClose} component={Link} to="/sobre">Sobre</MenuItem>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
