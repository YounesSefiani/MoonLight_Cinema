import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Link, useLoaderData } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "./CarouselMenu.css";

function CarouselMenu() {
  const movies = useLoaderData();
  return (
    <div className="carouselMenu">
      <Carousel
        showArrows
        infiniteLoop
        autoPlay
        interval={5000}
        showStatus={false}
      >
        {movies.map((movie) => (
          <div className="carouselMovies">
            <div className="movieBackground">
              <img src={movie.background} alt={movie.title} />
            </div>
            <div className="movieLogo">
              {movie.logo ? (
                <img src={movie.logo} alt={movie.title} />
              ) : (
                <h2>{movie.title}</h2>
              )}
              <Link to={`movies/${movie.id}`}>
                <button type="button" className="button">
                  Réservez votre place !
                </button>
              </Link>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselMenu;
