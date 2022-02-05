import React from 'react';
import './FirstHalf.css';


import chart from '../img/firstSlide/chart.gif'
import phones from '../img/firstSlide/image 1.svg'


export const FirstSlide = () => {
  return <div className="slideMain ; firstMain">
       <div>
         <h1 className="slideTopic">Become a better you</h1>
         <p className="slideParagraph">with 15-min bite-sized reads and audios of the world’s best nonfiction books</p>
      </div>
      <div className="slideContent">
         <img className="firstSlideImg" src={chart} alt="chart"/>
         <button className="firstSlideButton">Get Started</button>
         <img className="firstSlideImg1" src={phones} alt="phones"/>
      </div>
  </div>;
};
