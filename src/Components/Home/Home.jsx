import React from "react";
import styles from "./Home.module.css";
import ProfileImg from "../../assets/images/Profile/profile4.png";
import html from "../../assets/icons/html5.png";
import css from "../../assets/icons/css3.png";
import js from "../../assets/icons/js.png";
import react from "../../assets/icons/react.png";
import express from "../../assets/icons/express js.png";
import node from "../../assets/icons/nodejs.png";
import mongodb from "../../assets/icons/mongodb.png";
import Java from "../../assets/icons/java.png";
import sql from "../../assets/icons/mysql.png";
const Home = () => {
  const Skills = [
    {
      image: (
        <img
          style={{ height: "45px", width: "45px" }}
          title="html"
          src={html}
        />
      ),
    },
    {
      image: (
        <img style={{ height: "45px", width: "45px" }} title="css" src={css} />
      ),
    },
    {
      image: (
        <img
          style={{ height: "45px", width: "45px" }}
          title="JavaScript"
          src={js}
        />
      ),
    },
    {
      image: (
        <img
          style={{ height: "45px", width: "45px" }}
          title="React"
          src={react}
        />
      ),
    },
    {
      image: (
        <img
          style={{ height: "45px", width: "45px" }}
          title="MongoDB"
          src={mongodb}
        />
      ),
    },
    {
      image: (
        <img
          style={{ height: "45px", width: "45px" }}
          title="ExpressJs"
          src={express}
        />
      ),
    },
    {
      image: (
        <img
          style={{ height: "45px", width: "45px" }}
          title="NOdeJs"
          src={node}
        />
      ),
    },
    {
      image: (
        <img
          style={{ height: "45px", width: "45px" }}
          title="Java"
          src={Java}
        />
      ),
    },
    {
      image: (
        <img style={{ height: "45px", width: "45px" }} title="SQL" src={sql} />
      ),
    },
  ];
  return (
    <div className={styles.container}>
      <img className={styles.profile} src={ProfileImg} alt="Profile image" />

      <div className={styles.aboutme}>
        <h1>Hello I'm Prashant </h1>
        <h2>A Bit About Me</h2>
        <p>
          I am a learning Full-Stack development. I am an
          Electronics and telecommunication undergraduated from VIIT Pune. I am
          very passionate about improving my coding skills & developing
          websites.Proficient in MERN stack development and problem-solving. I
          build Websites using MERN Stack. Working for myself to improve my
          skills. Love to build Full-Stack Application.
        </p>

        <div className={styles.skills}>
          {Skills.map((item, index) => (
            <div key={index}>{item.image}</div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Home;
