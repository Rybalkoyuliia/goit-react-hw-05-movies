import { useHttp } from 'hooks/useHttp';
import { fetchTrendMovies } from 'services/api';
import s from './Home.module.css';
import MoviesList from 'components/MoviesList/MoviesList';
import { ThreeDots } from 'react-loader-spinner';

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

export default Home;
