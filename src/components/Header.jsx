import React, { useState, useEffect } from "react";
import MenuIcon from "../assets/icons/hamburger-menu.png";
import Logo from "../assets/icons/logo-transparent.png";

function Header() {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu((prevState) => !prevState);
  };

  return (
    <header className="container__header">
      <div className="container__header__primaryBar__content">
        <img
          className="container__header__primaryBar__content__menuIcon"
          src={MenuIcon}
          alt="Menu"
          onClick={handleMenu}
        />
        <h2 className="container__header__primaryBar__content__textTitle">
          Fruit <br></br> Burst
        </h2>
      </div>
      <aside
        className={
          menu
            ? "container__header__secondBar"
            : "container__header__secondBar-close"
        }
      >
        <nav className="container__header__secondBar__content">
          <img src="" alt="" />
          <div>
            <p>awsd</p>
          </div>
          <div>
            <p>awsd*2</p>
          </div>
          <h4></h4>
        </nav>
      </aside>
    </header>
  );
}

export default Header;
