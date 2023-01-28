
// + express
const express = require('express')
const app = express()
const port = 3000

// + EJS
const expressLayouts = require('express-ejs-layouts');
app.set('view engine', 'ejs');
app.use(expressLayouts);

app.use(express.static('public'));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
const { loadSurah, findSurah, cariSurah, noSurah } = require('./quran')

// + Home
app.get('/', (req, res) => {
    const surah = loadSurah()
    res.render('index', {
        layout: 'layouts/main-layout',
        title: 'Halaman Home',
        surah,
    })
})


// + Show
app.get('/:nama', (req, res) => {
    const surah = findSurah(req.params.nama);
    res.render('show', {
        layout: 'layouts/main-layout',
        title: 'Halaman Detail Surah',
        surah,
    })
    
})

// + cari surah
app.post('/', (req, res) => {
    const inputValue = req.body['input-surah'];
    const surah = cariSurah(inputValue) || noSurah(inputValue);
    res.render('cari-surah', {
        layout: 'layouts/main-layout',
        title: 'Halaman Cari Surah',
        surah,
    })
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
