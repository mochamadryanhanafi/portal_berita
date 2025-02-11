const axios = require('axios');
const cheerio = require('cheerio');

const getDetikNews = async (req, res, next) => {
    try {
        const url = 'https://www.detik.com/terpopuler';
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);
        let articles = [];

        // Menyeleksi elemen berita populer di Detik
        $('.list-content article').each((index, element) => {
            if (index < 6) { // Ambil hanya 6 berita terbaru
                const title = $(element).find('h3').text().trim();
                const link = $(element).find('a').attr('href');
                const image = $(element).find('img').attr('src') || 'https://via.placeholder.com/800x400';
                const source = "Detik.com";

                articles.push({ title, url: link, image, source });
            }
        });

        // Jika tidak ada berita ditemukan
        if (articles.length === 0) {
            return res.status(404).json({ message: "Tidak ada berita tersedia dari Detik." });
        }

        res.json(articles);
    } catch (error) {
        console.error("Error saat scraping berita Detik:", error);
        next(error);
    }
};

module.exports = { getDetikNews };
