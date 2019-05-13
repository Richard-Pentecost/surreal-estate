import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="textLogo">
        <FontAwesomeIcon icon={['fas', 'gopuram']} />
        <span className="companyName">Surreal Estate</span>
        <ul className="nav">
          <li className="item"><Link to="/" className="link">View Properties</Link></li>
          <li className="item"><Link to="/add-property" className="link">Add a Property</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
