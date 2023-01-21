import React from "react";
import styles from "./NotFound.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const NotFound = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div data-aos="fade-up" className={styles.wrapper}>
      <div className={styles.logo}>
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/e058b382853669.5d2a3d400cce1.png"
          alt=""
        />
      </div>

      <div className={styles.title}>
        <h1>Страница не найдена</h1>
        <span>Страница устарела, была удалена или не существовала вовсе.</span>
      </div>
    </div>
  );
};

export default NotFound;
