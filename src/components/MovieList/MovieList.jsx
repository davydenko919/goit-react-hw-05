import { TrendingMovies } from "../movie-api";
import { useState, useEffect } from "react";
import { RotatingLines } from 'react-loader-spinner'
import ErrorMessage from "../ErrorMessage/ErrorMessage";

import  { Link } from "react-router-dom";

export default function MovieList() {

    const [isloading, setIsLoading] = useState(false);
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
          async function getMovies() {
            try {
              setIsLoading(true);
              const data = await TrendingMovies();
              setMovies((prevMovies) => {
                return [...prevMovies, ...data];
              });
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
      <ul>
      {movies.map((movie) =>(
        <li  key={movie.id}>
         <Link to={`/movies/${movie.id}`}>
              {movie.title}
            </Link>
        </li>
      )
      )}
      </ul>
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