import React from 'react';
import inputStyle from './InputStyle'

const Input = (props) => {
    return (
    <input 
    style={inputStyle}
    type={props.type}
    id={props.id}
    name={props.name}
    value={props.value}
    onChange={props.handleInputChange}
    placeholder={props.placeholder}/>
    );
}

export default Input;
