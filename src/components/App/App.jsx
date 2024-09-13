import { Routes, Route, NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./App.module.css";
import { lazy, Suspense } from "react";
import Cast from "../Cast/Cast";
import Reviews from "../Reviews/Reviews";

import HomePage from "../Pages/HomePage/HomePage";
import MoviesPage from "../Pages/MoviesPage/MoviesPage";
import MovieDetailsPage from "../Pages/MovieDetailsPage/MovieDetailsPage";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";

// const HomePage = lazy(() => import("../Pages/HomePage/HomePage"));
// const MoviesPage = lazy(() => import("../Pages/MoviesPage/MoviesPage"));
// const MovieDetailsPage = lazy(() => import("../Pages/MovieDetailsPage/MovieDetailsPage"));
// const NotFoundPage = lazy(() => import("../Pages/NotFoundPage/NotFoundPage"));

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

function App() {
  return (
    <>
      <div className={css.main}>
        <nav className={css.nav}>
          <NavLink to="/" className={buildLinkClass}>
            Home
          </NavLink>
          <NavLink to="/movies" className={buildLinkClass}>
            Movies
          </NavLink>
          {/* <NavLink to="/movies/:movieId" className={buildLinkClass}>
            Products
          </NavLink> */}
        </nav>

        {/* <Suspense fallback={<div>Loading...</div>}></Suspense> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
