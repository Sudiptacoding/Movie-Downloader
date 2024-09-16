import React, { useState } from 'react';
import { fetchSearchMovies } from '../api'; // Assuming you have an API function to search movies

const SearchMovie = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (query) {
      const searchResults = await fetchSearchMovies(query); // Fetch movies based on the search query
      setMovies(searchResults);
    }
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6">Search for a Movie</h2>

      <form onSubmit={handleSearch} className="mb-6">
        <input
          type="text"
          placeholder="Enter movie title..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full p-4 border rounded-lg"
        />
        <button
          type="submit"
          className="mt-4 px-6 py-2 bg-yellow-500 text-white font-semibold rounded hover:bg-yellow-600"
        >
          Search
        </button>
      </form>

      {movies.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {movies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="rounded-lg"
              />
              <h3 className="mt-2 text-lg font-semibold">{movie.title}</h3>
            </div>
          ))}
        </div>
      ) : (
        query && <p>No results found for "{query}"</p>
      )}
    </div>
  );
};

export default SearchMovie;
