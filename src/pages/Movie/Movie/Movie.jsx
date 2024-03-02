import { Suspense, useRef } from 'react';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';

import { useHttp } from 'hooks/useHttp';
import { fetchMovieById } from 'services/api';

import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';

import s from './Movie.module.css';
import anonym from '../../../components/TrendMoviesItem/anonymous.webp';

const Movie = () => {
  const location = useLocation();
  const goBackRef = useRef(location.state?.from ?? '/');

  const fetchGenres = genres => {
    return genres.map(genre => <li key={genre.id}>{genre.name}</li>);
  };

  const { id } = useParams();

  const [movie] = useHttp(fetchMovieById, id);
  if (!movie) {
    return <Loader />;
  }
  return (
    <>
      <main>
        <Button to={goBackRef.current} />

        <h1 className={s.title}>{movie.title}</h1>
        <div className={s.common_wrapper}>
          <div className={s.left_wrapper}>
            {movie.poster_path !== null ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                width={`220px`}
              />
            ) : (
              <img
                src={anonym}
                alt={movie.title}
                width={`220px`}
                height={'350px'}
              />
            )}
          </div>
          <div className={s.right_wrapper}>
            <h4>Overview</h4>
            <p>{movie.overview}</p>
            <h4>Genres</h4>
            <ul>{fetchGenres(movie.genres)}</ul>
            <h3>Additional information</h3>
            <nav>
              {' '}
              <ul className={s.info}>
                <li>
                  <NavLink className={s.info_button} to="cast">
                    Cast
                  </NavLink>
                </li>
                <li>
                  <NavLink className={s.info_button} to="reviews">
                    Reviews
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Movie;
