import React from 'react';
import './Toggle.css'


export const Toggle = () => {
  return (
        <label className="toggleSwitch">
            <input type="checkbox"/>
            <span className="toggleSlider"/>
        </label>
  );
};
