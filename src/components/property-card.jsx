import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/property-card.css';

const PropertyCard = (props) => {
  return (
    <div className="property-card-div">
      <div className="main-icon-div">
        <FontAwesomeIcon icon={['fas', 'gopuram']} className="main-icon" />
      </div>
      <ul className="property-list">
        <li className="property-card-title">{props.title}</li>
        <li className="property-card-type"><em>{props.type} - {props.city}</em></li>
        <span><FontAwesomeIcon icon={['fas', 'bath']} className="icon" /></span>
        <li className="property-card-bathrooms">{props.bathrooms}</li>
        <FontAwesomeIcon icon={['fas', 'bed']} className="icon" />
        <li className="property-card-bedrooms">{props.bedrooms}</li>
        <FontAwesomeIcon icon={['fas', 'pound-sign']} className="con" />
        <li className="property-card-price">{props.price}</li>
        <FontAwesomeIcon icon={['far', 'envelope']} className="icon" />
      </ul>
      <p className="property-card-email">{props.email}</p>
    </div>
  );
};

export default PropertyCard;
