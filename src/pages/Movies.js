import React from 'react';
import MovieCard from '../components/Moviecard';
import moviesList from '../moviesData'; // Import the movie data

import '../CssPage/Movies.css';

const Movies = () => {
  return (
    <div className="movies-container">
      {moviesList.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Movies;

