import { Link } from "react-router-dom";
// import css from "./MoviesPage.module.css";
import { Field, Form, Formik } from "formik";
import { useState, useEffect } from "react";
import { SearchMovies } from "../../movie-api";
import toast, { Toaster } from "react-hot-toast";
import MovieList from "../../MovieList/MovieList";
import { RotatingLines } from 'react-loader-spinner';
import ErrorMessage from "../../ErrorMessage/ErrorMessage";


export default function MoviesPage() {

  const [movies, setMovies] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const [query, setQuery] = useState("");

  const handleSearch = (newQuery) => {

    const notify = () => toast.error('Enter text for search!', {
      icon: '🥸',
    });

    if(newQuery === ""){
      notify();
    }
    else{
    setQuery(newQuery);
    setMovies([]);
  }
  };

  useEffect(() => {
    if (query === "") {
      return;
    }

      async function getMovies() {
        try {
          setIsLoading(true);
          const data = await SearchMovies(query);
          setMovies((prevMovies) => {
            return [...prevMovies, ...data];
          });
          console.log(data);
        } catch (error) {
          setError(true);
        } finally {
          setIsLoading(false);
        }
      }

      getMovies();
  }, [query]);

  return (
    <>
      <Formik
        initialValues={{ query: "" }}
        onSubmit={(values, actions) => {
          handleSearch(values.query);
          actions.resetForm();
        }}
      >
        <Form >
          <Field
            type="text"
            name="query"
            placeholder= {query}
            autoFocus
            autoComplete="off"
          />
          <button type="submit">Search</button>
        </Form>
      </Formik>
      <Toaster />
      <div>
      <p>MoviesPage!</p>
      {error && <ErrorMessage />}
      {isloading && <RotatingLines
          visible={true}
          height="96"
          width="96"
          color="grey"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
          wrapperStyle={{}}
          wrapperClass=""
          />}
      <MovieList />
      <p>
        Please visit out <Link to="/">home page</Link>
      </p>
    </div>
    </>
  );
}