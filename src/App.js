import './App.css';
import { useState } from 'react';
import { getCharacter } from './services/api';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';

function App() {
   const [characters, setCharacters] = useState([])

   const onClose = (id) => {
      let charFilter = characters.filter(char => char.id !== parseInt(id))
      setCharacters(charFilter)
   }
   
   const onSearch = (id) => {
      const inCharacters = characters.some(char => char.id === parseInt(id) )
      if (!inCharacters)  getCharacter(id, setCharacters)        
      else alert(`este personaje ya se encuentra en la lista`)
   }

   const randomChar = () => {
      const randomId = Math.floor(Math.random() * 826)
      onSearch(randomId)
   }
   
   return (
      <div className='App'>
         <Nav onSearch={onSearch} randomChar={randomChar} />
         <Cards id={characters.id} onClose={onClose} characters={characters} />
      </div>
   );
}

export default App;
