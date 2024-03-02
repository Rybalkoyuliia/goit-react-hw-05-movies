import { useHttp } from 'hooks/useHttp';
import { useParams } from 'react-router-dom';
import { fetchCasts } from 'services/api';
import s from './Cast.module.css';
import anonymous from '../../../components/TrendMoviesItem/anonymous.webp';
import { ThreeDots } from 'react-loader-spinner';

const Cast = () => {
  const { id } = useParams();

  const [casts] = useHttp(fetchCasts, id);
  if (!casts) {
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
    <ul className={s.list}>
      {casts.cast.map(crew => (
        <li key={crew.id} className={s.item}>
          {crew.profile_path !== null ? (
            <img
              src={`https://image.tmdb.org/t/p/w500${crew.profile_path}`}
              alt={crew.name}
              width={150}
              height={180}
            />
          ) : (
            <img src={anonymous} alt={crew.name} width={150} height={180} />
          )}

          <p className={s.crew}>{crew.name}</p>
          <p className={s.crew}>AS</p>
          <p className={s.crew}>{crew.character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
