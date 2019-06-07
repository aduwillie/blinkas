import React from "react";
import RegistrationForm from "./RegistrationForm";
import renderer from "react-test-renderer";

it("renders a snapshot", () => {
  const tree = renderer.create(<RegistrationForm />).toJSON();
  expect(tree).toMatchSnapshot();
});
