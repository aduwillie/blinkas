import React from "react";
import RegistrationForm from "./RegistrationForm";
import renderer from "react-test-renderer";
import enzyme from 'enzyme';


describe("RegistrationForm component", () => {
  it("renders a snapshot", () => {
    const tree = renderer.create(<RegistrationForm />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('tests for handleChange Event', () => {
    const component = enzyme.shallow(<RegistrationForm/>)
    const instance = component.instance()
    instance.handleChange()
    expect(instance.handleChange()).toEqual("Changes made in input")
  });

  it('tests for handleSubmit Event', () => {
    const component = enzyme.shallow(<RegistrationForm/>)
    const instance = component.instance()
    instance.handleSubmit()
    expect(instance.handleSubmit()).toEqual("Submit button clicked")
  })
})
