import React from 'react';
import './Header.css';

import logo from '../img/header/Union.svg';
import profile from '../img/header/Combined Shape.svg';
import menu from '../img/header/Menu.svg';

export const Header = () => {
  return <div className="headerMain">
            <div className="headerLeft">
                <img src={logo} alt="Logo"/>
            </div>
            <div className="headerRight">
                <button className="headerLeftButton">
                    <img src={profile} alt="profile"/>
                </button>
                <button className="headerRightButton">
                    <img src={menu} alt="menu"/>
                </button>
            </div>
        </div>;
};
 