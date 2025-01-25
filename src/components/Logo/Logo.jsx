import React from "react";

import Pokemon from "../../Assets/img/pokemon.png";
import Clicker from "../../Assets/img/clicker.png";

function Logo() {
  return (
    <div className="logo">
      <img className="pokemon" src={Pokemon} alt="pokemon" />

      <div className="border-img" />

      <img className="clicker" src={Clicker} alt="clicker" />
    </div>
  );
}

export default Logo;
