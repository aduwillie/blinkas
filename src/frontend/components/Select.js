import React, { Component } from 'react'
import './style.scss'
const Select =(props)=> {
   return (
         <select name ={props.name} className="blinkas-black" onChange={props.onChange}>
           {
             props.options.map((item , index)=>(
               <option key ={index} value = {item}>{item}</option>
             ))
           }
         </select> 
      
    )
   
}
 export default Select;
 