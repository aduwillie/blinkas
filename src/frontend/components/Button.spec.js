import React from 'react';
import { matches } from './test-utils';
import Button from './Button';

describe('Button', () => {
  it('matches snapshot', () => {
    matches(<Button/>);
  });
});
it('calls "onClick" prop on button click', () => {
  const mockfn = jest.fn();
   matches(<Button onClick={mockfn} />);
  expect(mockfn).toHaveBeenCalled();
});
