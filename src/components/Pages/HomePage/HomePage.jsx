import { Link } from "react-router-dom";
import MovieList from "../../MovieList/MovieList";

export default function HomePage() {
  return (
    <div>
      <h1>Trending todey</h1>
      <p>
        Please visit out <Link to="/">home page</Link>
      </p>
    </div>
  );
}