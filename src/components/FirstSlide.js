import React from 'react';
import './FirstSlide.css';

import chart from '../img/firstSlide/chart.gif'
import phones from '../img/firstSlide/image 1.svg'

export const FirstSlide = () => {
  return <div className="firstSlideMain">
      <div className="firstSlideText">
         <h1 className="firstSlideTopic">Become a better you</h1>
         <p className="firstSlideParagraph">with 15-min bite-sized reads and audios of the world’s best nonfiction books</p>
      </div>
      <div className="firstSlideContent">
         <img className="firstSlideImg" src={chart} alt="chart"/>
         <button className="firstSlideButton">Get Started</button>
         <img className="firstSlideImg1" src={phones} alt="phones"/>
      </div>
  </div>;
};
