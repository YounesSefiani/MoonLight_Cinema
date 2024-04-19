import React, { useEffect, useState, useRef } from "react";
import { Link, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import MoonlightLogo from "../../assets/moonlightLogo.png";

import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        event.target !== menuButtonRef.current
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleButtonClick = (event) => {
    event.stopPropagation(); // Empêche la propagation de l'événement de clic vers le gestionnaire d'événements du document
    toggleMenu();
  };

  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <img src={MoonlightLogo} alt="Moonlight Logo" />
        </Link>
      </div>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <div className="dropmenu">
            <li>
              <Link to="/films">Films</Link>
            </li>
            <div className="dropcontent">
              <li>
                <Link to="prochainement">Prochainement</Link>
              </li>
              <li>
                <Link to="à-l-affiche">À l'affiche</Link>
              </li>
              <li>
                <Link to="dernière-chance">Dernière chance</Link>
              </li>
            </div>
          </div>
          <li>
            <Link to="évènements">Évènements</Link>
          </li>
          <li>
            <Link to="infos-pratiques">Infos Pratiques</Link>
          </li>
          <li>
            <Link to="boutique">Boutique</Link>
          </li>
          <li>
            <Link to="/">Membre ?</Link>
          </li>
        </ul>
      </nav>
      <div className="navbarPhone">
        <div className="logoPhone">
          <Link to="/">
            <img src={MoonlightLogo} alt="Moonlight Logo" />
          </Link>
        </div>
        <button
          type="button"
          ref={menuButtonRef}
          aria-label="navbarPhoneButton"
          className={`navbarPhoneButton ${menuOpen ? "open" : ""}`}
          onClick={handleButtonClick}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <nav
          ref={menuRef}
          className={`navbarPhoneMenu ${menuOpen ? "menu-open" : ""}`}
        >
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <div className="dropmenuMobile">
              <li>
                <Link to="/films">Films</Link>
              </li>
              <div className="dropcontentMobile">
                <li>
                  <Link to="prochainement">Prochainement</Link>
                </li>
                <li>
                  <Link to="à-l-affiche">À l'affiche</Link>
                </li>
                <li>
                  <Link to="dernière-chance">Dernière chance</Link>
                </li>
              </div>
            </div>
            <li>
              <Link to="évènements">Évènements</Link>
            </li>
            <li>
              <Link to="infos-pratiques">Infos Pratiques</Link>
            </li>
            <li>
              <Link to="boutique">Boutique</Link>
            </li>
            <li>
              <Link to="/">Membre ?</Link>
            </li>
          </ul>
        </nav>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Header;
