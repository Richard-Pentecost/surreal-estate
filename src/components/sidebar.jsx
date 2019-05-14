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
        <div className="city-filter">
          Filter by City
          <Link to={this.props.query('query', { city: 'Leeds' })}>Leeds</Link>
          <Link to={this.props.query('query', { city: 'Liverpool' })}>Liverpool</Link>
          <Link to={this.props.query('query', { city: 'Manchester' })}>Manchester</Link>
          <Link to={this.props.query('query', { city: 'Sheffield' })}>Sheffield</Link>
        </div>
        <div className="sort-by-price">
          Sort by
          <Link to={this.props.query('sort', { price: 1 })}>Price Ascending</Link>
          <Link to={this.props.query('sort', { price: -1 })}>Price Descending</Link>
        </div>
      </div>
    );
  }
};

export default SideBar;
