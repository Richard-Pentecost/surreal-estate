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
      .then(() => {
        this.setState({
          alertMessage: 'Property Added',
          isSuccess: true,
        });
      })
      .catch(() => {
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
    const {
      fields,
      isSuccess,
      isError,
      alertMessage,
    } = this.state;

    return (
      <div className="addProperty">
        {isSuccess && <Alert message={alertMessage} success />}
        {isError && <Alert message={alertMessage} />}
        <form className="addPropertyForm" onSubmit={this.handleAddProperty}>
          <div className="fieldContainer">
            <label className="field">Property Description</label>
            <input type="text" name="title" value={fields.title} onChange={this.handleFieldChange} />
          </div>
          <div className="fieldContainer">
            <label className="field">Type</label>
            <select name="type" value={fields.type} onChange={this.handleFieldChange}>
              <option value="Flat">Flat</option>
              <option value="Detached">Detached</option>
              <option value="Semi-detached">Semi-Detached</option>
              <option value="Terraced">Terraced</option>
              <option value="End-of-terrace">End of Terrace</option>
              <option value="Cottage">Cottage</option>
              <option value="Bungalow">Bungalow</option>
            </select>
          </div>
          <div className="fieldContainer">
            <label className="field">Bedrooms</label>
            <input type="number" name="bedrooms" value={fields.bedrooms} onChange={this.handleFieldChange} />
          </div>
          <div className="fieldContainer">
            <label className="field">Bathrooms</label>
            <input type="number" name="bathrooms" value={fields.bathrooms} onChange={this.handleFieldChange} />
          </div>
          <div className="fieldContainer">
            <label className="field">Price</label>
            <input type="number" step="1" name="price" value={fields.price} onChange={this.handleFieldChange} />
          </div>
          <div className="fieldContainer">
            <label className="field">City</label>
            <select name="city" value={fields.city} onChange={this.handleFieldChange}>
              <option value="Manchester">Manchester</option>
              <option value="Leeds">Leeds</option>
              <option value="Sheffield">Sheffield</option>
              <option value="Liverpool">Liverpool</option>
            </select>
          </div>
          <div className="fieldContainer">
            <label className="field">Email</label>
            <input type="email" name="email" value={fields.email} onChange={this.handleFieldChange} />
          </div>
          <button className="submitButton" type="submit">Add</button>
        </form>
      </div>
    );
  }
};

export default AddProperty;
