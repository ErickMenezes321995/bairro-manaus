import React from 'react';
import { Box, Typography, Link, Divider, useTheme } from '@mui/material';
import '../../Components/Footer/Footer.css'

const Footer = () => {
  const theme = useTheme();
  
  return (
    <Box 
      sx={{
        backgroundColor: theme.palette.info.main,
        color: theme.palette.common.black,
        py: 4,
        mt: 'auto',
        textAlign: 'center',
      }}
    >
      <Divider sx={{ mb: 2 }} />
      <Typography variant="body2" sx={{ mb: 1 }}>
        &copy; {new Date().getFullYear()} MeuBairro Manaus. Todos os direitos reservados.
      </Typography>
      <Box>
        <Link 
          href="https://www.instagram.com/seubairro" 
          color="inherit" 
          sx={{ mr: 2, textDecoration: 'none' }}
        >
          Instagram
        </Link>
        <Link 
          href="mailto:contato@meubairro.com" 
          color="inherit" 
          sx={{ textDecoration: 'none' }}
        >
          Contato
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;

