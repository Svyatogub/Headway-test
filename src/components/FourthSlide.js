
import React, { useEffect, useState } from 'react';
import './FirstHalf.css'

import { Categories } from './Categories';
import { Books } from './Books';

import { data } from './fakeApi';

const fourthSlideInfo = [
  {
    topic: "Determine your goal and go ahead!",
    text: "Learn something new every day from Self-Growth, Happiness, Money, Health, and many other categories. Benefit from unlimited access to world best thoughts."
  }
]

export const FourthSlide = () => {

  const [highlightedCats, setHighlightedCats] = useState([]);

  const chooseCategory = (category) => {
    if (category) {
      if (highlightedCats.includes(category)) {
        setHighlightedCats(highlightedCats.filter((cat) => cat !== category))
      } else {
        setHighlightedCats(highlightedCats.concat(category));
      }
    } else {
      setHighlightedCats([]);
    }
  }

  return <div className="slideMain fourthMain">
      {
        fourthSlideInfo.map((fourth) => {
          return <>
            <h1 className="slideTopic fourthSlideTopic">{fourth.topic}</h1>
            <p className="slideParagraph">{fourth.text}</p>
          </>
        })
      }
      <div className="fourthCategories">
        <Categories data={data.categories} chooseCategory={chooseCategory} highlightedCats={highlightedCats}/>
      </div>
      <div className="fourthBooks">
          <Books data={data.books} highlightedCats={highlightedCats}/>
      </div>
  </div>;
};
