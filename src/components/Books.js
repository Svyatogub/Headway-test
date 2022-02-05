import React from 'react';
import './Books.css'

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

const firstRow = [
  {
    title: "book",
    img: book1
  },
  {
    title: "book",
    img: book2
  },
  {
    title: "book",
    img: book3
  },
  {
    title: "book",
    img: book4
  },
  {
    title: "book",
    img: book5
  },
]
const secondRow = [
  {
    title: "book",
    img: book6
  },
  {
    title: "book",
    img: book7
  },
  {
    title: "book",
    img: book8
  },
  {
    title: "book",
    img: book9
  },
  {
    title: "book",
    img: book10
  },
  {
    title: "book",
    img: book11
  },
]
const thirdRow = [
  {
    title: "book",
    img: book12
  },
  {
    title: "book",
    img: book13
  },
  {
    title: "book",
    img: book14
  },
  {
    title: "book",
    img: book15
  },
  {
    title: "book",
    img: book16
  },
]

export const Books = () => {
  return <div className="booksMain">
    <div className="booksRow1">
        {
          firstRow.map((first) => {
            return <img className="booksImg" src={first.img} alt={first.title}/>
          })
        }
    </div>
    <div className="booksRow2">
        {
          secondRow.map((second) => {
            return <img className="booksImg" src={second.img} alt={second.title}/>
          })
        }
    </div>
    <div className="booksRow1">
        {
          thirdRow.map((third) => {
            return <img className="booksImg" src={third.img} alt={third.title}/>
          })
        }
    </div>
  </div>;
};
