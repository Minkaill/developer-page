import React from "react";
import styles from "./AboutMe.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutMe = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div data-aos="fade-up" className={styles.aboutme}>
      <h1>Обо мне</h1>
      <p>
        Практически всё своё детство я провёл в Костроме, учился в костромской
        школе, общался со сверстниками и людьми постарше, увлекался футболом,
        математикой и ничем больше. Но так как я учился не в «классе звёзд»
        нашего потока, мои вторые места на школьных олимпиадах по математике
        никто не замечал (мне до сих пор интересно почему), и я не ходил ни на
        город, ни в кружок, никуда ещё. Всего, как обычно, пришлось добиваться
        самому.
      </p>
    </div>
  );
};

export default AboutMe;
