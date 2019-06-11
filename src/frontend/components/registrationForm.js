import React, { Component } from "react";
import Input from "./input";
import Button from "./button";
import Select from "./Select";

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
  }
  handleChange = () => {
    console.log("Changes made in input ");
  };
  handleInputChange = () => {
    console.log("Changes made in input");
  };
  handleSubmit = () => {
    console.log("Submit button clicked");
  };
  getDays = () => {
    const days = [];
    for (let i = 1; i <= 31; i++) {
      days.push(i);
    }
    return days;
  };
  getMonths = () => {
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    return months;
  };
  getYear = () => {
    const years = [];
    const currentYear = new Date().getFullYear();
    for (let i = 1920; i <= currentYear; i++) {
      years.push(i);
    }
    return years;
  };
  render() {
    return (
      <div className="form-component">
        <div className="form-text">
          <p>Create a Free Account</p>
        </div>
        <Input
          type="text"
          name="fullname"
          value="fullname"
          placeholder="First name and Last name(s)"
          onChange={this.handleInputChange}
        />
        <Select
          name="day"
          onChange={this.handleChange}
          options={this.getDays()}
          className="days_list"
        />
        <Select
          name="month"
          onChange={this.handleChange}
          options={this.getMonths()}
          className="months_list"
        />
        <Select
          name="year"
          onChange={this.handleChange}
          options={this.getYears()}
          className="years_list"
        />
        <Input
          type="text"
          value="email"
          name="email"
          placeholder="Email"
          onChange={this.handleInputChange}
        />
        <Input
          type="text"
          value="email"
          name="password"
          placeholder="Password"
          onChange={this.handleInputChange}
        />
        <Input
          type="text"
          value="password"
          name="password"
          placeholder="Confirm Password"
          onChange={this.handleInputChange}
        />
        <Button
          className="submit-button"
          buttonText="Create Hub"
          type="button"
          onClick={this.handleSubmit}
        />
        <div className="terms-of-service">
          <p>
            By clicking "Create Hub", you agree to our
            <a href="#">Terms of Service</a>,<a href="#">Privacy Policy</a> and
            <a href="#">Cookie Policy</a>
          </p>
        </div>
      </div>
    );
  }
}

export default RegistrationForm;
