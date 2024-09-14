import MovieList from "../../components/MovieList/MovieList";
import { TrendingMovies } from "../../components/movie-api";

export default function HomePage() {
  return (
    <div>
      <h1>Trending todey</h1>
      <MovieList fetchMovies={TrendingMovies} />
    </div>
  );
}
