import React from 'react';
import './FourthSlide.css'

import snippets from '../img/fourthSlide/snippets.svg'
import { Categories } from './Categories';
import { Books } from './Books';



export const FourthSlide = () => {
  return <div className="fourthSlideMain">
      <h1 className='fourthSlideTopic'>Determine your goal and go ahead!</h1>
      <p className='fourthSlideText'>Learn something new every day from Self-Growth, Happiness, Money, Health, and many other categories. Benefit from unlimited access to world best thoughts.</p>
      <div className="fourthSlideCategories">
        <Categories/>
      </div>
      <div className="fourthSlideBooks">
       <Books/>
      </div>
  </div>;
};
