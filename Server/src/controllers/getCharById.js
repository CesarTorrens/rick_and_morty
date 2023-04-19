const axios = require('axios')

const getCharById = (res, id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => response.data)
        .then(data => res.writeHead(200, {'Content-type': 'application/json'}).end(JSON.stringify(data)))
        .catch(err => res.writeHead(500, {'Content-type': 'text/plain'}).end(err.message))
}

module.exports = getCharById