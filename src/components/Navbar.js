import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <NavLink to="/" className="navbar-brand">
          <div className="brand-crest">M</div>
          <div>
            <div className="brand-name">Mepco College</div>
            <div className="brand-sub">Admissions Portal</div>
          </div>
        </NavLink>

        <ul className="navbar-links">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => isActive ? 'active' : ''}
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/register"
              className={({ isActive }) => `nav-cta ${isActive ? 'active' : ''}`}
            >
              Apply Now
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
