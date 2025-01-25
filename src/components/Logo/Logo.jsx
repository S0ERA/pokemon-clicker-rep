import React from "react";

import Pokemon from "../../Assets/img/pokemon.png";
import Clicker from "../../Assets/img/clicker.png";

import styles from "./Logo.module.scss";

function Logo() {
  return (
    <div className={styles.logo}>
      <img className={styles.pokemon} src={Pokemon} alt="pokemon" />

      <div className={styles.borderImg} />

      <img className={styles.clicker} src={Clicker} alt="clicker" />
    </div>
  );
}

export default Logo;
