import MovieList from "../../MovieList/MovieList";
import { TrendingMovies } from "../../movie-api";

export default function HomePage() {
  return (
    <div>
      <h1>Trending todey</h1>
      <MovieList fetchMovies={TrendingMovies} />
    </div>
  );
}
