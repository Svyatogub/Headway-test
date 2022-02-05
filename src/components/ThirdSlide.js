import React from 'react';
import './FirstHalf.css'

import book from '../img/thirdSlide/Book.svg'
import vector1 from '../img/thirdSlide/Vector 2.svg'
import vector2 from '../img/thirdSlide/Vector 3.svg'
import iphone from '../img/thirdSlide/iPhone.svg'

const firstBlock = [
  {
    topic: "Summary is the new black",
    text: "Use summaries: comprehensive 15-min abstracts from nonfiction books with the main concepts and recommendations.",
    img: book,
    title: "book"
  },
]

const secondBlock = [
  {
    text: "Typical book",
    smallerText: "320 pages ~ 20 hours",
    img: vector2,
    title: "vector2"
  },
  {
    text: "Key ideas & insights",
    img: vector1,
    title: "vector1"
  }
]

const thirdBlock = [
  {
    img: iphone,
    title: "iphone",
    text: "Summary",
    smallerText: "~ 15 minutes"
  }
]


export const ThirdSlide = () => {
  return <div className="slideMain ; thirdMain">
      {
        firstBlock.map((first) => {
          return <>
                  <h1 className="thirdSlideTopic">{first.topic}</h1>
                  <p className="thirdSlideText">{first.text}</p>
                  <img className="thirdSlideFristImg" src={first.img} alt={first.title}/>
                </>
        })
      }
      {
        secondBlock.map((second) => {
          return <>
                  <p className="thirdSlideText">{second.text}</p>
                  <p className="thirdSlideSmallerText">{second.smallerText}</p>
                  <img className="thirdSlideThirdImg" src={second.img} alt={second.title}/>
                </>
        })
      }
      {
        thirdBlock.map((third) => {
          return <>
                  <img className="thirdSlideFourthImg" src={third.img} alt={third.title}/>
                  <p className="thirdSlideText">{third.text}</p>
                  <p className="thirdSlideSmallerText">{third.smallerText}</p>
                </>
        })
      }
  </div>;
};
