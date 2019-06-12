import React, { Component, Fragment } from 'react';
import axios from 'axios';
import '../styles/saved-properties.css';

const URL = 'http://localhost:3000/api/v1';

class SavedProperties extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favourites: [],
      isError: false,
      alertMessage: '',
      deleteError: false,
    };
  }

  componentDidMount() {
    this.getFavourites();
  }

  componentWillUpdate(prevProps) {
    if (this.props.userID !== prevProps.userID) {
      this.getFavourites();
    }
  }

  handleRemove = (favouriteId) => {
    this.deleteFavourite(favouriteId);
  };

  getFavourites = () => {
    axios.get(`${URL}/Favourite/?populate=propertyListing`)
      .then(({ data }) => {
        const favourites = data.filter(favourite => favourite.fbUserId === this.props.userID);
        this.setState({
          favourites,
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
    const { favourites } = this.state;
    return (
      <Fragment>
        {favourites.map(favourite => {
          return (
            <div className="favourite" key={favourite._id}>
              <span>{favourite.propertyListing.title}</span>
              <button onClick={() => this.handleRemove(favourite._id)}>Remove</button>
            </div>
          );
        })}
      </Fragment>
    );
  }
};

module.exports = SavedProperties;
