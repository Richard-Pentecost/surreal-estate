import React from 'react';
import { shallow } from 'enzyme';
import Alert from '../../src/components/alert';

describe('alert component', () => {
  it('passes an error into the Alert components', () => {
    const error = 'Error!';
    const wrapper = shallow((
      <Alert message={error} />
    ));
    expect(wrapper.find('div').text()).toBe('Error!');
  });
  it('passes an error into the Alert components', () => {
    const success = 'Success!';
    const wrapper = shallow((
      <Alert message={success} />
    ));
    console.log(wrapper.debug());
    expect(wrapper.find('div').text()).toBe('Success!');
  });
});
