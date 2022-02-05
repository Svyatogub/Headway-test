import React from 'react';
import './SecondHalf.css'

import logo from '../img/seventhSlide/Union.svg'
import facebook from '../img/seventhSlide/Fill 1.svg'
import insta from '../img/seventhSlide/Insta.svg'
import twitter from '../img/seventhSlide/Path.svg'

const socials = [
  {
      title: 'facebook',
      logo: facebook,
      link: 'https://www.facebook.com/headwaybooks/'
  },
  {
      title: 'instagram',
      logo: insta,
      link: 'https://www.instagram.com/headway_app/'
  },
  {
      title: 'twitter',
      logo: twitter,
      link: 'https://twitter.com/get_headway'
  }
]

export const SeventhSlide = () => {
  return <div className="seventhMain ; slideMain">
      <img className="seventhSlideFirstImg" src={logo} alt="logo"/>
      <div className="seventhText">
        <h1 className="slideTopic ; seventhSlideTopic">Empower yourself with the best books insights</h1>
        <p>Social media:</p>
        <div>
          {
            socials.map((social) => {
              return <a href={social.link} target="_blank">
                  <img className="seventhSlideSecondImg" src={social.logo} alt={social.title} />
              </a>
            })
          }
        </div>
      </div>
  </div>;
};
