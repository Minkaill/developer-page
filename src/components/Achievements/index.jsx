import React from "react";
import styles from "./Achievements.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const Achievements = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={styles.achievements}>
      {[...Array(6)].map((items) => {
        return (
          <div data-aos="fade-up" className={styles.elements}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/8566/8566439.png"
              alt=""
            />
            <div className={styles.text__item}>
              <p>40+</p>
              <span>Проектов</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Achievements;
