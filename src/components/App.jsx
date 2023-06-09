import { lazy, Suspense } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import { NavLinkItem, NavList } from './App.styled';

const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));

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
