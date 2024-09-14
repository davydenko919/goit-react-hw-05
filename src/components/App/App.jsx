import { Routes, Route, NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./App.module.css";
import { lazy, Suspense } from "react";

const Cast = lazy(() => import("../MovieCast/MovieCast"));
const Reviews = lazy(() => import("../MovieReviews/MovieReviews"));
import Navigation from "../Navigation/Navigation";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("../../pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("../../pages/MovieDetailsPage/MovieDetailsPage")
);
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage/NotFoundPage"));

// const buildLinkClass = ({ isActive }) => {
//   return clsx(css.link, isActive && css.active);
// };

function App() {
  return (
    <>
      <div className={css.main}>
        {/* <nav className={css.nav}>
          <NavLink to="/" className={buildLinkClass}>
            Home
          </NavLink>
          <NavLink to="/movies" className={buildLinkClass}>
            Movies
          </NavLink>
        </nav> */}
        <Navigation />

        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
}

export default App;
