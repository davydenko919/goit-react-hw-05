import { useState, useEffect } from 'react';
import MovieList from "../../components/MovieList/MovieList";
import { TrendingMovies } from "../../components/movie-api";

export default function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const movies = await TrendingMovies();
        setTrendingMovies(movies);
      } catch (error) {
        setError('Failed to load trending movies.');
      }
    }
    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Trending Today</h1>
      {error ? <p>{error}</p> : <MovieList movies={trendingMovies} />}
    </div>
  );
}



// import MovieList from "../../components/MovieList/MovieList";
// import { TrendingMovies } from "../../components/movie-api";

// export default function HomePage() {
//   return (
//     <div>
//       <h1>Trending todey</h1>
//       <MovieList fetchMovies={TrendingMovies} />
//     </div>
//   );
// }
