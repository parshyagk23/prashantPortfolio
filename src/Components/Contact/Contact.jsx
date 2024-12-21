import React, { useEffect, useState } from "react";
import styles from "./Contact.module.css";
import linkedin from "../../assets/images/Social icons/linkedin.png";
import github from "../../assets/images/Social icons/github.png";

const Contact = ({ com }) => {
  const Socialicons = [
    {
      image: (
        <a
          target="_blank"
          href="https://www.linkedin.com/in/prashant-gatkawar-1b7237189/"
        >
          <img style={{ height: "30px" }} title="LinkedIn" src={linkedin} />{" "}
        </a>
      ),
    },
    {
      image: (
        <a target="_blank" href="https://www.github.com/parshya23">
          {" "}
          <img style={{ height: "30px" }} title="Github" src={github} />
        </a>
      ),
    },
  ];
  const [pos, setPos] = useState();

  useEffect(() => {
    if (window.innerWidth <= 600) {
      setPos("unset");
    } else {
      com === "project" ? setPos("unset") : setPos("absolute");
    }
  }, [window.innerWidth]);

  return (
    <footer style={{ position: pos }} className={styles.footer}>
      <div className={styles.footerLine}></div>
      <section className={styles.footerContainer}>
        <div>
          <h2 style={{ margin: "20px 0 0 0" }}>Mobile</h2>
          <p style={{ margin: "10px 0 20px 0" }}>7875755945</p>
        </div>
        <div>
          <h2 style={{ margin: "20px 0 0 0" }}>Email</h2>
          <p style={{ margin: "10px 0 20px 0" }}>gkprashant52@gmail.com</p>
        </div>
        <div>
          <h2 style={{ margin: "20px 0 0 0" }}>Social</h2>
          <div style={{ display: "flex", gap: "5px" }}>
            {Socialicons.map((icons, index) => (
              <div key={index}>{icons.image}</div>
            ))}
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Contact;
