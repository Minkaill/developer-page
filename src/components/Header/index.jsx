import React from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./Header.module.scss";

const Header = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={styles.header}>
      <div
        data-aos="fade-right"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="500"
        className={styles.logo}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/5047/5047314.png"
          alt=""
        />
      </div>

      <div
        data-aos="fade-left"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="500"
        className={styles.navbar}
      >
        <Link to="/">ГЛАВНАЯ</Link>
        <Link to="/">ОБ АВТОРЕ</Link>
        <Link to="/">РАБОТЫ</Link>
        <Link to="/">ПРОЦЕСС</Link>
        <Link to="/">КОНТАКТЫ</Link>
      </div>
    </div>
  );
};

export default Header;
