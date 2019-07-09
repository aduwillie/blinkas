import React, { Component } from 'react'
import Input from './Input'
import Button from './Button'
import './../public/css/login.scss'

export default class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {email: '', password:''};    
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword= this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      
      handleChangeEmail(event) {
        this.setState({email: event.target.value});
      }
      handleChangePassword(event) {
        this.setState({password: event.target.value});
      }    
      handleSubmit(event) {      
        event.preventDefault();
        console.log(this.state);        
      }
    render() {
        return (
            <div className="login">
                <form className="formlogin" onSubmit={this.handleSubmit}>
                    <ul className="login-detail">
                        <li style={{display:'inline-block'}}>
                            <Input   type="email" value={this.state.email} handleChange={this.handleChangeEmail} name="email"  placeholder="Email" />
                        </li>
                        <li>
                            <Input   type="password" value={this.state.password} handleChange={this.handleChangePassword} name="password" placeholder="Password"/>
                        </li>
                        <li>
                           <Button  type="submit"   buttonText="SignIn"/>
                        </li>
                    </ul>
                    <div className="login2">
                           <div className="checkbox">
                               <Input type="checkbox" className="" checked="checked" name="remember" id="" />
                               <span>Keep me in</span>
                           </div>
                                <div className="password-help">
                                    <i className="fa fa-question-circle"></i>
                                    <a href="#">   Passeword help </a>
                                </div>
                    </div>
                </form>
            </div>
        )
    }
}
