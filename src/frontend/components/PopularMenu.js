import React, { Component } from 'react'
import './style.scss'
    
    
        const PopularMenus =[
            {
                id: 1,
                title: "News",
                name:"Organizer",
                img: "img/signup_news.png",
                
              },
            {
                id: 2,
                title: "Software",
                name:"Organizer",
                img: "img/signup_software.png",
                
              },
              {
                id: 3,
                title: "Video/Movie",
                name:"Organizer",
                img: "img/signup_movie_video.png",
                
              },
              {
                id: 4,
                title: "Learning",
                name:"Organizer",
                img: "img/signup_learning.png",
                
              },
              {
                id: 5,
                title: "Reading",
                name:"Organizer",
                img: "img/signup_reading.png",
                
              },
              {
                id: 6,
                title: "Entertainment",
                name:"Organizer",
                img: "img/signup_entertainment.png",
                
              },
              {
                id: 7,
                title: "Office & Project",
                name:"Organizer",
                img: "img/signup_office_projects.png",
                
              },
        ]
        const Menus = () => (
          <div className="popularMenus">
            <ul>
              {PopularMenus.map(item => (
                <li key={item.id}>
                  <div>
                  <img src={item.img}  />
                  </div>
                  <div>
                        <span>{item.title}</span><br></br>
                        <span>{item.name}</span>
                        </div>
                  
                </li>
              ))}
            </ul>
            </div>
        )
    export default Menus;
