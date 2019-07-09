import React, { Component } from 'react';
import Login from './LoginComponent'

class LoginBanner extends Component {
    render() {
        return (
        <div className="loginBanner">
            <div className="bannerName">Blinkas</div>
            <div><Login/></div>
        </div>
        );
    }
}

export default LoginBanner;  
