import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { shallow } from 'enzyme';

it('should render without error', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toBeTruthy();
});
