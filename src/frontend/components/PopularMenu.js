import React, { Component } from 'react'
import News from './News'
import Software from './Software'
import Office from './Office'
import Reading from './Reading'
import Video from './Video'
import Entertainment from './Entertainment'
import Learning from './Learning'
import './style.scss'

export default class PopularMenu extends Component {
    render() {
        return (
            <div>
               <div className="popularMenus" >
                    <ul >
                        <li >
                            <News/>
                        </li>
                        <li >
                            <Software/>
                        </li>
                        <li >
                        <Video/>
                        </li>                
                        <li >
                            <Reading/>
                        </li>
                        <li >
                            <Learning/>                    
                        </li>
                        <li >
                            <Entertainment/>
                        </li>
                        <li >
                            <Office/>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
