import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.scss'

function Navbar() {
  const path = useLocation().pathname
  return (
    <nav>
      <div className="nav-logo">
        <Link to="/">
        </Link>
      </div>
      <ul className="nav-links">
        {path === '/help' ?
          <Link to="/" className="nav-link--el"> Home </Link> :
          <Link to="/help" className="nav-link--el border">?</Link>
        }
      </ul>
    </nav>
  );
}

export default Navbar