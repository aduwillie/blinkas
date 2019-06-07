import React, { Component } from "react";
import Input from "./input";
import Button from "./button";
import Select from "./Select";

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleChange = () => {
    console.log("Changes made in input ");
  };
  getDays = () => {
    let newDate = new Date();
    let date = newDate.getDate();
    return Array.from(new Array(31), (v, i) => (
      <option key={i} value={date + i}>
        {date + i}
      </option>
    ));
  };
  getMonths = () => {
    var months = [
      "month",
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
    return months.map((months, index) => (
      <option key={index} value={months}>
        {months}
      </option>
    ));
  };
  getYears = () => {
    const year = new Date().getFullYear();
    return Array.from(new Array(80), (v, i) => (
      <option key={i} value={year - i}>
        {year - i}
      </option>
    ));
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
          placeholder="First name and Last name(s)"
          onChange={this.handleChange}
        />

        <Select name="day" onChange={this.handleChange}>
          {" "}
          {this.getDays()}
        </Select>
        <Select name="month" onChange={this.handleChange}>
          {" "}
          {this.getMonths()}
        </Select>

        <Select name="year" onChange={this.handleChange}>
          {this.getYears()}
        </Select>
        <Input
          type="text"
          name="email"
          placeholder="Email"
          onChange={this.handleChange}
        />
        <Input
          type="text"
          name="password"
          placeholder="Password"
          onChange={this.handleChange}
        />
        <Input
          type="text"
          name="password"
          placeholder="Confirm Password"
          onChange={this.handleChange}
        />
        <Button
          className="submit-button"
          buttonText="Create Hub"
          type="button"
        />
        <div className="terms-of-service">
          <p>
            By clicking "Create Hub", you agree to our{" "}
            <a href="http://blinkas.azurewebsites.net/#">Terms of Service</a>,{" "}
            <a href="http://blinkas.azurewebsites.net/#">Privacy Policy</a> and{" "}
            <a href="http://blinkas.azurewebsites.net/#">Cookie Policy</a>
          </p>
        </div>
      </div>
    );
  }
}

export default RegistrationForm;
