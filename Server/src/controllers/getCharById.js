const axios = require('axios')

const URL = 'https://rickandmortyapi.com/api/character/'

const getCharById = async (req, res) => {
    const { id } = req.params
    try {
        const { data } = await axios(`${URL}/${id}`)
        if (data.name) return res.status(200).json(data)
        else return res.status(400).send('Not Found')
    } catch (err) {
        return res.status(500).send(err.message)
    }
}

module.exports = getCharById