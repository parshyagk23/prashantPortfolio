import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import styles from './ProjectSection.module.css';
import quizAppImg  from '../../assets/images/quiz.png'
import swipToryImg  from '../../assets/images/swiptory.png'
import notesImg  from '../../assets/images/pocketNote.png'
import calculatorimg from '../../assets/images/calc.png'
const ProjectSection = () => {
  const projects =
  [
    {
      title: "QuizApp",
      description: ["•Developed a comprehensive quiz creation and sharing platform with secure authentication.",
                  "•Implemented features include quiz creation, editing, updating, deleting, share quizze, real-time analytics, question timers, and trending quiz identification based on impressions",
                  "•Design front-end with React, back-end with Nodejs and MongoDB Database."],
      imageUrl: quizAppImg,
      technologies: ["React", "JavaScript", "NodeJs" ,"ExpressJs","MongoDB"],
      link: "https://quiz-frontend-dun.vercel.app/"
    },
    {
      title: "SWipTory",
      description: ["•Developed for storytelling platform with secure authentication.",
        "•Users can browse, read, like, bookmark, and share stories, with easy navigation through various categories.",
        "•Design front-end with React, back-end with Nodejs and MongoDB Database."
      ],
      imageUrl: swipToryImg,
      technologies: ["React", "JavaScript", "NodeJs" ,"ExpressJs","MongoDB"],
      link: "https://swiptory-chi.vercel.app/"
    },
    {
      title: "Pocket Notes",
      description: ["• Allows users to organize their notes efficiently.",
        "• Users can create customize groups for their notes. ",
        "• Users can add notes to specific groups. Notes are saved in local storage." ,
        "• The application automatically fetches relevant notes when users switch between groups."],
      imageUrl: notesImg,
      technologies: ["React"],
      link: "https://pocket-notes-rouge-three.vercel.app/"
    },
    {
      title: "Calculator App",
      description: [ 
        "• Developed a simple calculator application using HTML, CSS, and JavaScript.",
        "• Implemented a user-friendly interface with buttons for numerical input, operators, and clear and calculate buttons."
      ],
      imageUrl: calculatorimg,
      technologies: ["Html", "CSS", "Javascript"],
      link: "https://parshyagk23.github.io/Calculator/"
    },
  ]
  return (
    <section className={styles.section}>
      <h3>PROJECTS</h3>
      <p className={styles.subtitle}>
        Explore some of my recent work and personal projects
      </p>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectSection;