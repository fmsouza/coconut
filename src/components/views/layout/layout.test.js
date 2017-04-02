import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { Layout } from './';

it('renders without crashing', () => {
  const wrapper = shallow(<Layout />);
});
