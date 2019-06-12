import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FacebookLogin from 'react-facebook-login';

const NavBar = (props) => {
  console.log(props.userID);
  return (
    <div className="navbar">
      <div className="textLogo">
        <FontAwesomeIcon className="logo" icon={['fas', 'gopuram']} />
        <span className="companyName">Surreal Estate</span>
        <ul className="nav">
          <li className="item"><Link to="/" className="link">View Properties</Link></li>
          {props.userID && <li className="item"><Link to="/saved-properties" className="link">Saved Properties</Link></li>}
          <li className="item"><Link to="/add-property" className="link">Add a Property</Link></li>
        </ul>
        <div className="loginButton">
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
    </div>
  );
};

export default NavBar;
