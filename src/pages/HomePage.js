import React, { useRef } from 'react';
import { Helmet } from 'react-helmet';
import Banner from '../components/Banner';
import MovieSection from '../components/MovieSection';
import Header from '../components/Header'; // Import Header
import {
  fetchPopularMovies,
  fetchTrendingMovies,
  fetchTopRatedMovies,
  fetchRecentMonthMovies,
} from '../api';

const HomePage = () => {
  // Create refs for each section
  const popularMoviesRef = useRef(null);
  const trendingMoviesRef = useRef(null);
  const topRatedMoviesRef = useRef(null);
  const recentMonthMoviesRef = useRef(null);

  return (
    <div>
      <Helmet>
        <title>Movie Downloader - Home</title>
        <meta name="description" content="Download your favorite movies easily." />
      </Helmet>

      {/* Pass section refs to Header */}
      <Header
        popularMoviesRef={popularMoviesRef}
        trendingMoviesRef={trendingMoviesRef}
        topRatedMoviesRef={topRatedMoviesRef}
        recentMonthMoviesRef={recentMonthMoviesRef}
      />

      <Banner />

      <main className="container mx-auto px-4">
        {/* Movie Sections with refs */}
        <section ref={popularMoviesRef}>
          <MovieSection title="Popular Movies" fetchMovies={fetchPopularMovies} />
        </section>

        <section ref={trendingMoviesRef}>
          <MovieSection title="Trending Movies" fetchMovies={fetchTrendingMovies} />
        </section>

        <section ref={topRatedMoviesRef}>
          <MovieSection title="Top Rated Movies" fetchMovies={fetchTopRatedMovies} />
        </section>

        <section ref={recentMonthMoviesRef}>
          <MovieSection title="Recent Month Movies" fetchMovies={fetchRecentMonthMovies} />
        </section>
      </main>
    </div>
  );
};

export default HomePage;
