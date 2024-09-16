import React, { useEffect, useState } from 'react';
import { fetchSearchMovies } from '../api'; // Assuming you have an API function to search movies
import { Link } from 'react-router-dom';

const SearchMovie = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

console.log(movies)
  const getData = async () => {
    if (query) {
      const searchResults = await fetchSearchMovies(query); // Fetch movies based on the search query
      setMovies(searchResults);
    }
  }



  useEffect(() => {
    getData()
  }, [query]);


  return (
    <div className="container mx-auto px-4 ">
      <label
        class="mx-auto mb-14 mt-5 relative bg-white min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300"
       >
        <input value={query}
          onChange={(e) => setQuery(e.target.value)} id="search-bar" placeholder="Search your movie"
          class="px-6 text-black font-semibold py-2 w-full rounded-md flex-1 outline-none bg-white" />
        <button
          class="w-full md:w-auto px-6 py-3 bg-black border-black text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all disabled:opacity-70">
          <div class="relative">
            <div
              class="flex items-center justify-center h-3 w-3 absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 transition-all">
              <svg class="opacity-0 animate-spin w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                  stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                </path>
              </svg>
            </div>

            <div class="flex items-center transition-all opacity-1 valid:"><span
              class="text-sm font-semibold whitespace-nowrap truncate mx-auto">
              Search
            </span>
            </div>

          </div>

        </button>
      </label>





      {movies.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {movies.map((movie) => (
            <Link to={`/movie/${movie.id}`} key={movie.id} className="movie-card">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="rounded-lg"
              />
              <h3 className="mt-2 text-lg font-semibold text-black">{movie.title}</h3>
            </Link>




          ))}
        </div>
      ) : (
        query && <p>No results found for "{query}"</p>
      )}
    </div>
  );
};

export default SearchMovie;
