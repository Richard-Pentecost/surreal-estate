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
          <Link to="/" className="item">View Properties</Link>
          <Link to="/add-property" className="item">Add a Property</Link>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
