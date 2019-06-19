import React, { Component } from "react";
import Input from "./input";
import Button from "./button";
import Select from "./Select";


class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.period = {
      days: [],
      months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      years: []
    };
  }
  handleChange = ()=> {
    return "Changes made in input ";
  };
  handleSubmit = ()=> {
    return "Submit button clicked";
  };
  getDays = ()=>{
    for(let i=1; i<=31; i++){
      this.period.days.push(i)
    }
    return this.period.days;
  };
  getMonths = ()=>{
    return [...this.period.months];
  };
  getYears = ()=>{
    let currentYear = new Date().getFullYear();
    for(let i = currentYear; i>=1920; i--){
      this.period.years.push(i)
    }
    return this.period.years;
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
          onChange={this.handleChange}
        />
        <Select
          defaultOption = 'Day'
          name="day"
          onChange={this.handleChange}
          options={this.getDays()}
          className="days_list"
        />
        <Select
          defaultOption = 'Month'
          name="month"
          onChange={this.handleChange}
          options={this.getMonths()}
          className="months_list"
        />
        <Select
          defaultOption = 'Year'
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
          onChange={this.handleChange}
        />
        <Input
          type="text"
          value="email"
          name="password"
          placeholder="Password"
          onChange={this.handleChange}
        />
        <Input
          type="text"
          value="password"
          name="password"
          placeholder="Confirm Password"
          onChange={this.handleChange}
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
