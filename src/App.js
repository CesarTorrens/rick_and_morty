import { useState, useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { getCharacter } from './services/api';
import Cards from './components/Cards';
import Nav from './components/Nav';
import About from './components/About'
import Detail from './components/Detail';
import Error from './components/Error';
import Form from './components/Form';
import Favorites from './components/Favorites'

function App() {
   const { pathname } = useLocation()
   const [characters, setCharacters] = useState([])
   const [access, setAccess] = useState(false)
   const EMAIL = 'cesar@gmail.com'
   const PASSWORD = 'cesar1'
   const navigate = useNavigate()

   const login = (userData) => {
      if (userData.email === EMAIL && userData.password === PASSWORD) {
         setAccess(true)
         navigate('/home')
      } else alert('Datos incorrectos')
   }
   const logOut = () => setAccess(false)
   
   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   const onClose = (id) => {
      let charFilter = characters.filter(char => char.id !== id)
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
         { pathname !== '/' &&  <Nav onSearch={onSearch} randomChar={randomChar} logOut={logOut}/>  }
         <Routes>
            <Route path='/' element={<Form login={login} />} />
            <Route path='/home' element={<Cards onClose={onClose} characters={characters} />} />
            <Route path='/about' element={<About />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='/favorites' element={<Favorites onClose={onClose} />} />
            <Route path='/*' element={<Error />} />
         </Routes>
      </div>
   );
}

export default App;
