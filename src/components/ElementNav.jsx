import React from "react";
import HomeIcon from "../assets/icons/home.svg";
import ReservationIcon from "../assets/icons/menu.svg";
import UbicationIcon from "../assets/icons/ubication.svg";
import "../styles/elementLi.css";

function ElementNav({ img, text }) {
  return (
    <div className="elementLi">
      <img className="elementLi_img" src={img} alt="element image" />
      <p className="elementLi_paragraph">
        <a href="">{text}</a>
      </p>
    </div>
  );
}

export default ElementNav;
