import React, { Component, Fragment } from 'react';
import axios from 'axios';
import '../styles/saved-properties.css';

const URL = 'http://localhost:3000/api/v1';

class SavedProperties extends Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: [],
      isError: false,
      alertMessage: '',
    };
  }

  componentDidMount() {
    axios.get(`${URL}/Favourite/?populate=propertyListing`)
      .then(({ data: properties }) => {
        this.setState({
          properties,
        });
      })
      .catch(() => {
        this.setState({
          isError: true,
          alertMessage: 'Server error, please try again.',
        });
      });
  }

  render() {
    const { properties } = this.state;
    return (
      <Fragment>
        {properties.map(property => {
          return (
            <div className="favourite" key={property._id}>
              <span>{property.propertyListing.title}</span>
              <button>Remove</button>
            </div>
          );
        })}
      </Fragment>
    );
  }
};

module.exports = SavedProperties;
