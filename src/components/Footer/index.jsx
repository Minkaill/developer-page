import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.inicials}>
        <p>Хаджиев Минкаил</p>
        <span>(с) 2022. Все права защищены.</span>
      </div>

      <div className={styles.logos__bar}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/5968/5968776.png"
          alt=""
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/5968/5968756.png"
          alt=""
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/5968/5968835.png"
          alt=""
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/5968/5968789.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Footer;
