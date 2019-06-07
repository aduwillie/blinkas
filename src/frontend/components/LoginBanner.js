import React, { Component } from 'react';
import loginBanner from './loginBanner'
import Login from './../components/Login'


class LoginBanner extends Component {
    
    render() {
        return (
         <div style={loginBanner}>
            <div style={bannerName}>Blinkas</div>
            <div>
                <Login/>
            </div>
        </div>
        );
    }

}
export default LoginBanner;

   

