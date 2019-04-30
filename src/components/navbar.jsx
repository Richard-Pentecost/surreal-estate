import React from 'react';
import { Link } from 'react-router-dom';
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
          <li className="item"><Link to="/" className="link">View Properties</Link></li>
          <li className="item"><Link to="/add-property" className="link">Add a Property</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
