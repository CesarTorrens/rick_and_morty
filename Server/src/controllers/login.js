const users = require('../utils/users')

const login = (req, res) => {
    const { email, password } = req.query
    if (typeof email === 'string' && typeof password === 'string') {
        const findUser = users.find(user => user.email === email && user.password === password)
        if (findUser.email) return res.status(200).json({ access: true })
        else return res.status(200).json({ access: false })
    } else return res.status(404).send('datos invalidos')
}

module.exports = login