import React from 'react';
import './SeventhSlide.css'

import logo from '../img/seventhSlide/Union.svg'
import facebook from '../img/seventhSlide/Fill 1.svg'
import insta from '../img/seventhSlide/Insta.svg'
import twitter from '../img/seventhSlide/Path.svg'

export const SeventhSlide = () => {
  return <div className="seventhSlideMain">
      <img className="seventhSlideFirstImg" src={logo} alt="logo"/>
      <h1 className="seventhSlideTopic">Empower yourself with the best books insights</h1>
      <p className="seventhSlideText">Social media:</p>
      <div>
        <img className="seventhSlideSecondImg" src={facebook} alt="facebook"/>
        <img className="seventhSlideSecondImg"src={insta} alt="insta"/>
        <img className="seventhSlideSecondImg"src={twitter} alt="twitter"/>
      </div>
  </div>;
};
