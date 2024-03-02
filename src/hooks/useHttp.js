import { useEffect, useState } from 'react';

export const useHttp = (fn, params) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fn(params)
      .then(data => setData(data))
      .catch(error => error.message);
  }, [fn, params]);
  return [data, setData];
};
