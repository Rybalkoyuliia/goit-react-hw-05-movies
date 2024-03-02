import TrendMoviesItem from 'components/TrendMoviesItem/TrendMoviesItem';
import React from 'react';
import s from './MoviesList.module.css';
import { ThreeDots } from 'react-loader-spinner';

const MoviesList = ({ movies }) => {
  return movies !== null ? (
    <ul className={s.list}>
      {movies.results.map(({ id, title, poster_path }) => (
        <TrendMoviesItem
          key={id}
          id={id}
          title={title}
          poster_path={poster_path}
        />
      ))}
    </ul>
  ) : (
    <div
      style={{
        margin: '20px auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default MoviesList;
