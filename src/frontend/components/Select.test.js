import React from 'react';
import Select from './Select';
import renderer from 'react-test-renderer';

it('renders a snapshot', () => {
  const tree = renderer.create(<Select/>).toJSON();
  expect(tree).toMatchSnapshot();
});
