import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';
import Movies from './components/MovieList';
import MovieListHeader from './components/MovieListHeader';

const URL = 'http://www.omdbapi.com/';
const API_KEY = '81981094';

function App() {
 // const [error, setError] = useState(null);
  //const [isLoaded, setIsLoaded] = useState(false);
  //const [items, setItems] = useState([]);
 // const [selectedItem, setSelectedItem] = useState(null);
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getMovieRequest = async () => {
    const kutsu = URL + '?s=avengers' + '&apikey=' + API_KEY;

    const response = await fetch(kutsu);
    const responseJson = await response.json();

    console.log(responseJson);
    setMovies(responseJson.Search);
  };

  useEffect(()=>{
    getMovieRequest();
  }, []);
  
  return (
    <div className='container-fluid movie-app'>
      <div className='row'>
        <MovieListHeader header='Search movies' />
      </div>
      <div className='row'>
      <Movies movies={movies} />
      </div>
    </div>
  );
}
 

 /// if (error) {
  ///  return <p>{error.message}</p>;
  //}
 /// else if (!isLoaded) {
    ///return <p>Loading...</p>;
 // }
 /// else {
   /// return (
   /// <div>
      ///  <h3>Random movies</h3>
         /// {items?.map(item =>(
            ///<div key={item.title} onClick={e => setSelectedItem(item)}> 
             /// <h3>{items.plot}</h3>
             /// <p>{items.year}</p>
             /// <p>items</p>
           /// </div>
          ///))}
     /// </div>
    //  );
  //  } 
  

export default App;
