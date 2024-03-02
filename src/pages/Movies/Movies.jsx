import FormField from 'components/Form/FormField';
import { useHttp } from 'hooks/useHttp';
import { Link, useSearchParams } from 'react-router-dom';
import { fetchMoviesSearch } from 'services/api';
import s from './Movies.module.css';
import anonym from '../../components/TrendMoviesItem/anonymous.webp';
import { ThreeDots } from 'react-loader-spinner';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  const [movies] = useHttp(fetchMoviesSearch, query);

  return movies !== null ? (
    <div>
      <FormField setSearchParams={setSearchParams} />
      <ul className={s.list}>
        {movies.results.map(movie => (
          <li key={movie.id} className={s.item}>
            <Link className={s.link} to={`${movie.id}`}>
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

              <p className={s.movie_title}>{movie.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
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

export default Movies;
