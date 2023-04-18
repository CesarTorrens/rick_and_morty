import axios from "axios";

const URL_BASE = "http://localhost:3001/rickandmorty/character"
const API_KEY = 'c32d2cce95b4.6893e1250f8859761df8'

export const getCharacter = (id, setCharacters) => {
    axios(`${URL_BASE}/${id}?key=${API_KEY}`)
    .then(({ data }) => {
    if (data.name) {
       setCharacters((characters) => [...characters, data]);
    } else {
       window.alert('¡No hay personajes con este ID!');
    }
 });      
} 