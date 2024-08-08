import React from "react";
import logoAnimation from "../assets/videos/animated-logo.mp4";
import "../styles/firstScreen.css";

function FirstScreen() {
  return (
    <div className="container_firstScreen">
      <video
        className="container_firstScreen__video"
        src={logoAnimation}
        autoPlay
        muted
      ></video>
    </div>
  );
}

export default FirstScreen;
