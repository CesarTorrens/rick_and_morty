const http = require('http')
const getCharById = require('./controllers/getCharById')

const PORT = 3001

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    if (req.url.includes('/rickandmorty/character')) {
        const id = req.url.split('/')[req.url.split('/').length - 1]
        getCharById(res, id)
    }
    return
}).listen(PORT, 'localhost')


module.exports = server