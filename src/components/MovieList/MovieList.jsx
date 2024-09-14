import { useState, useEffect } from "react";
import { RotatingLines } from 'react-loader-spinner';
import ErrorMessage from "../ErrorMessage/ErrorMessage";

import  { Link } from "react-router-dom";

export default function MovieList({ fetchMovies }) {
    const [isLoading, setIsLoading] = useState(false);
    const [movies, setMovies] = useState([]); 
    const [error, setError] = useState(false);
  
    useEffect(() => {
      async function getMovies() {
        try {
          setIsLoading(true);
          const data = await fetchMovies();
          setMovies(data); 
          console.log(data);
        } catch (error) {
          setError(true);
        } finally {
          setIsLoading(false);
        }
      }
  
      getMovies();
    }, [fetchMovies]);
  
    return (
      <>
        <ul>
          {movies.length > 0 && ( 
            movies.map((movie) => (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`}>
                  {movie.title}
                </Link>
              </li>
            ))
          )}
        </ul>
        {isLoading && (
          <RotatingLines
            visible={true}
            height="96"
            width="96"
            color="grey"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
          />
        )}
        {error && <ErrorMessage />}
      </>
    );
  }