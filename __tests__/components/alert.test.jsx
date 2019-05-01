import React from 'react';
import { shallow } from 'enzyme';
import Alert from '../../src/components/alert';

describe('alert component', () => {
  it('renders an error message', () => {
    const error = 'Error!';
    const wrapper = shallow((
      <Alert message={error} />
    ));
    expect(wrapper.find('.Alert').text()).toBe('Error!');
  });
  it('renders a success message', () => {
    const success = 'Success!';
    const wrapper = shallow((
      <Alert message={success} success />
    ));
    console.log(wrapper.debug());
    expect(wrapper.find('.Alert.success').text()).toBe('Success!');
  });
});
