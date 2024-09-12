import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <p>HomePage!</p>
      <p>
        Please visit out <Link to="/">home page</Link>
      </p>
    </div>
  );
}