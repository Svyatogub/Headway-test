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

export const Categories = () => {
  return <div className='categoriesMain'>
      <div className="categoriesRow">
        <button className="categoriesButton">
            <p className="categoriesText">All categories</p>
            </button>
        <button className="categoriesButton">
            <img src={mountain} alt="mountain"/>
            <p className="categoriesText">Self-Growth</p>
            </button>
        <button className="categoriesButton">
            <img src={smile} alt="smile"/>
            <p className="categoriesText">Happiness</p>
            </button>
        <button className="categoriesButton">
            <img src={creditCard} alt="creditCard"/>  
            <p className="categoriesText">Money & Investment</p>
            </button>
        <button className="categoriesButton">
            <img src={speaker} alt="speaker"/>  
            <p className="categoriesText">Negotiation</p>
            </button>
        <button className="categoriesButton">
            <img src={apple} alt="apple "/>
            <p className="categoriesText">Health</p>
            </button> 
      </div>
      <div className="categoriesRow">
        <button className="categoriesButton">
            <img src={planet} alt="planet"/>
            <p className="categoriesText">Spirituality</p>
            </button>
        <button className="categoriesButton">
            <img src={hourglass} alt="hourglass"/>
            <p className="categoriesText">Productivity</p>
            </button>
        <button className="categoriesButton">
            <img src={lock} alt="lock"/>
            <p className="categoriesText">Business & Career</p>
            </button>
        <button className="categoriesButton">
            <img src={heart} alt="heart"/>
            <p className="categoriesText">Love & Sex</p>
            </button>
        <button className="categoriesButton">
            <img src={ball} alt="ball"/>
            <p className="categoriesText">Sports & Fitness</p>
            </button>
      </div>
  </div>;
};
