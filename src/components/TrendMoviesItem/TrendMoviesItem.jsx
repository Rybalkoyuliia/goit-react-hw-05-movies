import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import s from './TrendMoveisItem.module.css';
import anonym from './anonymous.webp';

const TrendMoviesItem = ({ id, title, poster_path, state }) => {
  const location = useLocation();
  return (
    <>
      <li key={id} className={s.item}>
        <Link
          className={s.link}
          to={location.pathname.includes('movies') ? `${id}` : `movies/${id}`}
          state={state}
        >
          {poster_path !== null ? (
            <img
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={title}
              width={`220px`}
            />
          ) : (
            <img src={anonym} alt={title} width={`220px`} height={'350px'} />
          )}

          <p className={s.movie_title}>{title}</p>
        </Link>
      </li>
    </>
  );
};

export default TrendMoviesItem;
