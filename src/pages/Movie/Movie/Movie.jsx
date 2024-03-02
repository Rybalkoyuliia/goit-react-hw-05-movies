import Button from 'components/Button/Button';
import { useHttp } from 'hooks/useHttp';
import { useRef } from 'react';
import {
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { fetchMovieById } from 'services/api';
import s from './Movie.module.css';
import { ThreeDots } from 'react-loader-spinner';

const Movie = () => {
  const location = useLocation();
  const nav = useNavigate();
  console.log(location);
  const goBackRef = useRef(location.state?.from ?? '/');

  const fetchGenres = genres => {
    return genres.map(genre => <li key={genre.id}>{genre.name}</li>);
  };

  const { id } = useParams();

  const [movie] = useHttp(fetchMovieById, id);
  if (!movie) {
    return (
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
  }
  return (
    <>
      <main>
        {location.key === 'default' ? (
          <Button to={goBackRef.current} />
        ) : (
          <button className={s.back_button} onClick={() => nav(-1)}>
            Go Back
          </button>
        )}
        <h1 className={s.title}>{movie.title}</h1>
        <div className={s.common_wrapper}>
          <div className={s.left_wrapper}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              width={`325px`}
              height={'100%'}
            />
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

        <Outlet />
      </main>
    </>
  );
};

export default Movie;
