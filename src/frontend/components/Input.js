import React from 'react';

const Input = (props) => {
    return (
    <input 
    className={inputStyle}
    type={props.type}
    id={props.id}
    name={props.name}
    value={props.value}
    onChange={props.handleChange}
    placeholder={props.placeholder}/>
    );
}

export default Input;
