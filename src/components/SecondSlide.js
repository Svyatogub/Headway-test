import React from 'react';
import './SecondSlide.css'

import brands from '../img/secondSlide/Image.svg'
import blocks from '../img/secondSlide/Image2.svg'
import schedule from '../img/secondSlide/Image3.svg'

export const SecondSlide = () => {
  return <div className="secondSlideMain">
      
        <h1 className="secondSlideTopic">Get smarter with the least effort</h1>
        <img className="secondSlideFirstImg" src={brands} alt="brands"/>
        <h2 className="secondSlideSmallerTopic">Learn from the best</h2>
        <p className="secondSlideParagraph">Highlighted by top reviewers, we picked only the most outstanding bestsellers for you.</p>
      
        <img className="secondSlideSecondtImg" src={blocks} alt="blocks"/>
        <h2 className="secondSlideSmallerTopic">Get key insights</h2>
        <p className="secondSlideParagraph">Major ideas in a bite-sized form. Long reads no more!</p>

        <img className="secondSlideThirdImg" src={schedule} alt="schedule"/>
        <h2 className="secondSlideSmallerTopic">Build a reading habit</h2>
        <p className="secondSlideParagraph">Consistency is the key to top performance. Only 15 minutes per day to make reading your brand new habit!
</p>
  </div>;
};
