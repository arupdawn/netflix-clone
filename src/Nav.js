import React from "react";
import "./Nav.css";
import { useState, useEffect } from "react";
import NetflixLogog from "./assests/netflixLogo.png";
import NetflixAvatart from "./assests/netflix-avatar.png";

function Nav() {
  const [show, handleShow] = useState(false);

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
          alt=""
        />
        <img
          className="nav__avatar"
          src={NetflixAvatart}
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
