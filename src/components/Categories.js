import React from 'react';
import './Categories.css'

import mountain from '../img/categories/mountain.svg'
import smile from '../img/categories/smile.svg'
import creditCard from '../img/categories/credit-card.svg'
import speaker from '../img/categories/speaker.svg'
import apple from '../img/categories/apple.svg'
import planet from '../img/categories/planet.svg'
import hourglass from '../img/categories/hourglass.svg'
import lock from '../img/categories/lock.svg'
import heart from '../img/categories/heart.svg'
import ball from '../img/categories/ball.svg'

const firstRow = [
    {
        text: "All categories",
    },
    {
        text: "Self-Growth",
        img: mountain,
        title: "mountain"
    },
    {
        text: "Happiness",
        img: smile,
        title: "smile"
    },
    {
        text: "Money & Investment",
        img: creditCard,
        title: "creditCard"
    },
    {
        text: "Negotiation",
        img: speaker,
        title: "speaker"
    },
    {
        text: "Health",
        img: apple,
        title: "apple"
    }
]
const secondRow = [
    {
        text: "Spiritualit",
        img: planet,
        title: "planet"
    },
    {
        text: "Productivity",
        img: hourglass,
        title: "hourglass"
    },
    {
        text: "Business & Career",
        img: lock,
        title: "lock"
    },
    {
        text: "Love & Sex",
        img: heart,
        title: "heart"
    },
    {
        text: "Sports & Fitness",
        img: ball,
        title: "ball"
    }
]

export const Categories = () => {
  return <div className='categoriesMain'>
      <div className="categoriesRow">
        {
            firstRow.map((first) => {
                return <button className="categoriesButton">
                        <img src={first.img} alt={first.title}/>
                        <p className="categoriesText">{first.text}</p>
                        </button>
            })
        }
      </div>
      <div className="categoriesRow">
        {
            secondRow.map((second) => {
                return <button className="categoriesButton">
                        <img src={second.img} alt={second.title}/>
                        <p className="categoriesText">{second.text}</p>
                        </button>
            })
        }
      </div>
  </div>;
};
