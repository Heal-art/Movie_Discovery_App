import React from "react";

function MovieCard({ movie }) {
  return (
    <div className="Movie-Card">
      <img src={movie.posterUrl} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>Release Date: {movie.releaseDate}</p>
    </div>
  );

  
}

export default MovieCard;
