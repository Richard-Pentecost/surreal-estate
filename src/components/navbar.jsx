import React from 'react';
import '../styles/navbar.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdjust } from '@fortawesome/free-solid-svg-icons';

library.add(faAdjust);

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="textLogo">
        <FontAwesomeIcon icon="adjust" />
        <ul className="nav">
          <li className="item">View Properties</li>
          <li className="item">Add a Property</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
