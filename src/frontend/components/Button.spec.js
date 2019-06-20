import React from 'react';
import { matches } from './test-utils';
import Button from './Button';
import { shallow } from "enzyme";

describe('Button', () => {
  it('matches snapshot', () => {
    matches(<Button/>);
  });
});
test('should call start logout on button click', () => {
  const onClickMock = jest.fn();
  const wrapper = shallow(<Button onCLick={onClickMock}/>);
  wrapper.find('button').simulate('click');
  expect(onClickMock).toHaveBeenCalled();
});
