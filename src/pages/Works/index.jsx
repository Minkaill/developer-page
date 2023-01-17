import React from "react";
import styles from "./Works.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import Projects from "../../components/Projects";

const Works = () => {
  window.scroll({ top: 0, behavior: "smooth" });
  React.useEffect(() => {
    AOS.init();
  }, []);

  const scroll = () => {
    window.scroll({
      top: 650,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className={styles.works}>
        <div data-aos="fade-right" className={styles.logo}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/4593/4593123.png"
            alt="works"
          />
        </div>

        <ul data-aos="fade-left" className={styles.description}>
          <h1>Мои работы</h1>
          <li>
            У каждого продвинутого разработчика всегда под рукой находятся более
            5-6 проектов. Для ознакомления с моими проектами пройдитесь по
            статье.
          </li>
          <button onClick={scroll}>ПОСМОТРЕТЬ ПРОЕКТЫ</button>
        </ul>
      </div>
      <Projects />
    </>
  );
};

export default Works;
