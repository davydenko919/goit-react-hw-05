import { Routes, Route, NavLink  } from "react-router-dom";
import HomePage from "path/to/pages/HomePage";
import MoviesPage from "path/to/pages/MoviesPage";
import MovieDetailsPage from "path/to/pages/MovieDetailsPage";
import NotFoundPage from "path/to/pages/NotFoundPage";
import clsx from 'clsx';
import css from './App.module.css';

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
          <NavLink to="/about" className={buildLinkClass}>
            About
          </NavLink>
          <NavLink to="/products" className={buildLinkClass}>
            Products
          </NavLink>
        </nav>

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
