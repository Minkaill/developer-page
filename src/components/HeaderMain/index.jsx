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
      <div
        data-aos="fade-right"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="500"
        className={styles.photo__block}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/6062/6062646.png"
          alt=""
        />
      </div>

      <div
        data-aos="fade-left"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="500"
        className={styles.direction}
      >
        <h1>Дизайн и верстка</h1>
        <p>
          Lorem Ipsum - это текст-"рыба", часто используемый в печати и
          вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на
          латинице с начала XVI века.
        </p>
        <button>НАПИСАТЬ МНЕ</button>
      </div>
    </div>
  );
};

export default HeaderMain;
