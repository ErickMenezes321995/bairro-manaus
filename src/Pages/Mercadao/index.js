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
import { Carousel } from 'react-responsive-carousel';
import { Box, useTheme } from '@mui/material';
import img from '../../imgs/Seleção De Ofertas Supermercado Banner Amarelo Azul Verde.jpg';
import Comercio from "../../Components/Comercios";
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Estilos do carrossel

function Mercadao(){

    const [Ceara, SetCeara] = useState([
        {
            nome: "Mercadinho Ceará",
            numero: "+5592993847070",
            horario: "5h30 às 9h00",
            entrega: "Entregamos a domicílio",
        }
    ])

    const openWhatsApp = (numero, nome) => {
        const mensagem = `Olá! Gostaria de saber mais sobre os produtos do ${nome}.`;
        const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
        window.open(url, "_blank");
      };

      const theme = useTheme();

    return(

                <div className="body">
                    <div className="texto">
                    <Typography variant="h4" component='h6' gutterBottom sx={{
                        mb: 4, 
                        padding:'20px',
                        width:'100%',
                    textAlign:'center'
                        }}>
                    Todos os nossos mercados, lanchonetes é distribuidora na palma de sua mão!!
                    </Typography>

                    <Comercio/>
                    </div>

                
                    <div style={{background:'red', 
                                padding:'20px',
                                display:'flex',
                                alignItems:'center',
                                justifyContent:'center',
                                flexDirection:'column',
                                gap:'15px'
                                }}>

                <Box sx={{ maxWidth: '100%', position: 'relative' }}>
                    <Carousel 
                    autoPlay
                    infiniteLoop
                    showArrows
                    showThumbs={false}
                    showStatus={false}
                    interval={5000}
                    transitionTime={600}>


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
                    </Box>
                    </Box>

                    </Carousel>

                </Box>
                
                            <Grid container spacing={3}>
                    {Ceara.map((Ceara, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card
                        sx={{
                            borderRadius: 4,
                            boxShadow: 6,
                            transition: "transform 0.3s ease, box-shadow 0.3s ease",
                            "&:hover": {
                            transform: "translateY(-5px)",
                            boxShadow: 10,
                            },
                            backgroundColor: "#ffffff",
                        }}
                        >
                        <CardHeader
                            avatar={
                            <Avatar sx={{ bgcolor: "#25D366" }}>
                                <StoreIcon />
                            </Avatar>
                            }
                            title={Ceara.nome}
                            subheader="Comércio local"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary" gutterBottom>
                            <PhoneIcon fontSize="small" /> {Ceara.numero}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" gutterBottom>
                            <AccessTimeIcon fontSize="small" /> {Ceara.horario}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            <LocalShippingIcon fontSize="small" /> {Ceara.entrega}
                            </Typography>
                            <Stack mt={2} direction="row" justifyContent="flex-end">
                            <Button
                                variant="contained"
                                size="small"
                                sx={{
                                bgcolor: "#25D366",
                                "&:hover": { bgcolor: "#1ebe5d" },
                                borderRadius: 2,
                                textTransform: "none",
                                fontWeight: 500,
                                }}
                                startIcon={<WhatsAppIcon />}
                                onClick={() => openWhatsApp(Ceara.numero, Ceara.nome)}
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
        </div>
    )
}
export default Mercadao;