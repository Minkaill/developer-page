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
        Здравствуйте! Меня зовут Минкаил и я frontend-разработчик! Я занимаюсь
        разработкой веб-сайтов. Занимаюсь активной разработкой над TypeScript.
        Ищу дружную команду, где будем вместе развиваться и расти. С
        удовольствием присоединюсь к дружному и амбициозному Коллективу.
      </p>
    </div>
  );
};

export default AboutMe;
