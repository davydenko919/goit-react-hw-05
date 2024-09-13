import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MovieReviews } from "../movie-api";

export default function Reviews() {
  const [isLoading, setIsLoading] = useState(false);
  const [info, setInfo] = useState([]); 
  const [error, setError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    async function getMovie() {
      try {
        setIsLoading(true);
        const data = await MovieReviews(movieId);
        setInfo(data.results || []); 
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
    return <p>Error loading reviews.</p>;
  }

  return (
    <div>
      <ul>
        {info.length > 0 ? ( 
          info.map((review) => (
            <li key={review.id}>
              <h3>Author: {review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))
        ) : (
          <p>No reviews available</p> 
        )}
      </ul>
    </div>
  );
}