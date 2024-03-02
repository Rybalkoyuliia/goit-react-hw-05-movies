import React from 'react';
import { Link } from 'react-router-dom';
import s from './TrendMoveisItem.module.css';
import anonym from './anonymous.webp';

const TrendMoviesItem = ({ id, title, poster_path }) => {
  return (
    <>
      <li key={id} className={s.item}>
        <Link className={s.link} to={`movies/${id}`}>
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
