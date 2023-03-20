import React, { useContext } from 'react'
import { themeContext } from '../App';
import { BsMoonFill, BsSun } from 'react-icons/bs'
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
        <p onClick={toggleTheme}>{light? <BsMoonFill/> : <BsSun/>}</p>
      </div>
    </footer>
  );
}

export default Footer