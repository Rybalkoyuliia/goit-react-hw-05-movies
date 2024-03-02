import { useSearchParams } from 'react-router-dom';

import { useHttp } from 'hooks/useHttp';
import { fetchMoviesSearch } from 'services/api';

import FormField from 'components/Form/FormField';
import MoviesList from 'components/MoviesList/MoviesList';
import Loader from 'components/Loader/Loader';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  const [movies] = useHttp(fetchMoviesSearch, query);

  return movies !== null ? (
    <div>
      <FormField setSearchParams={setSearchParams} />
      <MoviesList movies={movies} />
    </div>
  ) : (
    <Loader />
  );
};

export default Movies;
