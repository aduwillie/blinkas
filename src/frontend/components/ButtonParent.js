import React from 'react';
import Button from './Button'

export default class ButtonParent extends React.Component{
   
    onClick(){
        console.log('Button has been click')
    }

    render(){
        return(
            <Button className={"blinkas-red"} onClick={this.onClick} >
           Sign in
            </Button>
        )
    }

}