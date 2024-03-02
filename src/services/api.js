import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchTrendMovies = async () => {
  const options = {
    method: 'GET',
    url: 'trending/movie/day',
    params: { language: 'en-US' },
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzZkMzM5ODQzNzgzYjk0NGNmYzJiMTQ1MmE0YzhlZCIsInN1YiI6IjY1Y2UyODg0ZDhhZjY3MDE4NzkwNjcyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gqV-EBw7yZpJ06OuE8sU-sevhCoZCN8Cwe7kvC2iZvg',
    },
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const fetchMovieById = async id => {
  const options = {
    method: 'GET',
    url: `movie/${id}`,
    params: {
      language: 'en-US',
      movie_id: 1,
      append_to_response: '',
    },
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNmQxNzRkMzczNGU1ZGI5Nzg5M2Q5NjU4ZDU1NmNjNiIsInN1YiI6IjY1ZGU4NWJlMTQwYmFkMDE4NjkzNTQxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Fve_csUJNzoZG2BaODejcu7Vo8LkD9Juv9wMoM7cZQE',
    },
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const fetchCasts = async id => {
  const options = {
    method: 'GET',
    url: `movie/${id}/credits`,
    params: { language: 'en-US' },
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNmQxNzRkMzczNGU1ZGI5Nzg5M2Q5NjU4ZDU1NmNjNiIsInN1YiI6IjY1ZGU4NWJlMTQwYmFkMDE4NjkzNTQxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Fve_csUJNzoZG2BaODejcu7Vo8LkD9Juv9wMoM7cZQE',
    },
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const fetchReviews = async id => {
  const options = {
    method: 'GET',
    url: `movie/${id}/reviews`,
    params: { language: 'en-US', page: '1' },
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNmQxNzRkMzczNGU1ZGI5Nzg5M2Q5NjU4ZDU1NmNjNiIsInN1YiI6IjY1ZGU4NWJlMTQwYmFkMDE4NjkzNTQxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Fve_csUJNzoZG2BaODejcu7Vo8LkD9Juv9wMoM7cZQE',
    },
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const fetchMoviesSearch = async query => {
  const options = {
    method: 'GET',
    url: 'search/movie',
    params: {
      query: `${query}`,
      include_adult: 'false',
      language: 'en-US',
      primary_release_year: '',
      page: '1',
    },
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNmQxNzRkMzczNGU1ZGI5Nzg5M2Q5NjU4ZDU1NmNjNiIsInN1YiI6IjY1ZGU4NWJlMTQwYmFkMDE4NjkzNTQxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Fve_csUJNzoZG2BaODejcu7Vo8LkD9Juv9wMoM7cZQE',
    },
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    return error;
  }
};
