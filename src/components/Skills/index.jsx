import React from "react";
import styles from "./Skills.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import person from "../../image/person.png";

const Skills = () => {
  const [reactStatic, setReactStatic] = React.useState(0);
  const [typescript, setTypescript] = React.useState(0);
  const [webpack, setWebpack] = React.useState(0);
  const [redux, setRedux] = React.useState(0);

  localStorage.setItem("React", reactStatic);
  localStorage.setItem("Redux", redux);
  localStorage.setItem("TypeScript", typescript);
  localStorage.setItem("Webpack", webpack);

  const reactLocal = localStorage.getItem("React");
  const reduxLocal = localStorage.getItem("Redux");
  const typescriptLocal = localStorage.getItem("TypeScript");
  const webpackLocal = localStorage.getItem("Webpack");

  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={styles.skills}>
      <div data-aos="fade-right" className={styles.progress}>
        <h1>Мои навыки</h1>
        <>
          <button
            disabled={reactStatic === 100}
            onClick={() => setReactStatic(reactStatic + 10)}
          >
            React
          </button>
          <div className={styles.progressbar}>
            <div
              style={{
                height: "100%",
                width: `${reactLocal}%`,
                backgroundColor: "rgb(224, 179, 0)",
                transition: "width 0.5s",
              }}
            ></div>
          </div>
        </>

        <>
          <button
            disabled={typescript === 100}
            onClick={() => setTypescript(typescript + 10)}
          >
            TypeScript
          </button>
          <div className={styles.progressbar}>
            <div
              style={{
                height: "100%",
                width: `${typescriptLocal}%`,
                backgroundColor: "rgb(224, 179, 0)",
                transition: "width 0.5s",
              }}
            ></div>
          </div>
        </>

        <>
          <button disabled={redux === 100} onClick={() => setRedux(redux + 10)}>
            Redux
          </button>
          <div className={styles.progressbar}>
            <div
              style={{
                height: "100%",
                width: `${reduxLocal}%`,
                backgroundColor: "rgb(224, 179, 0)",
                transition: "width 0.5s",
              }}
            ></div>
          </div>
        </>

        <>
          <button
            disabled={webpack === 100}
            onClick={() => setWebpack(webpack + 10)}
          >
            Webpack
          </button>
          <div className={styles.progressbar}>
            <div
              style={{
                height: "100%",
                width: `${webpackLocal}%`,
                backgroundColor: "rgb(224, 179, 0)",
                transition: "width 0.5s",
              }}
            ></div>
          </div>
        </>
      </div>

      <div className={styles.photo}>
        <img data-aos="fade-left" src={person} alt="" />
      </div>
    </div>
  );
};

export default Skills;
