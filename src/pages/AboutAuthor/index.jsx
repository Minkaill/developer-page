import React from "react";
import styles from "./AboutAuthor.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutAuthor = () => {
  window.scroll({ top: 0, behavior: "smooth" });
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={styles.wrapper}>
      <div data-aos="fade-up" className={styles.logo}>
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/ee5fe2160386893.63b3e80a2e85e.gif"
          alt=""
        />
      </div>

      <div data-aos="fade-up" className={styles.title}>
        <h1>Хай! Меня зовут Минкаил, я Frontend - разработчик!👋🏻</h1>
        <span>Добро пожаловать на мой веб сайт!</span>
      </div>

      <div className={styles.bio}>
        <p data-aos="fade-up">
          Я разрабатывают на стеке технологий MERN: React, Express, Mongoose,
          Node. Свой путь программирования я начал в апреле 2021 года, и с тех
          не покладая рук учусь и набираюсь знаний. На пути к цели были
          сложности: выгорания, недостаток терпения, недопоминия технологий,
          лень, но все это уже позади. Изо дня в день, печатая коды на
          клавиатура мозг привыкает к цифрам и уже код становится для тебя
          родным. В настоящее время занимаюсь активной разработкой над
          TypeScript. Ежедневно стараюсь набраться знаний и преступить к более
          свежим информациям.
        </p>

        <ul className={styles.stack}>
          <span data-aos="fade-up">За год я приобрел навыки:</span>
          <li data-aos="fade-up">React, React Native</li>
          <li data-aos="fade-up">TypeScript</li>
          <li data-aos="fade-up">
            Асинхронные работы с данными (axios, fetch)
          </li>
          <li data-aos="fade-up">Fullstack разработка</li>
          <li data-aos="fade-up">NodeJs (Express, Mongoose)</li>
          <li data-aos="fade-up">Авторизация (bcrypt, jsonwebtoken)</li>
          <li data-aos="fade-up">Redux, Redux Toolkit</li>
          <li data-aos="fade-up">
            Стилизация (CSS, SCSS/SASS, Tailwind CSS, MUI, Bootstrap)
          </li>
          <li data-aos="fade-up">React hook form</li>
          <li data-aos="fade-up">Git - продвинутый</li>
          <li data-aos="fade-up">React Hooks</li>
          <li data-aos="fade-up">REST API</li>
          <li data-aos="fade-up">React Router v8</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutAuthor;
