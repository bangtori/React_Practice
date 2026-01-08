import React from "react";
import LOGO from "../assets/quiz-logo.png";
function Header() {
  return (
    <header>
      <img src={LOGO} alt="Quiz Logo image" />
      <h1>REACTQUIZ</h1>
    </header>
  );
}

export default Header;
