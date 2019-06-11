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
      deleteError: false,
    };
  }

  componentDidMount() {
    this.getFavourites();
  }

  handleRemove = (favouriteId) => {
    this.deleteFavourite(favouriteId);
  };

  getFavourites = () => {
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
  };

  deleteFavourite = (favouriteId) => {
    axios.delete(`${URL}/Favourite/${favouriteId}`)
      .then(() => {
        this.getFavourites();
      })
      .catch((err) => {
        console.log('error');
        this.setState({
          deleteError: true,
        });
      });
  };

  render() {
    const { properties } = this.state;
    return (
      <Fragment>
        {properties.map(property => {
          return (
            <div className="favourite" key={property._id}>
              <span>{property.propertyListing.title}</span>
              <button onClick={() => this.handleRemove(property._id)}>Remove</button>
            </div>
          );
        })}
      </Fragment>
    );
  }
};

module.exports = SavedProperties;
