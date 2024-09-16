// sitemap-generator.js
const Sitemap = require('react-router-sitemap').default;
const path = require('path');
const axios = require('axios');

// Base URL for your site
const WEBSITE_URL = 'https://movie-downloader-app.vercel.app';

// TMDb API settings
const API_KEY = '18505c3053cedcb00ea24d93f3e34ef4'; // Your TMDb API Key
const BASE_URL = 'https://api.themoviedb.org/3';

// Function to fetch dynamic movie routes
const fetchDynamicRoutes = async () => {
  try {
    // Fetch popular movies
    const popularMovies = await axios.get(`${BASE_URL}/movie/popular`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
        page: 1,
      },
    });

    // Fetch now-playing movies
    const nowPlayingMovies = await axios.get(`${BASE_URL}/movie/now_playing`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
        page: 1,
      },
    });

    // Fetch trending movies
    const trendingMovies = await axios.get(`${BASE_URL}/trending/movie/week`, {
      params: {
        api_key: API_KEY,
      },
    });

    // Fetch top-rated movies
    const topRatedMovies = await axios.get(`${BASE_URL}/movie/top_rated`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
        page: 1,
      },
    });

    // Fetch recent month movies
    const currentDate = new Date();
    const pastMonthDate = new Date();
    pastMonthDate.setMonth(currentDate.getMonth() - 1);

    const recentMonthMovies = await axios.get(`${BASE_URL}/discover/movie`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
        sort_by: 'release_date.desc',
        'release_date.gte': pastMonthDate.toISOString().split('T')[0],
        'release_date.lte': currentDate.toISOString().split('T')[0],
        page: 1,
      },
    });

    // Combine all movie data
    const allMovies = [
      ...popularMovies.data.results,
      ...nowPlayingMovies.data.results,
      ...trendingMovies.data.results,
      ...topRatedMovies.data.results,
      ...recentMonthMovies.data.results,
    ];

    // Create an array of dynamic movie routes
    const movieRoutes = allMovies.map(movie => `/movie/${movie.id}`);

    return movieRoutes;

  } catch (error) {
    console.error('Error fetching movie routes:', error);
    return [];
  }
};

// Function to generate the sitemap
async function generateSitemap() {
  // Fetch dynamic routes for movies
  const dynamicMovieRoutes = await fetchDynamicRoutes();

  // Define static routes (e.g., homepage, other static pages)
  const staticRoutes = [
    '/', // Homepage
    // Add other static routes if needed
  ];

  // Combine static and dynamic routes
  const allRoutes = [
    ...staticRoutes,
    ...dynamicMovieRoutes,
  ];

  // Generate the sitemap
  new Sitemap(allRoutes)
    .build(WEBSITE_URL) // Your live website URL
    .save(path.resolve(__dirname, './public/sitemap.xml')); // Save in public folder
}

generateSitemap();
