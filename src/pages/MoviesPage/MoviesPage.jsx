import { Field, Form, Formik } from "formik";
import { useState, useEffect } from "react";
import { SearchMovies } from "../../components/movie-api";
import toast, { Toaster } from "react-hot-toast";
import MovieList from "../../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";

export default function MoviesPage() {
  const [params, setParam] = useSearchParams();
  const queryParam = params.get("query") || "";
  const [query, setQuery] = useState(queryParam);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMovies() {
      if (query) {
        try {
          const results = await SearchMovies(query);
          setMovies(results);
        } catch (error) {
          setError('Failed to fetch movies.');
        }
      }
    }
    fetchMovies();
  }, [query]);

  const changeQueryParams = (newFilter) => {
    params.set("query", newFilter);
    setParam(params);
  };

  const handleSearch = (newQuery) => {
    if (newQuery === "") {
      toast.error("Enter text for search!", { icon: "🥸" });
    } else {
      setQuery(newQuery);
      changeQueryParams(newQuery);
    }
  };

  return (
    <>
      <Formik
        initialValues={{ query: "" }}
        onSubmit={(values, actions) => {
          handleSearch(values.query);
          actions.resetForm();
        }}
      >
        <Form>
          <Field
            type="text"
            name="query"
            placeholder="Search for a movie..."
            autoFocus
            autoComplete="off"
          />
          <button type="submit">Search</button>
        </Form>
      </Formik>
      <Toaster />
      {error ? <p>{error}</p> : <MovieList movies={movies} />}
    </>
  );
}








// import { Field, Form, Formik } from "formik";
// import { useState, useEffect } from "react";
// import { SearchMovies } from "../../components/movie-api";
// import toast, { Toaster } from "react-hot-toast";
// import MovieList from "../../components/MovieList/MovieList";
// import { useSearchParams } from "react-router-dom";

// export default function MoviesPage() {
//   const [params, setParam] = useSearchParams();
//   const queryParam = params.get("query") || "";
//   console.log(params);

//   useEffect(() => {
//     if (queryParam) {
//       setQuery(queryParam);
//     }
//   }, [queryParam]);

//   const changeQueryParams = (newFilter) => {
//     params.set("query", newFilter);
//     setParam(params);
//   };

//   const [query, setQuery] = useState(queryParam);

//   const handleSearch = (newQuery) => {
//     const notify = () =>
//       toast.error("Enter text for search!", {
//         icon: "🥸",
//       });

//     if (newQuery === "") {
//       notify();
//     } else {
//       setQuery(newQuery);
//     }
//   };

//   return (
//     <>
//       <Formik
//         initialValues={{ query: "" }}
//         onSubmit={(values, actions) => {
//           handleSearch(values.query);
//           changeQueryParams(values.query);
//           actions.resetForm();
//         }}
//       >
//         <Form>
//           <Field
//             type="text"
//             name="query"
//             placeholder={query}
//             autoFocus
//             autoComplete="off"
//           />
//           <button type="submit">Search</button>
//         </Form>
//       </Formik>
//       <Toaster />
//       <div>
//         {query && <MovieList fetchMovies={() => SearchMovies(query)} />}
//       </div>
//     </>
//   );
// }
