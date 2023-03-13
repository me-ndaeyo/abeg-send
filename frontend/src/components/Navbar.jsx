import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/logo/abeg-send.webp'
import '../styles/Navbar.scss'

function Navbar() {
  return (
    <nav>
      <div className="nav-logo">
        <Link to="/">
          <img src={logo} alt="abeg-send--logo" />
        </Link>
      </div>
      <ul className="nav-links">
        <li className="nav-link">
          <Link className="nav-link--el" to="/help">
            Help
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar