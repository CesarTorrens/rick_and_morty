const http = require('http')
const characters = require('./utils/data')

const PORT = 3001

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (req.url.includes('/rickandmorty/character')) {
        const id = req.url.split('/')[req.url.split('/').length - 1]
        const character = characters.filter(character => character.id === parseInt(id))
        res.end(JSON.stringify(character[0]))
        // res.writeHead(200, {'Content-type': 'application/json'}).end(character[0])
    }
    return
}).listen(PORT, 'localhost')


module.exports = server