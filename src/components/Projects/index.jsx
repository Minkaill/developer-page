import React from "react";
import styles from "./Projects.module.scss";

const Projects = () => {
  return (
    <div className={styles.wrapper}>
      {[...Array(5)].map(() => {
        return (
          <div className={styles.project}>
            <div className={styles.title}>
              <h1>FUJIFILM X-T10</h1>
              <span>Mirrorles digital camera</span>
            </div>

            <ul className={styles.project__details}>
              <span>Функционал:</span>
              <li>16.3 amp APS trans omg digital</li>
              <li>16.3 amp APS trans omg digital</li>
              <li>16.3 amp APS trans omg digital</li>
              <li>16.3 amp APS trans omg digital</li>
              <li>16.3 amp APS trans omg digital</li>
            </ul>

            <div className={styles.role}>
              <span>Роль в разработке: Frontend Developer</span>
            </div>

            <div className={styles.navigation}>
              <button>DEMO</button>
              <button>CODE</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
