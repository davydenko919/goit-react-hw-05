import { Field, Form, Formik } from "formik";
import { useState, useEffect } from "react";
import { SearchMovies } from "../../movie-api";
import toast, { Toaster } from "react-hot-toast";
import MovieList from "../../MovieList/MovieList";
import { useSearchParams } from "react-router-dom";

export default function MoviesPage() {
  const [params, setParam] = useSearchParams();
  const queryParam = params.get("query") || "";
  console.log(params);

  useEffect(() => {
    if (queryParam) {
      setQuery(queryParam);
    }
  }, [queryParam]);

  const changeQueryParams = (newFilter) => {
    params.set("query", newFilter);
    setParam(params);
  };

  const [query, setQuery] = useState(queryParam);

  const handleSearch = (newQuery) => {
    const notify = () =>
      toast.error("Enter text for search!", {
        icon: "🥸",
      });

    if (newQuery === "") {
      notify();
    } else {
      setQuery(newQuery);
    }
  };

  return (
    <>
      <Formik
        initialValues={{ query: "" }}
        onSubmit={(values, actions) => {
          handleSearch(values.query);
          changeQueryParams(values.query);
          actions.resetForm();
        }}
      >
        <Form>
          <Field
            type="text"
            name="query"
            placeholder={query}
            autoFocus
            autoComplete="off"
          />
          <button type="submit">Search</button>
        </Form>
      </Formik>
      <Toaster />
      <div>
        {query && <MovieList fetchMovies={() => SearchMovies(query)} />}
      </div>
    </>
  );
}
