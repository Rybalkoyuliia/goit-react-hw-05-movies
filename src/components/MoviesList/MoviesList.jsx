import React from 'react';
import { useLocation } from 'react-router-dom';

import TrendMoviesItem from 'components/TrendMoviesItem/TrendMoviesItem';
import Loader from 'components/Loader/Loader';

import s from './MoviesList.module.css';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return movies !== null ? (
    <ul className={s.list}>
      {movies.results.map(({ id, title, poster_path }) => (
        <TrendMoviesItem
          key={id}
          id={id}
          title={title}
          poster_path={poster_path}
          to={id}
          state={{ from: location }}
        />
      ))}
    </ul>
  ) : (
    <Loader />
  );
};

export default MoviesList;
