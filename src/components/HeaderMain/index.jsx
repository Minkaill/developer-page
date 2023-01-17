import React from "react";
import styles from "./HeaderMain.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const HeaderMain = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={styles.header__main}>
      <div data-aos="fade-right" className={styles.photo__block}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/6062/6062646.png"
          alt=""
        />
      </div>

      <div data-aos="fade-left" className={styles.direction}>
        <h1>Frontend Developer</h1>
        <p>
          FrontEnd разработчик создает видимую для пользователя часть
          веб-страницы и его главная задача – точно передать в верстке то, что
          создал дизайнер, а также реализовать пользовательскую логику.
        </p>
        <button>
          <a href="https://t.me/mklhdv" target="_blank" rel="noreferrer">
            НАПИСАТЬ МНЕ
          </a>
        </button>
      </div>
    </div>
  );
};

export default HeaderMain;
