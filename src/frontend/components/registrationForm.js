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
    const days = ["Day"];
    let newDate = new Date();
    let date = newDate.getDate();
    Array.from(new Array(31), (v, i) => (
      days.push(date)
    ));
    return days
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
    return  months
  };
  getYears = () => {
    const years = ["Year"];
    const year = new Date().getFullYear();
     Array.from(new Array(80), (v, i) => (
      years.push(year - i)
    ));
    return years
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

        <Select name="day" onChange={this.handleChange} options = {this.getDays}/> 
        <Select name="month" onChange={this.handleChange} options = {this.getMonths}/>
        <Select name="year" onChange={this.handleChange} options = {this.getYears}/>
          
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
