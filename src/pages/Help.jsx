import React from 'react'
import '../styles/Help.scss'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'

export default function Help() {
  return (
    <section class="help" id="how">
      <h2 class="help-heading">How it works:</h2>

      <div class="help-instructions">
        <div class="help-instruction">
          <div className="help-instruction--text">
            <span>01.</span>
            <p>Paste your video url in the matching input box (youtube, facebook, instagram and twitter). Try not to be funny.</p>
          </div>
          <div class="help-instruction--img">
            <img src={img1} alt=""/>
          </div>
        </div>
        <div class="help-instruction">
          <div className="help-instruction--text">
            <span>02.</span>
            <p>If you got the first step right, you can then click on 'Initialize link'. If all goes as planned, download link(s) should appear on the page.</p>
          </div>
          <div class="help-instruction--img">
            <img src={img2} alt=""/>
          </div>
        </div>
        <div class="help-instruction">
          <div className="help-instruction--text">
            <span>03.</span>
            <p>Click on any download link and the media with the specified format should start downloading (if all goes as planned).</p>
          </div>
          <div class="help-instruction--img">
            <img src={img3} alt=""/>
          </div>
        </div>
      </div>
    </section>
  );
}
