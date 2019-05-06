import React from 'react';
import axios from 'axios';
import PropertyCard from './property-card';
import Alert from './alert';

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

  render() {
    const { properties, isError, alertMessage } = this.state;
    return (
      <div>
        <h1>Properties Page</h1>
        {isError && <Alert message={alertMessage} />}
        { !isError && properties.map(property => {
          return (
            <PropertyCard key={property._id} {...property} />
          );
        })}
      </div>
    );
  }
}


export default Properties;
