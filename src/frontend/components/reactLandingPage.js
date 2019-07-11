import React from "react";
import LoginComponent from "./LoginComponent";
import RegistrationForm from "./RegistrationForm";
import PopularMenus from "./PopularMenu";
import LoginBanner from "./LoginBanner";
import './../public/css/landing.scss'

const ReactLandingPage = () => {
  return (
    <div className="container">
      <header>
        <h1 className="text-white float-left">Blinkas</h1>
        <div className="float-right">
        <LoginComponent />
        </div>
        
      </header>
      <main className="bg-secondary">
        <section id="login_container ">
          <LoginBanner />
        </section>
        
        <section className="img-section float-left">
        <h4>Web <span>Organizer</span></h4>
        <div className="text_underline">
                <span></span>
                <span></span>
                <span></span>
            </div>            
        <img src="./../public/img/sign_image.png"/>
        </section>
        <section id="registration_container" className="float-right">
          <div id='signup-box'>
          <RegistrationForm />
          </div>
         
        </section>
        <section id="menu_container">
        <h4>Our Popular <span>Menus</span></h4>
          <PopularMenus />
        </section>
      </main>
      <footer className="text-secondary ">

      </footer>
    </div>
  );
};

export default ReactLandingPage;
