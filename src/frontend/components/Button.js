import React, { Component } from 'react'

export default class Button extends Component {
  constructor(props){
    super(props)
  }
  onClick=()=>{
    console.log('I have been clicked');    
  }
  render() {
    return (
      <div>
        <button className={this.props.className} onClick={this.props.onClick}>{this.props.buttonText}</button>         
      </div>
    )
  }
}
