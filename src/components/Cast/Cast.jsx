import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MovieCast } from "../movie-api";

export default function Cast() {
  const [isLoading, setIsLoading] = useState(false);
  const [info, setInfo] = useState([]);
  const [error, setError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    async function getMovie() {
      try {
        setIsLoading(true);
        const data = await MovieCast(movieId);
        setInfo(data.cast || []);
        console.log(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getMovie();
  }, [movieId]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading casts.</p>;
  }

  return (
    <div>
      <ul>
        {info.length > 0 ? (
          info.map((cast) => (
            <li key={cast.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
                alt={info.original_name}
              />

              <h3>{cast.original_name}</h3>
              <h3>Character: {cast.character}</h3>

              <p>{cast.content}</p>
            </li>
          ))
        ) : (
          <p>No casts available</p>
        )}
      </ul>
    </div>
  );
}
