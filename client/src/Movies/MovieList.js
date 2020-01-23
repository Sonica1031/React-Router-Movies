import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard'

const MovieList = props => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          console.log(response.data);
          setMovies(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
  }, []);
  
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieCard key={movies.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
