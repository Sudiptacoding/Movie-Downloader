import React from 'react';

const Header = ({ popularMoviesRef, trendingMoviesRef, topRatedMoviesRef, recentMonthMoviesRef }) => {

  // Function to scroll to a specific section
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="absolute top-0 left-0 w-full bg-white bg-opacity-20 backdrop-blur-md text-white shadow-lg z-50">
      <div className="container mx-auto px-4 py-4 lg:flex-row flex-col flex justify-between items-center">
        <div className="text-2xl font-bold">Movie Downloader</div>

        <div className="flex space-x-6 my-5 lg:my-0 flex-wrap justify-center">
          {/* Buttons to scroll to each section */}
          <button 
            onClick={() => scrollToSection(popularMoviesRef)} 
            className="cursor-pointer text-lg hover:text-yellow-400 transition-all duration-300"
          >
            Popular Movies
          </button>
          <button 
            onClick={() => scrollToSection(trendingMoviesRef)} 
            className="cursor-pointer text-lg hover:text-yellow-400 transition-all duration-300"
          >
            Trending Movies
          </button>
          <button 
            onClick={() => scrollToSection(topRatedMoviesRef)} 
            className="cursor-pointer text-lg hover:text-yellow-400 transition-all duration-300"
          >
            Top Rated Movies
          </button>
          <button 
            onClick={() => scrollToSection(recentMonthMoviesRef)} 
            className="cursor-pointer text-lg hover:text-yellow-400 transition-all duration-300"
          >
            Recent Month Movies
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
