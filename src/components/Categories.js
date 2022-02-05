import React from 'react';
import './Categories.css'

export const Categories = ({ data, chooseCategory, highlightedCats }) => {

    const bookblocks = data.map((category) => {
        const highlighted = highlightedCats.includes(category.title);
        return <button className={highlighted ? 'choosen categoriesButton' : 'categoriesButton'} onClick={() => chooseCategory(category.title)}>
                <img src={category.img} alt={category.title}/>
                <p className="categoriesText">{category.text}</p>
                </button>
    })

    const firstRow = bookblocks.slice(0, Math.floor(data.length / 2));
    const secondRow = bookblocks.slice(Math.floor(data.length / 2));
    const rows = [firstRow, secondRow];

  return <div className='categoriesMain'>
      {
          rows.map((row) => {
              return <div className="categoriesRow">
              {
                  row
              }
            </div>
          })
      }
  </div>;
};
