import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/sidebar.css';

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.submitSearch(this.state.searchValue);
  };

  handleChange= (event) => {
    this.setState({
      searchValue: event.target.value,
    });
  };

  render() {
    return (
      <div className="sidebar">
        <div className="search-form">
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="search" onChange={this.handleChange} value={this.state.searchValue} placeholder="Search" />
            <button type="submit">Search</button>
          </form>
        </div>
        <ul className="city-filter">
          <li className="list-title">Filter by City</li>
          <li><Link to={this.props.query('query', { city: 'Leeds' })}>Leeds</Link></li>
          <li><Link to={this.props.query('query', { city: 'Liverpool' })}>Liverpool</Link></li>
          <li><Link to={this.props.query('query', { city: 'Manchester' })}>Manchester</Link></li>
          <li><Link to={this.props.query('query', { city: 'Sheffield' })}>Sheffield</Link></li>
        </ul>
        <ul className="sort-by-price">
          <li className="list-title">Sort by</li>
          <li><Link to={this.props.query('sort', { price: 1 })}>Price Ascending</Link></li>
          <li><Link to={this.props.query('sort', { price: -1 })}>Price Descending</Link></li>
        </ul>
      </div>
    );
  }
};

export default SideBar;
