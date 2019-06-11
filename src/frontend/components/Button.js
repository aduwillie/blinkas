const React = require('react')

const Button = (props) => {
  const onClick=()=>{
    console.log('I have been clicked');
    
  }
  return (
   <button className={props.className} onClick={props.onClick}> {props.buttonText} </button> 
 )}
 export default Button; 
