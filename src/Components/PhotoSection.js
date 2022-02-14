import React from "react";
import ProfiePic from "../imgs/profile.jpg";

export default function PhotoSection() {
  return (
    <div className="top__section">
      <div className="profile__pic">
        <img src={ProfiePic} alt="profile" />
      </div>
      <div className="profile__info">
        <h2 className="name">Henna Manchester</h2>
        <div className="work">Web Developer</div>
        <div className="website">hennaManchester.website</div>
        <div className="top-social">
          <div>
            <i className="fa-solid fa-envelope"></i>
            <p> Email</p>
          </div>
          <div>
            <i className="fab fa-linkedin-in"></i>
            <p>Linkedin</p>
          </div>
        </div>
      </div>
    </div>
  );
}
