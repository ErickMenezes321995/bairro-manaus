import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
  Paper,
  Skeleton
} from "@mui/material";

function Noticia() {
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:5000/api/noticias")
      .then((res) => {
        setNoticias(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao carregar notícias", err);
        setLoading(false);
      });
  }, []);

  return (
    <Paper elevation={3} sx={{ p: 3, bgcolor: "#fff" }}>
      <Grid container spacing={3} justifyContent="center">
        {loading
          ? Array.from(new Array(3)).map((_, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Skeleton variant="rectangular" height={200} />
                <Skeleton />
                <Skeleton width="60%" />
              </Grid>
            ))
          : noticias.map((noticia, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ maxWidth: 345, mx: "auto", height: "100%", display: "flex", flexDirection: "column" }}>
                  <CardActionArea
                    component="a"
                    href={noticia.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {noticia.imagem && (
                      <CardMedia
                        component="img"
                        height="180"
                        image={noticia.imagem}
                        alt={noticia.titulo}
                      />
                    )}
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div">
                        {noticia.titulo}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {noticia.resumo}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
      </Grid>
    </Paper>
  );
}

export default Noticia;
