const express = require('express');
const cors = require('cors');
const getNoticias = require('./scraper');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

  //app.get('https://bairro-manaus.onrender.com/api/noticias', async (req, res) => {
  app.get('/api/noticias', async (req, res) => {
  try {
    const noticias = await getNoticias();
    res.json(noticias);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar notícias' });
  }
});

app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));

