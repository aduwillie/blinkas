import React from "react";
import LoginComponent from './LoginComponent'
import renderer from "react-test-renderer";
import enzyme from 'enzyme';


describe("<LoginComponent />", () => {
    it("renders text input correctly", () => {
      const tree = renderer.create(<LoginComponent />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  
    it("calls onLogin when button clicked", () => {
      const onSubmitMock = jest.fn();
  
      const component = enzyme.mount(
      <LoginComponent onSubmit={onSubmitMock} />
      );
  
      component.find("Input.email").simulate('change', { target: { value: 'email' } })
      component.find("Input.password").simulate('change', { target: { value: 'password' } })
      component.find("form").simulate("submit");
  
      console.log("onClickMock.mock", onSubmitMock.mock)
      expect(onSubmitMock).toBeCalled()
    });
  });

  