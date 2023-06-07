import { lazy, Suspense } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import { NavLinkItem, NavList } from './App.styled';
import Home from 'pages/home';
import Movies from 'pages/movies';
import MovieDetails from 'pages/MovieDetails';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import NotFound from 'pages/NotFound';

// const Cast = lazy(() => import('components/Cast/Cast'));
// const Reviews = lazy(() => import('components/Reviews/Reviews'));
// const Home = lazy(() => import('pages/home'));
// const Movies = lazy(() => import('pages/movies'));
// const MovieDetails = lazy(() => import('pages/MovieDetails'));
// const NotFound = lazy(() => import('pages/NotFound'));

export const App = () => {
  return (
    <>
      <NavList>
        <NavLinkItem>
          <NavLink to="/">Home</NavLink>
        </NavLinkItem>
        <NavLinkItem>
          <NavLink to="/movies">Movies</NavLink>
        </NavLinkItem>
      </NavList>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};
//
