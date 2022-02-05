 import React, {useState} from 'react';
 import './SecondHalf.css'
 import { Toggle } from './Toggle';

 import image1 from '../img/fifthSlide/image1.svg'
 import image2 from '../img/fifthSlide/image2.svg'
 import headphones from '../img/fifthSlide/Path.svg'
 import menu from '../img/fifthSlide/Shape.svg'
 import headphones1 from '../img/fifthSlide/Path1.svg'
 import menu1 from '../img/fifthSlide/Shape1.svg'


 export const FifthSlide = () => {
   const [picture, setPicture] = useState(true)   
    
   return <div className="slideMain : fifthMain">
       <h1 className="slideTopic ; fifthTopic">Read or Listen</h1>
       <p>Commuting, jogging, or stuck in line? Enjoy the best books in a condensed format. Summaries have an audio version, narrated by professional voice actors.</p>
       <div className="fifthSlideTogger">
            <p>Listen</p>
            <div onChange={() => setPicture(!picture)}>
              <img className='toggleFirstPic' src={picture === true ? headphones : headphones1} alt="headphones"/>
              <Toggle />
              <img className='toggleSecondtPic' src={picture === true ? menu : menu1} alt="menu"/>
            </div>
            <p>Read</p>
       </div>
       <div>
         <img className="fifthSlideImg" src={picture === true ? image1 : image2} alt="image"/>
       </div>
   </div>;
 };
   