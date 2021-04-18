import React from "react";
import "./Nav.css";
import { useState, useEffect } from "react";
import NetflixLogog from "./assests/netflixLogo.png";
import NetflixAvatart from "./assests/netflix-avatar.png";
import { useHistory } from "react-router";

function Nav() {
  const [show, handleShow] = useState(false);
  const history = useHistory();

  const transitionNavBar = () => {
    if (window.scrollY > 400) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
      window.addEventListener("scroll",transitionNavBar);
      return () => window.removeEventListener("scroll",transitionNavBar);
  }, [])

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          className="nav__logo"
          src={NetflixLogog}
          alt="NFlogo"
          onClick={()=>{history.push("/")}}
        />
        <img
          className="nav__avatar"
          src={NetflixAvatart}
          alt="NFAvatar"
          onClick={()=>{history.push("/profile")}}
        />
      </div>
    </div>
  );
}

export default Nav;
