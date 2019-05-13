import React from 'react';
import axios from 'axios';
import PropertyCard from './property-card';
import Alert from './alert';
import SideBar from './sidebar';
import '../styles/properties.css';

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

  render() {
    const { properties, isError, alertMessage } = this.state;
    return (
      <div className="properties-page">
        <SideBar />
        <div className="properties-details">
          {isError && <Alert message={alertMessage} />}
          { !isError && properties.map(property => {
            return (
              <PropertyCard key={property._id} {...property} />
            );
          })}
        </div>
      </div>
    );
  }
}


export default Properties;
