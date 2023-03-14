import React from 'react'
import '../styles/Footer.scss'

function Footer() {
    const year = new Date().getFullYear()
  return (
    <footer>
      <div className="footer-copy">
        <p>&copy;{` ${year} All Rights Reserved, abeg send`}</p>
      </div>
      <div className="footer-theme">
        <p>Theme</p>
      </div>
    </footer>
  );
}

export default Footer