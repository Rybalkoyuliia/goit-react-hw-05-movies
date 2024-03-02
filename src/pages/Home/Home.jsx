import { useHttp } from 'hooks/useHttp';
import { fetchTrendMovies } from 'services/api';

import MoviesList from 'components/MoviesList/MoviesList';
import Loader from 'components/Loader/Loader';

import s from './Home.module.css';

const Home = () => {
  const [movies] = useHttp(fetchTrendMovies);

  return movies !== null ? (
    <main className={s.main}>
      <h1 className={s.title}>
        Trending <span className={s.accent}>today</span>
      </h1>
      <MoviesList movies={movies} />
    </main>
  ) : (
    <Loader />
  );
};

export default Home;
