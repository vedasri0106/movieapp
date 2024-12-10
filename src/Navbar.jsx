import React from 'react';
import { Link } from 'react-router-dom'; // If using React Router

const Navbar = function Navbar() {
  return (
   <div>

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/movie">Movie App</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse navItems" id="navbarNav">
          <ul className="navbar-nav ml-auto">
          
            <li className="nav-item">
              <Link className="nav-link" to="/watchLater">Watch Later</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/favourites">Favorites</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
   </div>
  );
}

export default Navbar;
