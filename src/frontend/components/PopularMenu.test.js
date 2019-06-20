import React from 'react';
import PopularMenu from './PopularMenu';
import renderer from 'react-test-renderer';

it('renders a snapshot', () => {
  const tree = renderer.create(<PopularMenu/>).toJSON();
  expect(tree).toMatchSnapshot();
});
