import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';
import Movies from './components/MovieList';
import MovieListHeader from './components/MovieListHeader';
import SearchBox from './components/SearchBox';
import AddFavourite from './components/AddFavourite';
import RemoveFavourites from './components/Remove';

const URL = 'http://www.omdbapi.com/';
const API_KEY = '';

function App() {
 
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [favourites, setFavourites] = useState([]);

  const getMovieRequest = async () => {
    const kutsu = URL + '?s=' + searchValue + '&apikey=' + API_KEY;

    const response = await fetch(kutsu);
    const responseJson = await response.json();

    if(responseJson.Search) {
      setMovies(responseJson.Search);
    }
    
  };

  useEffect(()=>{
    getMovieRequest(searchValue);
  }, [searchValue]);

  const addFavouriteMovie = (movies) => {
    const newFavouriteList = [...favourites, movies];
    setFavourites(newFavouriteList);
  };

  const Remove = (movies) => {
    const newFavouriteList = favourites.filter((favourites) => 
    favourites.imdbID !== movies.imdbID
  );
    setFavourites(newFavouriteList);

};
  
  return (
    <div className='container-fluid movie-app'>
      <div className='row d-flex align-items-center'>
        <MovieListHeader header='Search movies' />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className='row'>
      <Movies movies={movies} 
      handleFavouritesClick={addFavouriteMovie} 
      FavouriteComponent = {AddFavourite}
      />
      </div>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <MovieListHeader header='Your favourite movies' />
         </div> 
         <div className='row'>
      <Movies 
      movies={favourites} 
      handleFavouritesClick={Remove} 
      FavouriteComponent = {RemoveFavourites}
      />
      </div>
    </div>
  );
};
 

export default App;
