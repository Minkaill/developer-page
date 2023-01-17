import React from "react";
import styles from "./Working.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const Working = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={styles.working}>
      <h1 data-aos="fade-up">Как я работаю?</h1>
      <p data-aos="fade-up">
        Прежде всего хотел бы предупредить, что это нисколько не мотивационный
        пост в стиле «история моего успеха» или «как удачно я вкатился в
        программирование». Для чего я решил написать этот пост? Отчасти
        поделиться опытом, советами, отчасти меня сподвигла на это статья «Как я
        не стал программистом в 18 лет», я тоже решил написать свой пост на
        схожую тему, но в то время у меня не были выполнены два условия:
      </p>
    </div>
  );
};

export default Working;
