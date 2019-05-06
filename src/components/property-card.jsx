import React from 'react';
import '../styles/property-card.css';

const PropertyCard = (props) => {
  return (
    <div className="property-card-div">
      <p className="property-card-title">{props.title}</p>
      <p className="property-card-type"><em>{props.type} - {props.city}</em></p>
      <p className="property-card-bathrooms">{props.bathrooms}</p>
      <p className="property-card-bedrooms">{props.bedrooms}</p>
      <p className="property-card-price">{props.price}</p>
      <p className="property-card-email">{props.email}</p>
    </div>
  );
};

export default PropertyCard;
