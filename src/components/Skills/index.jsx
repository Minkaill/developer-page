import React from "react";
import styles from "./Skills.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import person from "../../image/person.png";

const Skills = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={styles.skills}>
      <div data-aos="fade-right" className={styles.progress}>
        <h1>Мои навыки</h1>
        <>
          <span>React</span>
          <div className={styles.progressbar}>
            <div
              style={{
                height: "100%",
                width: "90%",
                backgroundColor: "#34547A",
                transition: "width 0.5s",
              }}
            ></div>
          </div>
        </>

        <>
          <span>TypeScript</span>
          <div className={styles.progressbar}>
            <div
              style={{
                height: "100%",
                width: "25%",
                backgroundColor: "#34547A",
                transition: "width 0.5s",
              }}
            ></div>
          </div>
        </>

        <>
          <span>Redux</span>
          <div className={styles.progressbar}>
            <div
              style={{
                height: "100%",
                width: "85%",
                backgroundColor: "#34547A",
                transition: "width 0.5s",
              }}
            ></div>
          </div>
        </>

        <>
          <span>Webpack</span>
          <div className={styles.progressbar}>
            <div
              style={{
                height: "100%",
                width: "57%",
                backgroundColor: "#34547A",
                transition: "width 0.5s",
              }}
            ></div>
          </div>
        </>
      </div>

      <div data-aos="fade-left" className={styles.photo}>
        <img src={person} alt="" />
      </div>
    </div>
  );
};

export default Skills;
