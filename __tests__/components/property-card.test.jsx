import React from 'react';
import { shallow } from 'enzyme';
import PropertyCard from '../../src/components/property-card';

describe('Property Card', () => {
  const props = {
    title: 'Beautiful 4 bedroom property',
    type: 'Detached house',
    bathrooms: 5,
    bedrooms: 4,
    price: 1000000,
    city: 'Manchester',
    email: 'richard@richard.com',
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallow((
      <PropertyCard
        title={props.title}
        type={props.type}
        bathrooms={props.bathrooms}
        bedrooms={props.bedrooms}
        price={props.price}
        city={props.city}
        email={props.email}
      />
    ));
  });

  it('renders a title prop', () => {
    // console.log(wrapper.debug());
    expect(wrapper.find('.property-card-title').text()).toBe('Beautiful 4 bedroom property');
  });

  it('renders a type and city prop', () => {
    expect(wrapper.find('.property-card-type').text()).toBe('Detached house - Manchester');
  });

  it('renders a bathrooms prop', () => {
    expect(wrapper.find('.property-card-bathrooms').text()).toBe('5');
  });

  it('renders a bedrooms prop', () => {
    expect(wrapper.find('.property-card-bedrooms').text()).toBe('4');
  });

  it('renders a price prop', () => {
    expect(wrapper.find('.property-card-price').text()).toBe('1000000');
  });

  it('renders a email prop', () => {
    expect(wrapper.find('.property-card-email').text()).toBe('richard@richard.com');
  });
});
