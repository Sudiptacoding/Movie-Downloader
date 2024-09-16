import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { fetchMovieDetails } from '../api';

const MoviePage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const loadMovie = async () => {
      const movieData = await fetchMovieDetails(id);
      setMovie(movieData);
    };
    loadMovie();
  }, [id]);

  if (!movie) return <div className="container mx-auto p-4">Loading...</div>;

  return (
    <div>
      <Helmet>
        <title>{movie.title} | Movie Downloader</title>
        <meta name="description" content={movie.overview} />
        <meta property="og:title" content={movie.title} />
        <meta property="og:description" content={movie.overview} />
        <meta property="og:image" content={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
        <meta property="og:url" content={window.location.href} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={movie.title} />
        <meta name="twitter:description" content={movie.overview} />
        <meta name="twitter:image" content={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={`Poster of ${movie.title}`}
            className="w-full md:w-1/3 rounded-lg"
          />
          <div className="md:ml-8 mt-4 md:mt-0">
            <h1 className="text-3xl font-bold">{movie.title}</h1>
            <p className="mt-4">{movie.overview}</p>
            <div className="mt-6">
              <a
                href={`https://example.com/download/${movie.id}`} // Replace with actual download URL
                className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Download Movie
              </a>
            </div>
          </div>
        </div>
        {/* Add Adsterra or other advertisements here if needed */}
        <div className="mt-8">
          <iframe
            src="https://adsterra.com/ad-tag" // Replace with your actual Adsterra ad tag
            title="Advertisement"
            width="100%"
            height="250"
            style={{ border: 'none' }}
          ></iframe>
        </div>
      </main>
    </div>
  );
};

export default MoviePage;
