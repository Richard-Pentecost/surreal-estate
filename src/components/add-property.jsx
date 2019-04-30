import React from 'react';
import '../styles/add-property.css';

class AddProperty extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        title: '',
        type: 'Manchester',
      },
    };
  }

  handleAddProperty = (event) => {
    event.preventDefault();
    console.log(this.state.fields);
  };

  handleFieldChange = (event) => {
    console.log(event.target.name);
    console.log(event.target.value);
  };

  render() {
    return (
      <div className="addProperty">
        <form onSubmit={this.handleAddProperty}>
          <input name="title" value={this.state.fields.title} onChange={this.handleFieldChange} />
          <select name="type" value={this.state.fields.type} onChange={this.handleFieldChange}>
            <option value="flat">Flat</option>
            <option value="detached">Detached</option>
            <option value="semi-detached">Semi-Detached</option>
            <option value="terraced">Terraced</option>
            <option value="End-of-terrace">End of Terrace</option>
            <option value="cottage">Cottage</option>
            <option value="bungalow">Bungalow</option>
          </select>
          <select>
            <option value="manchester">Manchester</option>
            <option value="leeds">Leeds</option>
            <option value="sheffield">Sheffield</option>
            <option value="liverpool">Liverpool</option>
          </select>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
};

export default AddProperty;
