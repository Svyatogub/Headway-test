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

import book1 from '../img/books/1.svg'
import book2 from '../img/books/2.svg'
import book3 from '../img/books/3.svg'
import book4 from '../img/books/4.svg'
import book5 from '../img/books/5.svg'
import book6 from '../img/books/6.svg'
import book7 from '../img/books/7.svg'
import book8 from '../img/books/8.svg'
import book9 from '../img/books/9.svg'
import book10 from '../img/books/10.svg'
import book11 from '../img/books/11.svg'
import book12 from '../img/books/12.svg'
import book13 from '../img/books/13.svg'
import book14 from '../img/books/14.svg'
import book15 from '../img/books/15.svg'
import book16 from '../img/books/16.svg'

const categories = [
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
    },
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
  
  const books = [
    {
      title: "book",
      img: book1,
      categories: ['mountain','ball']
    },
    {
      title: "book",
      img: book2,
      categories: ['heart','ball']
    },
    {
      title: "book",
      img: book3,
      categories: ['lock','heart']
    },
    {
      title: "book",
      img: book4,
      categories: ['hourglass','lock']
    },
    {
      title: "book",
      img: book5,
      categories: ['planet','hourglass']
    },
    {
      title: "book",
      img: book6,
      categories: ['apple','planet']
    },
    {
      title: "book",
      img: book7,
      categories: ['mountain','apple']
    },
    {
      title: "book",
      img: book8,
      categories: ['speaker','ball']
    },
    {
      title: "book",
      img: book9,
      categories: ['mountain','speaker']
    },
    {
      title: "book",
      img: book10,
      categories: ['mountain','ball']
    },
    {
      title: "book",
      img: book11,
      categories: ['creditCard','ball']
    },
    {
      title: "book",
      img: book12,
      categories: ['mountain','creditCard']
    },
    {
      title: "book",
      img: book13,
      categories: ['mountain','ball']
    },
    {
      title: "book",
      img: book14,
      categories: ['smile']
    },
    {
      title: "book",
      img: book15,
      categories: ['mountain','smile']
    },
    {
      title: "book",
      img: book16,
      categories: ['smile','ball']
    },
  ]

export const data = {
    categories,
    books
}