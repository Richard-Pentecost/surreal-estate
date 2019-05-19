import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FacebookLogin from 'react-facebook-login';

const NavBar = (props) => {
  return (
    <div className="navbar">
      <div className="textLogo">
        <FontAwesomeIcon icon={['fas', 'gopuram']} />
        <span className="companyName">Surreal Estate</span>
        <ul className="nav">
          <li className="item"><Link to="/" className="link">View Properties</Link></li>
          <li className="item"><Link to="/add-property" className="link">Add a Property</Link></li>
        </ul>
        {props.userID ?
          <button onClick={props.onLogout}>Sign Out</button>
          : (
            <FacebookLogin
              appId={1156428664529062}
              autoload
              callback={props.onLogin}
            />
          )
        }
      </div>
    </div>
  );
};

export default NavBar;
