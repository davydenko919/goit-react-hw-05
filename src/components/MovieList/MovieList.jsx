import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

export default function MovieList({ movies }) {
  const location = useLocation();

  if (!movies.length) {
    return <p>No movies found.</p>;
  }

  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={location}>
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}





// import { useState, useEffect } from "react";
// import { RotatingLines } from "react-loader-spinner";
// import ErrorMessage from "../ErrorMessage/ErrorMessage";
// import { useLocation } from "react-router-dom";

// import { Link } from "react-router-dom";

// export default function MovieList({ fetchMovies }) {
//   const [isLoading, setIsLoading] = useState(false);
//   const [movies, setMovies] = useState([]);
//   const [error, setError] = useState(false);

//   const location = useLocation();
//   console.log(location);

//   useEffect(() => {
//     async function getMovies() {
//       try {
//         setIsLoading(true);
//         const data = await fetchMovies();
//         setMovies(data);
//         console.log(data);
//       } catch (error) {
//         setError(true);
//       } finally {
//         setIsLoading(false);
//       }
//     }

//     getMovies();
//   }, [fetchMovies]);

//   return (
//     <>
//       <ul>
//         {movies.length > 0 &&
//           movies.map((movie) => (
//             <li key={movie.id}>
//               <Link to={`/movies/${movie.id}`} state={location}>
//                 {movie.title}
//               </Link>
//             </li>
//           ))}
//       </ul>
//       {isLoading && (
//         <RotatingLines
//           visible={true}
//           height="96"
//           width="96"
//           color="grey"
//           strokeWidth="5"
//           animationDuration="0.75"
//           ariaLabel="rotating-lines-loading"
//         />
//       )}
//       {error && <ErrorMessage />}
//     </>
//   );
// }
