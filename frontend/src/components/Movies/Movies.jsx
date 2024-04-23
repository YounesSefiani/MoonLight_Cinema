import React from "react";
import { useLoaderData, Link } from "react-router-dom";

import "./Movies.css";

function Movies() {
  const movies = useLoaderData();

  const upcomingMovies = movies.filter((movie) => movie.state === "upcoming");
  const availableMovies = movies.filter((movie) => movie.state === "available");
  const lastChanceMovies = movies.filter(
    (movie) => movie.state === "lastChance"
  );
  const eventMovies = movies.filter((movie) => movie.state === "event");

  return (
    <div className="movies">
      <div className="movieSection">
        <h2>Prochainement</h2>
        <div className="moviesList">
          {upcomingMovies.map((movie) => (
            <Link key={movie.id} to={`/movies/${movie.id}`}>
              <div className="moviesCard">
                <img
                  className="moviePoster"
                  src={movie.poster}
                  alt={movie.title}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="movieSection">
        <h2>Actuellement en salles</h2>
        <div className="moviesList">
          {availableMovies.map((movie) => (
            <Link key={movie.id} to={`/movies/${movie.id}`}>
              <div className="moviesCard">
                <img
                  className="moviePoster"
                  src={movie.poster}
                  alt={movie.title}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="movieSection">
        <h2>Dernière chance</h2>
        <div className="moviesList">
          {lastChanceMovies.map((movie) => (
            <Link key={movie.id} to={`/movies/${movie.id}`}>
              <div className="moviesCard">
                <img
                  className="moviePoster"
                  src={movie.poster}
                  alt={movie.title}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="movieSection">
        <h2>Semaine japonaise</h2>
        <div className="moviesList">
          {eventMovies.map((movie) => (
            <Link key={movie.id} to={`/movies/${movie.id}`}>
              <div className="moviesCard">
                <img
                  className="moviePoster"
                  src={movie.poster}
                  alt={movie.title}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Movies;
