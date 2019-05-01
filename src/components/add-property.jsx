import React from 'react';
import '../styles/add-property.css';
import axios from 'axios';
import Alert from './alert';

const URL = 'http://localhost:3000/api/v1';

class AddProperty extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        title: '',
        type: 'Flat',
        bedrooms: '',
        bathrooms: '',
        price: '',
        city: 'Manchester',
        email: '',
      },
      alertMessage: '',
      isSuccess: false,
      isError: false,
    };
  }

  handleAddProperty = (event) => {
    event.preventDefault();
    this.setState({
      alertMessage: '',
      isSuccess: false,
      isError: false,
    });
    const { fields } = this.state;
    axios.post(`${URL}/PropertyListing/`, {
      title: fields.title,
      type: fields.type,
      bedrooms: fields.bedrooms,
      bathrooms: fields.bathrooms,
      price: fields.price,
      city: fields.city,
      email: fields.email,
    })
      .then(response => {
        console.log(response);
        this.setState({
          alertMessage: 'Property Added',
          isSuccess: true,
        });
      })
      .catch(error => {
        console.log(error, 'from error');
        this.setState({
          alertMessage: 'Server error, please try again',
          isError: true,
        });
      });
  };

  handleFieldChange = (event) => {
    this.setState({
      fields: {
        ...this.state.fields,
        [event.target.name]: event.target.value,
      },
    });
  };

  render() {
    const { fields, isSuccess, isError, alertMessage } = this.state;
    return (
      <div className="addProperty">
        {isSuccess && <Alert message={alertMessage} />}
        {isError && <Alert message={alertMessage} />}
        <form className="addPropertyForm" onSubmit={this.handleAddProperty}>
          <label>Description:</label>
          <input type="text" name="title" value={fields.title} onChange={this.handleFieldChange} placeholder="description" />
          <label>Type:</label>
          <select name="type" value={fields.type} onChange={this.handleFieldChange}>
            <option value="Flat">Flat</option>
            <option value="Detached">Detached</option>
            <option value="Semi-detached">Semi-Detached</option>
            <option value="Rerraced">Terraced</option>
            <option value="End-of-terrace">End of Terrace</option>
            <option value="Cottage">Cottage</option>
            <option value="Bungalow">Bungalow</option>
          </select>
          <label>Bedrooms:</label>
          <input type="number" name="bedrooms" value={fields.bedrooms} onChange={this.handleFieldChange} placeholder="No. of bedrooms" />
          <label>Bathrooms:</label>
          <input type="number" name="bathrooms" value={fields.bathrooms} onChange={this.handleFieldChange} placeholder="No. of bathrooms" />
          <label>Price:</label>
          <input type="number" name="price" value={fields.price} onChange={this.handleFieldChange} placeholder="Price" />
          <label>email:</label>
          <input type="string" name="email" value={fields.email} onChange={this.handleFieldChange} placeholder="Email" />
          <label>City</label>
          <select name="city" value={fields.city} onChange={this.handleFieldChange}>
            <option value="Manchester">Manchester</option>
            <option value="Leeds">Leeds</option>
            <option value="Sheffield">Sheffield</option>
            <option value="Liverpool">Liverpool</option>
          </select>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
};

export default AddProperty;
