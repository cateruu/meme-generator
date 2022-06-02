import React from "react";
import Logo from "../images/troll-face.png";

const Header = () => {
  return (
    <header className="header">
      <img src={Logo} alt="troll face logo" className="header__logo" />
      <h2 className="header__text">Meme Generator</h2>
    </header>
  );
}

export default Header;