import React, { useState } from "react";
import "./LoginScreen.css";
import NetflixLogo from "../assests/netflixLogo.png";
import SignupScreen from "./SignupScreen";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  
  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img src={NetflixLogo} alt="" className="loginScreen__logo" onClick={()=>setSignIn(false)}/>
        <button className="loginScreen__signin" onClick={()=>setSignIn(true)}>
                Sign In
        </button>

        <div className="loginScreen__gradient" />
      </div>
      
      <div className="loginScreen__body">
          {signIn ? (<SignupScreen/>) : (
              <>
              <h1>Unlimited movies, TV shows and more.</h1>
              <h2>Watch anywhere. Cancel anytime.</h2>
              <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
  
              <div className="loginScreen__input">
                  <form className="loginScreen__form">
                      <input type="email" placeholder="Email Address"/>
                      <button className="loginScreen__getStarted" onClick={()=>setSignIn(true)}>
                          Get Started {'>'} 
                      </button>
                  </form>
              </div>
              </>
          )}
            
      </div>
    </div>
  );
}

export default LoginScreen;
