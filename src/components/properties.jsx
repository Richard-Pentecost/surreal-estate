import React from 'react';
import axios from 'axios';
import PropertyCard from './property-card';
import Alert from './alert';
import SideBar from './sidebar';
import '../styles/properties.css';
import qs from 'qs';

const URL = 'http://localhost:3000/api/v1';

class Properties extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: [],
      isError: false,
      alertMessage: '',
    };
  }

  componentDidMount() {
    axios.get(`${URL}/PropertyListing`)
      .then(({ data: properties }) => {
        this.setState({
          properties,
        });
      })
      .catch(() => {
        this.setState({
          isError: true,
          alertMessage: 'Server error, please try again',
        });
      });
  }

  componentDidUpdate(prevProps) {
    const { search } = this.props.location;
    if (prevProps.location.search !== search) {
      axios.get(`${URL}/PropertyListing${search}`)
        .then(({ data: properties }) => {
          this.setState({ properties });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  handleSearch = (searchValue) => {
    const url = this.buildQueryString('query', { title: { $regex: searchValue } });
    this.props.history.push(url);
  };

  buildQueryString = (operation, valueObj) => {
    const { search } = this.props.location;
    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });
    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify({
        ...JSON.parse(currentQueryParams[operation] || '{}'),
        ...valueObj,
      }),
    };
    return qs.stringify(newQueryParams, { addQueryPrefix: true, encode: false });
  };

  handleSaveProperty = (propertyID) => {
    console.log(propertyID);
    // axios.post(`${URL}/Favourite`, {
    //   _id: propertyID,
    //   propertyListing: propertyID,
    //   fbUserID: propertyID,
    // })
  }

  render() {
    const { properties, isError, alertMessage } = this.state;
    return (
      <div className="properties-page">
        <SideBar query={this.buildQueryString} submitSearch={this.handleSearch} />
        <div className="properties-details">
          {isError && <Alert message={alertMessage} />}
          { !isError && properties.map(property => {
            return (
              <PropertyCard
                key={property._id}
                {...property}
                userID={this.props.userID}
                onSaveProperty={this.handleSaveProperty}
              />
            );
          })}
        </div>
      </div>
    );
  }
}


export default Properties;
