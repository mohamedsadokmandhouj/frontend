import React from 'react';
import { Link } from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';
import '../CssPage/Moviecard.css';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.posterUrl} alt={movie.title} className="movie-poster" />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.description}</p>

        
      </div>
      <div>
      <div className="text-center display-6">
          <StarRatingComponent
            name={"rating"}
            value={movie.rating}
          />
        </div>

      
      <div className="text-center mt-3">
        <Link to={`/moviedetails/${movie.id}`}>
          <button className="watch-trailer-btn">
            Watch Trailer
          </button>
        </Link>
      </div>
      </div>



    </div>
  );
};

export default MovieCard;
