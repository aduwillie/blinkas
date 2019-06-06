import React, { Component } from 'react'

export default class PopularMenu extends Component {
    render() {
        return (
            <div>
                <div className="popularMenus" style={{background:'#ffffff',}}>
     <ul style={{margin: '0',padding:'0',  listStyleType: 'none'}}>
                <li style={{display: 'inline-block',verticalAlign: 'top', width: '14%', textAlign: 'center'}}>
                    <div>
                    <img src="./img/signup_news.png" style={{marginBottom: '5px', width: '24px', height: '24px'}}/>
                    </div>
                    <div><span>News</span><br></br>
                        <span>Organizer</span>
                    </div>
                </li>
                <li style={{display: 'inline-block',verticalAlign: 'top', width: '14%', textAlign: 'center'}}>
                    <div>
                      <img src="./img/signup_software.png" style={{marginBottom: '5px', width: '24px', height: '24px'}}/>
                    </div>
                      <div><span>Software</span>
                      <br></br>
                      <span>Organizer</span>
                    </div>
                </li>
                <li style={{display: 'inline-block',verticalAlign: 'top', width: '14%', textAlign: 'center'}}>
                    <div>
                      <img src="./img/signup_movie_video.png" style={{marginBottom: '5px', width: '24px', height: '24px'}}/>
                    </div>
                      <div><span>Video/Movie</span><br></br>
                      <span>Organizer</span>
                    </div>
                </li>
                <li style={{display: 'inline-block',verticalAlign: 'top', width: '14%', textAlign: 'center'}}>
                    <div>
                      <img src="./img/signup_reading.png" style={{marginBottom: '5px', width: '24px', height: '24px'}}/>
                    </div>
                    <div>
                      <span>Reading</span><br></br>
                      <span>Organizer</span>
                      </div>
                </li>
                <li style={{display: 'inline-block',verticalAlign: 'top', width: '14%', textAlign: 'center'}}>
                    <div>
                      <img src="./img/signup_learning.png" style={{marginBottom: '5px', width: '24px', height: '24px'}}/>
                    </div>
                    <div>
                      <span>Learning</span><br></br>
                      <span>Organizer</span>
                      </div>
                </li>
                <li style={{display: 'inline-block',verticalAlign: 'top', width: '14%', textAlign: 'center'}}>
                    <div>
                    <img src="./img/signup_entertainment.png" style={{marginBottom: '5px', width: '24px', height: '24px'}}/>
                    </div>
                    <div>
                      <span>Entertainment</span><br></br>
                      <span>Organizer</span>
                      </div>
                </li>
                <li style={{display: 'inline-block',verticalAlign: 'top', width: '14%', textAlign: 'center'}}>
                    <div>
                    <img src="./img/signup_office_projects.png" style={{marginBottom: '5px', width: '24px', height: '24px'}}/>
                    </div>
                    <div>
                      <span>Office &amp; Projects</span><br></br>
                      <span>Organizer</span>
                      </div>
                </li>
            </ul>
            </div>
            </div>
        )
    }
}
