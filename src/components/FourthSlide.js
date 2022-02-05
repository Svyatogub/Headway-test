import React from 'react';
import './FourthSlide.css'

import { Categories } from './Categories';
import { Books } from './Books';

const fourthSlideInfo = [
  {
    topic: "Determine your goal and go ahead!",
    text: "Learn something new every day from Self-Growth, Happiness, Money, Health, and many other categories. Benefit from unlimited access to world best thoughts."
  }
]

export const FourthSlide = () => {
  return <div className="fourthSlideMain">
      {
        fourthSlideInfo.map((fourth) => {
          return <>
            <h1 className='fourthSlideTopic'>{fourth.topic}</h1>
            <p className='fourthSlideText'>{fourth.text}</p>
          </>
        })
      }
      <div className="fourthSlide">
        <Categories/>
      </div>
      <div className="fourthSlide">
       <Books/>
      </div>
  </div>;
};
