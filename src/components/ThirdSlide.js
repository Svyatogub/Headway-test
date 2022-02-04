import React from 'react';
import './ThirdSlide.css'

import book from '../img/thirdSlide/Book.svg'
import vector1 from '../img/thirdSlide/Vector 2.svg'
import vector2 from '../img/thirdSlide/Vector 3.svg'
import iphone from '../img/thirdSlide/iPhone.svg'


export const ThirdSlide = () => {
  return <div className="thirdSlideMain">
      <h1 className="thirdSlideTopic">Summary is the new black</h1>
      <p className="thirdSlideText">Use summaries: comprehensive 15-min abstracts from nonfiction books with the main concepts and recommendations.</p>
      <img className="thirdSlideFristImg" src={book} alt="book"/>
      <p className="thirdSlideText">Typical book</p>
      <p className="thirdSlideSmallerText">320 pages ~ 20 hours</p>
      <img className="thirdSlideSecondImg" src={vector2} alt="vector2"/>
      <p className="thirdSlideText">Key ideas & insights</p>
      <img className="thirdSlideThirdImg" src={vector1} alt="vector1"/>
      <img className="thirdSlideFourthImg" src={iphone} alt="iphone"/>
      <p className="thirdSlideText">Summary</p>
      <p className="thirdSlideSmallerText">~ 15 minutes</p>
  </div>;
};
