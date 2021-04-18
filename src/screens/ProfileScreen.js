import React from "react";
import Nav from "../Nav";
import "./ProfileScreen.css";
import Avatar from "../assests/netflix-avatar.png";
import { selectUser } from "../features/userSlice";
import { useSelector } from "react-redux";
import { auth } from "../firebase";
import { useHistory } from "react-router";

function ProfileScreen() {
  const user = useSelector(selectUser);
  const history = useHistory();
  return (
    <div className="profileSCreen">
      <Nav />

      <div className="profileScreen__body">
        <h1>Edit Profile</h1>

        <div className="profileScreen__info">
          <img src={Avatar} alt="NF Avatar" />

          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
                <h3>Plans</h3>
                <p></p>
              <button
                onClick={() => {
                    history.push("/");
                    auth.signOut()
                }}
                className="profileScreen__signOut"
              >Sign Out</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
