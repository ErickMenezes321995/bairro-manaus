import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Box, Typography, useTheme } from '@mui/material';
import img from '../../imgs/Seleção De Ofertas Supermercado Banner Amarelo Azul Verde.jpg';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Estilos do carrossel

const CarouselComponent = () => {
  const theme = useTheme();

  return (
    <Box sx={{ maxWidth: '100%', position: 'relative' }}>
      <Carousel 
        autoPlay
        infiniteLoop
        showArrows
        showThumbs={false}
        showStatus={false}
        interval={5000}
        transitionTime={600}
      >
        {/* Slide 1 */}
        <Box>
          <img src={img} alt="Slide 1" />
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              color: theme.palette.common.white,
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
              Bem-vindo ao Bairro
            </Typography>
            <Typography variant="h6">
              Notícias e eventos da comunidade
            </Typography>
          </Box>
        </Box>

        {/* Slide 2 */}
        <Box>
          <img src={img} alt="Slide 2" />
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              color: theme.palette.common.white,
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
              Eventos Locais
            </Typography>
            <Typography variant="h6">
              Fique por dentro do que está rolando
            </Typography>
          </Box>
        </Box>

        {/* Slide 3 */}
        <Box>
          <img src={img} alt="Slide 3" />
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              color: theme.palette.common.white,
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
              Participe!
            </Typography>
            <Typography variant="h6">
              Entre em contato com a associação do bairro
            </Typography>
          </Box>
        </Box>
      </Carousel>
    </Box>
  );
};

export default CarouselComponent;

