import { Link, useParams, Outlet } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import { useState, useEffect } from "react";
import { MovieDetails } from "../../movie-api";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";

export default function MovieDetailsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [info, setInfo] = useState(null);
  const [error, setError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    async function getMovie() {
      try {
        setIsLoading(true);
        const data = await MovieDetails(movieId);
        setInfo(data);
        console.log(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getMovie();
  }, [movieId]);

  return (
    <>
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
      {info && (
        <>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500/${info.poster_path}`}
              alt={info.original_title}
            />
            <div>
              <h1>
                {info.title}({info.release_date.slice(0, 4)})
              </h1>
              <p>User Score: {(info.vote_average*10).toFixed(2)}%</p>
              <h2>Overview</h2>
              <p>{info.overview}</p>
              <h3>Geners</h3>
              <div>
                {info.genres.map((genre) => (
                  <span key={genre.id}>{genre.name} </span>
                ))}
              </div>
            </div>
          </div>
          <div>
            <ul>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
          </div>
          <Outlet />
        </>
      )}
    </>
  );
}
