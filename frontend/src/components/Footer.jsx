import React, { useContext } from 'react'
import { themeContext } from '../App';
import '../styles/Footer.scss'

function Footer() {
    const year = new Date().getFullYear()
    const {light, toggleTheme} = useContext(themeContext)
  return (
    <footer>
      <div className="footer-copy">
        <p>&copy;{` ${year} All Rights Reserved, abeg send`}</p>
      </div>
      <div className="footer-theme">
        <p onClick={toggleTheme}>{light? 'Light' : 'Dark'}</p>
      </div>
    </footer>
  );
}

export default Footer