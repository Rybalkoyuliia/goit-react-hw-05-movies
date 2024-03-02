import { Route, Routes } from 'react-router-dom';
import React, { lazy } from 'react';

import Header from './Header/Header';

const Home = lazy(() => import('pages/Home/Home.jsx'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const Movie = lazy(() => import('pages/Movie/Movie/Movie'));
const Cast = lazy(() => import('pages/Movie/Cast/Cast'));
const Reviews = lazy(() => import('pages/Movie/Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />

          <Route path="movies/:id" element={<Movie />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};
