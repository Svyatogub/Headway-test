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

export const Books = () => {
  return <div className="booksMain">
    <div className="booksRow1">
        <img className="booksImg" src={book1} alt="book"/>
        <img className="booksImg" src={book2} alt="book"/>
        <img className="booksImg" src={book3} alt="book"/>
        <img className="booksImg" src={book4} alt="book"/>
        <img className="booksImg" src={book5} alt="book"/>
    </div>
    <div className="booksRow2">
        <img className="booksImg" src={book6} alt="book"/>
        <img className="booksImg" src={book7} alt="book"/>
        <img className="booksImg" src={book8} alt="book"/>
        <img className="booksImg" src={book9} alt="book"/>
        <img className="booksImg" src={book10} alt="book"/>
        <img className="booksImg" src={book11} alt="book"/>
    </div>
    <div className="booksRow1">
        <img className="booksImg" src={book12} alt="book"/>
        <img className="booksImg" src={book13} alt="book"/>
        <img className="booksImg" src={book14} alt="book"/>
        <img className="booksImg" src={book15} alt="book"/>
        <img className="booksImg" src={book16} alt="book"/>
    </div>
  </div>;
};
