import React from 'react';
import { matches } from './test-utils';
import Button from './Button';

describe('Button', () => {
  it('matches snapshot', () => {
    matches(<Button/>);
  });
});
it('calls "onClick" prop on button click', () => {
  const onClick = jest.fn();
   matches(<Button onClick={onClick} />);
  expect(onClick).toHaveBeenCalled();
});
