const axios = require('axios');
const cheerio = require('cheerio');

const URL = 'https://g1.globo.com/am/amazonas/';

async function getNoticias() {
  const { data } = await axios.get(URL);
  const $ = cheerio.load(data);
  const noticias = [];

  $('.feed-post-body').each((i, el) => {
    const titulo = $(el).find('.feed-post-link').text().trim();
    const link = $(el).find('.feed-post-link').attr('href');
    const resumo = $(el).find('.feed-post-body-resumo').text().trim();
   
     // Pega o src ou data-src (caso a imagem esteja lazy-loaded)
     let imagem = $(el).parent().find('img').attr('src') || $(el).parent().find('img').attr('data-src');

     // Verifica se a imagem é relativa e corrige
     if (imagem && imagem.startsWith('//')) {
       imagem = 'https:' + imagem;
     }

    noticias.push({ titulo, link, resumo, imagem });
  });

  return noticias;
}

module.exports = getNoticias;
