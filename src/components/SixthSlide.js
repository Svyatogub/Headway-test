import React from 'react';
import './SixthSlide.css'

import comment1 from '../img/sixthSlide/review.svg'
import comment2 from '../img/sixthSlide/review2.svg'
import comment3 from '../img/sixthSlide/review3.svg'
import comment4 from '../img/sixthSlide/review4.svg'
import comment5 from '../img/sixthSlide/review5.svg'
import comment6 from '../img/sixthSlide/review6.svg'



export const SixthSlide = () => {
  return <div className="sixthSlideMain">
      <h1 className="sixthSlideTopic">People love the Headway app</h1>
      <p className="sixthSlideText">Become a member of our global community of <span className="sixthSlideSpan">7 million people</span></p>
      <img className="sixthSlideFirstImg" src={comment1} alt="comment1"/>
      <img className="sixthSlideSecondImg" src={comment2} alt="comment2"/>
      <img className="sixthSlideThirdImg" src={comment3} alt="comment3"/>
      <img className="sixthSlideFourthImg" src={comment4} alt="comment4"/>
      <div className="sixthSlideApps">
        <img className="sixthSlideFifthImg" src={comment5} alt="comment5"/>
        <img className="sixthSlideSixthImg" src={comment6} alt="comment6"/>
      </div>
  </div>;
};
