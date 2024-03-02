import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import Movie from 'pages/Movie/Movie/Movie';
import Cast from 'pages/Movie/Cast/Cast';
import Reviews from 'pages/Movie/Reviews/Reviews';

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
