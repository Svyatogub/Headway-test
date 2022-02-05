import React from 'react';
import './SecondHalf.css'

import comment1 from '../img/sixthSlide/review.svg'
import comment2 from '../img/sixthSlide/review2.svg'
import comment3 from '../img/sixthSlide/review3.svg'
import comment4 from '../img/sixthSlide/review4.svg'
import rating1 from '../img/sixthSlide/review5.svg'
import rating2 from '../img/sixthSlide/review6.svg'

const comments = [
  {
    title: "comment",
    img: comment1
  },
  {
    title: "comment",
    img: comment2
  },
  {
    title: "comment",
    img: comment3
  },
  {
    title: "comment",
    img: comment4
  },
]
const ratings = [
  {
    title: "rating",
    img: rating1
  },
  {
    title: "rating",
    img: rating2
  },
]


export const SixthSlide = () => {
  return <div className="slideMain ; sixthMain">
      <h1 className="slideTopic ; sixthSlideTopic">People love the Headway app</h1>
      <p>Become a member of our global community of <span className="sixthSlideSpan">7 million people</span></p>
      {
        comments.map((comment) => {
          return <img className="sixthSlideComment" src={comment.img} alt={comment.title}/>
        })
      }
      <div className="sixthSlideApps">
        {
          ratings.map((rating) => {
            return <img className="sixthSlideRating" src={rating.img} alt={rating.title}/>
          })
        }
      </div>
  </div>;
};
