import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/logo/abeg-send.webp'
import '../styles/Navbar.scss'

function Navbar() {
  return (
    <nav>
        <div className="nav-logo">
            <img src={logo} alt='abeg-send--logo'/>
        </div>
        <ul className="nav-links">
            <li className="nav-link">
                Link
            </li>
            <li className="nav-link">
                Link
            </li>
        </ul>
    </nav>
  )
}

export default Navbar