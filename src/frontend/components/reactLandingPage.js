import React from "react";
import LoginComponent from "./LoginComponent";
import RegistrationForm from "./RegistrationForm";
import PopularMenus from "./PopularMenu";
import LoginBanner from "./LoginBanner";

const ReactLandingPage = () => {
  return (
    <div className="container">
      <header>
        <h1>Blinkas</h1>
        <LoginComponent />
      </header>
      <main>
        <section id="login_container">
          <LoginBanner />
        </section>
        <section id="registration_container">
          <RegistrationForm />
        </section>
        <section id="menu_container">
          <PopularMenus />
        </section>
      </main>
    </div>
  );
};

export default ReactLandingPage;
