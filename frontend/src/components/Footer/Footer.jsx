import React from "react";
import { useLoaderData, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faSquareXTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import "./Footer.css";

function Footer() {
  const movies = useLoaderData();

  const upcomingMovies = movies.filter((movie) => movie.state === "upcoming");
  const availableMovies = movies.filter((movie) => movie.state === "available");
  const lastChanceMovies = movies.filter(
    (movie) => movie.state === "lastChance"
  );
  const eventMovies = movies.filter((movie) => movie.state === "event");

  return (
    <footer>
      <div className="footer">
        <div className="footerInfos">
          <h2>Moonlight Cinema</h2>
          <h2>6 rue Devosge</h2>
          <h2>21000 Dijon</h2>
        </div>
        <div className="footerMovies">
          <div className="footerMoviesSection">
            <h2>Prochainement</h2>
            <div className="footerMoviesList">
              {upcomingMovies.map((movie) => (
                <Link key={movie.id} to={`/movies/${movie.id}`}>
                  <div className="footerMoviesTitles">
                    <h3 className="movieTitle">{movie.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="footerMoviesSection">
            <h2>Actuellement dans les salles</h2>
            <div className="footerMoviesList">
              {availableMovies.map((movie) => (
                <Link key={movie.id} to={`/movies/${movie.id}`}>
                  <div className="footerMoviesTitles">
                    <h3 className="movieTitle">{movie.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="footerMoviesSection">
            <h2>Dernière chance</h2>
            <div className="footerMoviesList">
              {lastChanceMovies.map((movie) => (
                <Link key={movie.id} to={`/movies/${movie.id}`}>
                  <div className="footerMoviesTitles">
                    <h3 className="movieTitle">{movie.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="footerMoviesSection">
            <h2>Semaine japonaise</h2>
            <div className="footerMoviesList">
              {eventMovies.map((movie) => (
                <Link key={movie.id} to={`/movies/${movie.id}`}>
                  <div className="footerMoviesTitles">
                    <h3 className="movieTitle">{movie.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="socialNetworks">
          <h2>Rejoignez-nous !</h2>
          <div className="socialNetWorksLogos">
            <a
              aria-label="icon"
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} className="icon" />
            </a>
            <a
              aria-label="icon"
              href="https://www.facebook.com/?locale=fr_FR"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} className="icon" />
            </a>
            <a
              aria-label="icon"
              href="https://twitter.com/?lang=fr"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faSquareXTwitter} className="icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="credits">
        <h2> Réalisé par Younes SEFIANI</h2>
        <div className="socialNetWorksLogos">
          <a
            aria-label="icon"
            href="https://www.linkedin.com/in/younes-sefiani-4892a5194/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
          </a>
          <a
            aria-label="icon"
            href="https://github.com/YounesSefiani"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </a>
          <a aria-label="mail" href="mailto:younes.sefiani@outlook.fr">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
