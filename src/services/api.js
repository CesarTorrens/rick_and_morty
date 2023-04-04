import axios from "axios";

export const getCharacter = (id, setCharacters) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({ data }) => {
    if (data.name) {
       setCharacters((characters) => [...characters, data]);
    } else {
       window.alert('¡No hay personajes con este ID!');
    }
 });      
} 