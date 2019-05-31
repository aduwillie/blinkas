import React, { Component } from 'react'
import './style.scss'
export default class Select extends Component {
   
    onChange = e => {
        console.log("selected value:", e.target.value);
    };
    getDropMonthList =()=>{
        var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
       return (
            month.map((months,index) => (
                <option key={index} value={months}>{months}</option>
            ))
       )
        
    }
    getDropList = () => {
        let newDate = new Date()
        let date = newDate.getDate();
      return (
          Array.from( new Array(31), (v,i) =>
            <option key={i} value={date-i}>{date-i}</option>
        )
      );
    };
    getYearDropList = () => {
        const year = new Date().getFullYear();
      return (
          Array.from( new Array(80), (v,i) =>
            <option key={i} value={year-i}>{year-i}</option>
        )
      );
    };
      
      render() {

        return(
            <div>
                <form>
                <select className="blinkas-black" onChange={this.onChange}>
              {this.getDropList()}
            </select>
            
            <select className="blinkas-black" onChange={this.onChange}>
                 {this.getDropMonthList()}
            </select>
            <select className="blinkas-black" onChange={this.onChange}>
              {this.getYearDropList()}
            </select>
            </form>
          </div>
        );
      }
   
}
