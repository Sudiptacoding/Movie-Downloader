import React, { useEffect, useState } from 'react';
import { fetchNowPlayingMovies } from '../api';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade'; // Import fade effect CSS
import { Autoplay, EffectFade } from 'swiper/modules';
import './Banner.css'
// Import necessary Swiper modules
// Custom CSS for text animations

const Banner = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const loadBannerMovies = async () => {
      const recentMovies = await fetchNowPlayingMovies();
      setMovies(recentMovies.slice(0, 5)); // Show top 5 recent movies
    };
    loadBannerMovies();
  }, []);

  return (
    <section className="mb-8">
      <Swiper
        modules={[EffectFade, Autoplay]} // Enable fade effect and autoplay
        effect="fade"
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
        loop={true}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div className="relative lg:h-[550px] h-screen">
              <img
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt={movie.title}
                className="w-full h-full object-cover rounded-lg fade-img" // Fade image class
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start p-14 lg:py-20 lg:px-28 text-container">
                <h2 className="text-4xl font-bold text-white mb-4 fade-title">
                  {movie.title}
                </h2>
                <p className="text-white mb-6 fade-description lg:w-2/5 w-full">
                  {movie.overview}
                </p>
                <Link
                  to={`/movie/${movie.id}`}
                  className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded hover:bg-yellow-600 fade-button"
                >
                  View Details
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Banner;
