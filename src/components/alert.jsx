import React from 'react';
import '../styles/alert.css';

const Alert = (props) => {
  return (
    <div className={props.success}>{props.message}</div>
  );
};

export default Alert;
