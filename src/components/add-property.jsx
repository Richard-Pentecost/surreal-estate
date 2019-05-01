import React from 'react';
import '../styles/add-property.css';
import axios from 'axios';

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
    };
  }

  handleAddProperty = (event) => {
    event.preventDefault();
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
      })
      .catch(error => {
        console.log(error, 'from error');
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
    return (
      <div className="addProperty">
        <form className="addPropertyForm" onSubmit={this.handleAddProperty}>
          <label>Title:</label>
          <input type="text" name="title" value={this.state.fields.title} onChange={this.handleFieldChange} placeholder="description" />
          <label>Type:</label>
          <select name="type" value={this.state.fields.type} onChange={this.handleFieldChange}>
            <option value="Flat">Flat</option>
            <option value="Detached">Detached</option>
            <option value="Semi-detached">Semi-Detached</option>
            <option value="Rerraced">Terraced</option>
            <option value="End-of-terrace">End of Terrace</option>
            <option value="Cottage">Cottage</option>
            <option value="Bungalow">Bungalow</option>
          </select>
          <label>Bedrooms:</label>
          <input type="number" name="bedrooms" value={this.state.fields.bedrooms} onChange={this.handleFieldChange} placeholder="No. of bedrooms" />
          <label>Bathrooms:</label>
          <input type="number" name="bathrooms" value={this.state.fields.bathrooms} onChange={this.handleFieldChange} placeholder="No. of bathrooms" />
          <label>Price:</label>
          <input type="number" name="price" value={this.state.fields.price} onChange={this.handleFieldChange} placeholder="Price" />
          <label>email:</label>
          <input type="string" name="email" value={this.state.fields.email} onChange={this.handleFieldChange} placeholder="Email" />
          <label>City</label>
          <select name="city" value={this.state.fields.city} onChange={this.handleFieldChange}>
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
