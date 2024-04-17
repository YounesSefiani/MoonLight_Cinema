import React from "react";
import { Link, Outlet } from "react-router-dom";
import MoonlightLogo from "../../assets/moonlightLogo.png";

import "./Header.css";

function Header() {
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
              <Link to="films">Films</Link>
            </li>
            <div className="dropcontent">
              <li>
                <Link to="prochainement">Prochainement</Link>
              </li>
              <li>
                <Link to="à-l'affiche">A l'affiche</Link>
              </li>
              <li>
                <Link to="dernière-chance">Dernière chance</Link>
              </li>
            </div>
          </div>
          <li>
            <Link to="évènements">Evènements</Link>
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
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Header;
