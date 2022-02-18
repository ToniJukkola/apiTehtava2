
import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

const URL = 'https://movies-tvshows-data-imdb.p.rapidapi.com/';
const API_KEY = '823622a3demsh181a48979d8f942p142ff5jsnf921c9c29740';

function App() {
  const [movies, setMovies] = useState([]);

  
  
  useEffect(() => {
    
  
  }, [])
    
  

  return (
 <div>
   <h3>Random movies</h3>
 </div>
  );
}

export default App;
