
import React, { useEffect, useState } from 'react';
import './Books.css'

export const Books = ({ data, highlightedCats }) => {

  const [offset, setOffset] = useState(0);

  useEffect(() => {
      const onScroll = () => setOffset(window.pageYOffset);
      window.removeEventListener("scroll", onScroll);
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const bookBlocks = data.map((book) => {
    const includedIntoCat = highlightedCats.some((cat) => {
      return book.categories.includes(cat);
    }) || highlightedCats.length === 0
    return <img className={includedIntoCat ? "included booksImg" : "booksImg"} src={book.img} alt={book.title}/>
  })

  const firstRow = bookBlocks.slice(0, Math.floor(bookBlocks.length / 3));
  const secondRow = bookBlocks.slice(Math.floor(bookBlocks.length / 3) * 2);
  const thirdRow = bookBlocks.slice(Math.floor(bookBlocks.length / 3), Math.floor(bookBlocks.length / 3) * 2);

  const rows = [firstRow, secondRow, thirdRow];

  return <div className="booksMain">
    {
      rows.map((row, index) => {
        return <div className={"booksRow" + (index % 2 + 1)}>
          { row }
        </div>
      })
    }
    
  </div>;
};
