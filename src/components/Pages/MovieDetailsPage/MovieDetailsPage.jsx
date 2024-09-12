import { Link, useParams } from "react-router-dom";
import { RotatingLines } from 'react-loader-spinner'
import { useState, useEffect } from "react";
import { MovieDetails } from "../../movie-api";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

export default function MovieDetailsPage() {

  const [isloading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const {movieId} = useParams();

  useEffect(() => {
    async function getMovies() {
      try {
        setIsLoading(true);
        const data = await MovieDetails(movieId);
        setMovies(data);
        console.log(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getMovies();
}, []);

  return (
    <>
    <div>
      <p>MovieDetailsPage!</p>
      <p>
        Please visit out <Link to="/">home page</Link>
      </p>
    </div>
    {isloading && <RotatingLines
      visible={true}
      height="96"
      width="96"
      color="grey"
      strokeWidth="5"
      animationDuration="0.75"
      ariaLabel="rotating-lines-loading"
      wrapperStyle={{}}
      wrapperClass=""
      />}
      {error && <ErrorMessage />}
      </>
  );
}