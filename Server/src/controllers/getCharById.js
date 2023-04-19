const axios = require('axios')

const getCharById = (res, id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => response.data)
        .then(data => {
            const character = {
                id: id,
                name: data.name,
                gender: data.gender,
                origin: data.origin.name,
                species: data.species,
                status: data.status,
                image: data.image
            }
            res.writeHead(200, {'Content-type': 'application/json'}).end(JSON.stringify(character))
        })
        .catch(err => res.writeHead(500, {'Content-type': 'text/plain'}).end(err.message))

}

module.exports = getCharById