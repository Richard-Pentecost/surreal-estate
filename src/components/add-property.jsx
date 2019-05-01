import React from 'react';
import '../styles/add-property.css';

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
    console.log(this.state.fields);
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
          <input type="text" name="title" value={this.state.fields.title} onChange={this.handleFieldChange} />
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
          <input type="number" name="bedrooms" value={this.state.fields.bedrooms} onChange={this.handleFieldChange} />
          <label>Bathrooms:</label>
          <input type="number" name="bathrooms" value={this.state.fields.bathrooms} onChange={this.handleFieldChange} />
          <label>Price:</label>
          <input type="text" name="price" value={this.state.fields.price} onChange={this.handleFieldChange} />
          <label>email:</label>
          <input type="email" name="email" value={this.state.fields.email} onChange={this.handleFieldChange} />
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
