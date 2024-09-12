import { Link } from "react-router-dom";

export default function MoviesPage() {
  return (
    <div>
      <p>MoviesPage!</p>
      <p>
        Please visit out <Link to="/">home page</Link>
      </p>
    </div>
  );
}