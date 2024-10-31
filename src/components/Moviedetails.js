import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../CssPage/MovieDetails.css';

function Moviedetails({ movies }) {
  const { id } = useParams();  // This extracts the id from the URL
  const movie = movies.find((movie) => movie.id === parseInt(id)); // Ensure to parse id as an integer

  if (!movie) {
    return <div>Movie not found</div>;
  }
  
  return (
    <div className="movie-details-container"   >
      <h1 className="movie-title">{movie.title}</h1>
      <img src={movie.posterUrl} alt={movie.title} className="movie-poster" />
      <p className="movie-description">{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailer}
        title={movie.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="trailer"
      ></iframe>
      <br />
      <Link to="/movies">
        <button className="back-button">Back to Movies</button>
      </Link>
    </div>
  );
}

export default Moviedetails;
