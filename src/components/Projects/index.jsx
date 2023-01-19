import React from "react";
import styles from "./Projects.module.scss";
// импорты

const Projects = () => {
  const truncateTitle = (str) => {
    if (str.length >= 30) {
      return str.substring(0, 30) + "... ";
    }

    return str;
  };

  const detailsProject = [
    {
      id: Math.floor(Math.random() * 1000),
      title: "Personal Blog",
      type: "Командный проект",
      temps: [
        "Добавление новостей",
        "Авторизация/регистрация",
        "Изменение новостей",
        "Удаление новостей",
        "Получение новостей",
        "Личный кабинет",
      ],
      role: "Frontend Developer",
      dempUrl: "",
      codeUrl: "https://github.com/Minkaill/personal-blog-vs",
    },

    {
      id: Math.floor(Math.random() * 1000),
      title: "Sneaker Corner",
      type: "Личный проект",
      temps: [
        "Добавление/Изменение/Удаление товара",
        "Авторизация/регистрация",
        "Добавление/Удаление избранного",
        "Поиск по сортировке",
        "Личный кабинет",
      ],
      role: "Frontend Developer",
      demoUrl: "https://minkaill.github.io/SneakerCorner/",
      codeUrl: "https://github.com/Minkaill/SneakerCorner",
    },
  ];
  console.log(detailsProject[0], detailsProject[1]);
  return (
    <div className={styles.wrapper}>
      {detailsProject.map((obj) => {
        return (
          <div className={styles.project}>
            <div className={styles.title}>
              <h1>{obj.title}</h1>
              <span>{obj.type}</span>
            </div>

            <ul className={styles.project__details}>
              <span>Функционал:</span>
              {obj.temps.map((item) => (
                <>
                  <li>{truncateTitle(item)}</li>
                  <hr></hr>
                </>
              ))}
            </ul>

            <div className={styles.role}>
              <span>Роль в проекте: {obj.role}</span>
            </div>

            <div className={styles.navigation}>
              <a href={obj.demoUrl} target="_blank" rel="noreferrer">
                <button>DEMO</button>
              </a>
              <a href={obj.codeUrl} target="_blank" rel="noreferrer">
                <button>CODE</button>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
