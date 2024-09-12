import { Routes, Route, NavLink  } from "react-router-dom";
// import MoviesPage from "../pages/MoviesPage/MoviesPage";
// import MovieDetailsPage from "../pages/MovieDetailsPage/MovieDetailsPage";
// import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import clsx from 'clsx';
import css from './App.module.css';
// import { lazy } from "react";
// const HomePage = lazy(() => import("./pages/HomePage/HomePage"));


const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

function App() {
  
  return (
    <>
      <div>
        <nav className={css.nav}>
          {/* <NavLink to="/" className={buildLinkClass}>
            Home
          </NavLink> */}
          {/* <NavLink to="/movies" className={buildLinkClass}> */}
          <NavLink to="/" className={buildLinkClass}>
            About
          </NavLink>
          <NavLink to="/movies/:movieId" className={buildLinkClass}>
            Products
          </NavLink>
        </nav>

        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
