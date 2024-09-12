import { TrendingMovies } from "../movie-api";
import { useState, useEffect } from "react";
import { RotatingLines } from 'react-loader-spinner'
import ErrorMessage from "../ErrorMessage/ErrorMessage";

export default function MovieList() {

    const [isloading, setIsLoading] = useState(false);
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
          async function getPhotos() {
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
    
          getPhotos();
      }, []);

    return (
        <>
      <ul>
        
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