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
      <div data-aos="fade-right" className={styles.logo}>
        <Link to="/developer-page">
          <img
            src="https://cdn-icons-png.flaticon.com/512/5047/5047314.png"
            alt=""
          />
        </Link>
      </div>

      <div data-aos="fade-left" className={styles.navbar}>
        <Link to="/developer-page">ГЛАВНАЯ</Link>
        <Link to="/aboutauthor">ОБ АВТОРЕ</Link>
        <Link to="/works">РАБОТЫ</Link>
        <Link to="/">ПРОЦЕСС</Link>
        <Link to="/">КОНТАКТЫ</Link>
      </div>
    </div>
  );
};

export default Header;
