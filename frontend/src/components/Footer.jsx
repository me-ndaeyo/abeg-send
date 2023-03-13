import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/logo/abeg-send.webp'
import {BsSun, BsMoon} from 'react-icons';
import '../styles/Footer.scss'

function Footer() {
    const year = new Date().getFullYear()
    const [light, setLight] = useState(true)
  return (
    <footer>
      <div className="footer-copy">
        <p>&copy;{` ${year} All Rights Reserved, abeg send`}</p>
      </div>
      <div className="footer-theme">
        {light ? <BsSun/> : <BsMoon/>}
      </div>
    </footer>
  );
}

export default Footer