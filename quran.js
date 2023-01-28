const fs = require('fs')


const loadSurah = () => {
    const fileBuffer = fs.readFileSync('quran/ayat.json')
    const contacts = JSON.parse(fileBuffer)
    return contacts.surah
};

const findSurah = (namaSurah) => {
    const surah = loadSurah()
    const ayat = surah.find((ayat) => ayat.name_latin === namaSurah)
    return ayat
}

const cariSurah = (nama) => {
    const surah = loadSurah()
    return surah.find((ayat) => ayat.name_latin.toLowerCase().toUpperCase() === nama.toLowerCase().toUpperCase())
}

const noSurah = (nomor) => {
    const surah = loadSurah()
    return surah.find((ayat) => ayat.number === nomor)
}


module.exports = {loadSurah, findSurah, cariSurah, noSurah}