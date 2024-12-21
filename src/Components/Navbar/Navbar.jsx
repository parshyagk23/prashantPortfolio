import React, { useState } from "react";
import styles from "./Navbar.module.css";
import profileImg from "../../assets/images/Profile/profile4.png";
import resume from '../../assets/file/Resume.pdf'
const Navbar = () => {
  const [openbar, setopenbar] = useState(false);
  return (
    <div>
      <nav className={styles.navContainer}>
        <a href="#" className={styles.profileImg}>
          <img
            src={profileImg}
            width="40px"
            height="40px"
            alt="Profile Image"
          />
          <h1>P.G</h1>
        </a>
        <div className={styles.links}>
          <div>
            <a href="#" className={styles.link} >
              Home
            </a>
          </div>
          <div>
            <a href={resume} className={styles.link} target="_blank" >
              Resume
            </a>
          </div>
          
          <div>
            <a href="#projects" className={styles.link} >
              Projects
            </a>
          </div>
          <div>
            <a href="#contact" className={styles.link} >
              Contact
            </a>
          </div>
        </div>
        <div className={styles.bar} onClick={() => setopenbar((prev) => !prev)}>
          {!openbar ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              width="25"
              height="25"
            >
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="25"
              width="25"
              viewBox="0 0 384 512"
            >
              <path
                fill="#000"
                d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"
              ></path>
            </svg>
          )}
        </div>
      </nav>
      {openbar && (
        <div className={styles.barlink}>
          <div  onClick={() => setopenbar(false)}  >
            <a href="#" className={styles.link} >
              Home
            </a>
          </div>
          <div   >
            <a href={resume} className={styles.link} target="_blank" >
              Resume
            </a>
          </div>
          
          <div onClick={() => setopenbar(false)} >
            <a href="#projects" className={styles.link} >
              Projects
            </a>
          </div>
          <div  onClick={() => setopenbar(false)}  >
            <a href="#contact" className={styles.link} >
              Contact
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
