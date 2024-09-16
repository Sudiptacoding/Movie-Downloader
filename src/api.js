import axios from 'axios';

const API_KEY = '18505c3053cedcb00ea24d93f3e34ef4'; // Your TMDb API Key
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchPopularMovies = async () => {
  const response = await axios.get(`${BASE_URL}/movie/popular`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
      page: 1,
    },
  });
  return response.data.results;
};

export const fetchNowPlayingMovies = async () => {
  const response = await axios.get(`${BASE_URL}/movie/now_playing`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
      page: 1,
    },
  });
  return response.data.results;
};

export const fetchTrendingMovies = async () => {
  const response = await axios.get(`${BASE_URL}/trending/movie/week`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data.results;
};

export const fetchTopRatedMovies = async () => {
  const response = await axios.get(`${BASE_URL}/movie/top_rated`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
      page: 1,
    },
  });
  return response.data.results;
};

export const fetchRecentMonthMovies = async () => {
  const currentDate = new Date();
  const pastMonthDate = new Date();
  pastMonthDate.setMonth(currentDate.getMonth() - 1);

  const response = await axios.get(`${BASE_URL}/discover/movie`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
      sort_by: 'release_date.desc',
      'release_date.gte': pastMonthDate.toISOString().split('T')[0],
      'release_date.lte': currentDate.toISOString().split('T')[0],
      page: 1,
    },
  });
  return response.data.results;
};

export const fetchMovieDetails = async (movieId) => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });
  return response.data;
};

export const fetchSearchMovies = async (query) => {
    try {
      const response = await axios.get(`${BASE_URL}/search/movie`, {
        params: {
          api_key: API_KEY,
          query: query,
        },
      });
      return response.data.results;
    } catch (error) {
      console.error('Error fetching search results:', error);
      return [];
    }
  };


  
