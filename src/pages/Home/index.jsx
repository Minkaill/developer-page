import React from "react";
import HeaderMain from "../../components/HeaderMain/index";
import AboutMe from "../../components/AboutMe/index";
import Achievements from "../../components/Achievements/index";
import Skills from "../../components/Skills/index";
import Working from "../../components/Working/index";
import styles from "./Home.module.scss";

const Home = () => {
  window.scroll({ top: 0, behavior: "smooth" });
  return (
    <div className={styles.main}>
      <HeaderMain />
      <AboutMe />
      <Achievements />
      <Skills />
      <Working />
    </div>
  );
};

export default Home;
