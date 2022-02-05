import React from 'react';
import './SecondSlide.css'

import brands from '../img/secondSlide/Image.svg'
import blocks from '../img/secondSlide/Image2.svg'
import schedule from '../img/secondSlide/Image3.svg'

const secondSlideInfo = [
  {
    topic: "Get smarter with the least effort",
    subtopic: "Learn from the best",
    text: "Highlighted by top reviewers, we picked only the most outstanding bestsellers for you.",
    img: brands,
    title: "brands"
  },
  {
    subtopic: "Get key insights",
    text: "Major ideas in a bite-sized form. Long reads no more!",
    img: blocks,
    title: "blocks"
  },
  {
    subtopic: "Build a reading habit",
    text: "Consistency is the key to top performance. Only 15 minutes per day to make reading your brand new habit!",
    img: schedule,
    title: "schedule"
  },
]

export const SecondSlide = () => {
  return <div className="secondSlideMain">
        {
          secondSlideInfo.map((secondSlide) => {
            return (
              <div>
                <h1 className="secondSlideTopic">{secondSlide.topic}</h1>
                <img className="secondSlideFirstImg" src={secondSlide.img} alt={secondSlide.title}/>
                <h2 className="secondSlideSmallerTopic">{secondSlide.subtopic}t</h2>
                <p className="secondSlideParagraph">{secondSlide.text}</p>
              </div>
            )
          })
        }
  </div>;
};
