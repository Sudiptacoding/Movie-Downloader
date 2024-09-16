import React from 'react';
import SearchMovie from './SearchMovie';

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
                    <button onClick={() => document.getElementById('my_modal_3').showModal()} className="btn btn-ghost btn-circle cursor-pointer text-lg hover:text-yellow-400 transition-all duration-300">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>

                </div>
            </div>

            <dialog id="my_modal_3" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 text-black border-black top-2">✕</button>
                    </form>
                    <SearchMovie></SearchMovie>
                </div>
            </dialog>


        </header>
    );
};

export default Header;
