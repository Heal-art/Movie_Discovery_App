import { useParams } from "react-router-dom";

function MovieDetails() {
  const Params = useParams();

  return (
  
  <div>
      <h1>Movie Details</h1>
      <p>
        <span>Welcome to Movie Number </span>
        <span>{Params.id}</span>
      </p>
    </div>
  
  );
}

export default MovieDetails;
