import React from "react";
import styles from "./Projects.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);
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

    {
      id: Math.floor(Math.random() * 1000),
      title: "Hakaton",
      type: "Командный проект",
      temps: [
        "Добавление/Изменение/Удаление статей",
        "Авторизация/регистрация",
        "Просмотр определнной статьи",
        "Добавление комментарий",
        "Добавление новостей",
        "Личный кабинет",
      ],
      role: "Frontend Developer",
      demoUrl: "",
      codeUrl: "https://github.com/Minkaill/hakatod-crud",
    },

    {
      id: Math.floor(Math.random() * 1000),
      title: "Developer page",
      type: "Личный проект",
      temps: [
        "Добавление проектов",
        "Авторизация/регистрация",
        "Добавление команды + редактирование проекта",
      ],
      role: "Frontend Developer",
      demoUrl: "",
      codeUrl: "https://github.com/Minkaill/developer-page",
    },

    {
      id: Math.floor(Math.random() * 1000),
      title: "Advanced Github",
      type: "Личный проект",
      temps: [
        "Поиск пользователей github(RTK query)",
        "Просмотр репозиторий/форков",
      ],
      role: "Frontend Developer",
      demoUrl: "",
      codeUrl: "https://github.com/Minkaill/typescript-advanced-github",
    },

    {
      id: Math.floor(Math.random() * 1000),
      title: "Interview",
      type: "Личный проект",
      temps: [
        "Подготовка к собеседованиям",
        "Добавление своих ответов к вопросам",
        "Сортировка вопросов",
      ],
      role: "Frontend Developer",
      demoUrl: "",
      codeUrl: "https://github.com/Minkaill/interview",
    },

    {
      id: Math.floor(Math.random() * 1000),
      title: "Mobile App",
      type: "Личный проект",
      temps: [
        "Вывод адаптива на всех устройствах",
        "Просмотр/Удалена/Изменение новостей",
        "Динамическая маршрутизация новостей",
      ],
      role: "Frontend Developer",
      demoUrl: "",
      codeUrl: "https://github.com/Minkaill/Mobile-App",
    },

    {
      id: Math.floor(Math.random() * 1000),
      title: "Turamisumo",
      type: "Командный проект",
      temps: [
        "Авторизация/регистрация",
        "Бронирование отелей/столиков ресторана",
        "Меню ресторана - оформление заказа в номер",
        "Живой поиск и фильтрация товаров и номеров отеля",
      ],
      role: "Team Leader",
      demoUrl: "",
      codeUrl: "https://github.com/Minkaill/TuramisumoFrontend",
    },
  ];
  console.log(detailsProject[0], detailsProject[1]);
  return (
    <div data-aos="fade-up" className={styles.wrapper}>
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
