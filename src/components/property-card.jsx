import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/property-card.css';

const PropertyCard = (props) => {
  return (
    <div className="propertyCard">
      <div className="propertyCard-header">
        <FontAwesomeIcon icon={['fas', 'gopuram']} className="propertyCard-logo" />
      </div>
      <div className="propertyCard-div">{props.title}</div>
      <div className="propertyCard-item" id="propertyCard-type">{props.type} - {props.city}</div>
      <div className="propertyCard-div">
        <span className="propertyCard-icon"><FontAwesomeIcon icon={['fas', 'bath']} /></span>
        <span className="propertyCard-item">{props.bathrooms}</span>
      </div>
      <div className="propertyCard-item">
        <span className="propertyCard-icon"><FontAwesomeIcon icon={['fas', 'bed']} /></span>
        <span className="propertyCard-item">{props.bedrooms}</span>
      </div>
      <div>
        <span className="propertyCard-icon"><FontAwesomeIcon icon={['fas', 'pound-sign']} /></span>
        <span className="propertyCard-item">{props.price}</span>
      </div>
      <div className="propertyCard-div" id="email-div">
        <span className="propertyCard-icon"><FontAwesomeIcon icon={['far', 'envelope']} /></span>
        <span className="propertyCard-email">Email</span>
      </div>
      {
        props.userID &&
        (
          <button onClick={() => props.onSaveProperty(props._id)}>
            Save
          </button>
        )
      }
    </div>
  );
};

export default PropertyCard;
