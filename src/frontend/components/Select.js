import React, { Component } from 'react'
import './style.scss'

const Select =(props)=> {
   return (
         <select name ={props.name} className={props.className} onChange={props.onChange}> 
         <option>{props.defaultOption}</option>        
           {
             props.options.map((item , index)=>(
               <option key ={index} value = {item}>{item}</option>
             ))
           }
         </select>       
    )
   
}
 export default Select;
