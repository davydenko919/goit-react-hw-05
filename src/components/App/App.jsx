import { Routes, Route, NavLink  } from "react-router-dom";

import clsx from 'clsx';
import css from './App.module.css';
import { lazy, Suspense  } from "react";



const HomePage = lazy(() => import("../Pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("../Pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() => import("../Pages/MovieDetailsPage/MovieDetailsPage"));
const NotFoundPage = lazy(() => import("../Pages/NotFoundPage/NotFoundPage"));


const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

function App() {
  
  return (
    <>
      <div>
        <nav className={css.nav}>
          <NavLink to="/" className={buildLinkClass}>
            Home
          </NavLink>
          <NavLink to="/movies" className={buildLinkClass}>
            About
          </NavLink>
          <NavLink to="/movies/:movieId" className={buildLinkClass}>
            Products
          </NavLink>
        </nav>

        <Suspense fallback={<div>Loading...</div>}></Suspense>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        
      </div>
    </>
  );
}

export default App;
