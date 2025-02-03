import React, { useEffect, useState } from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import styles from './ProjectSection.module.css';
import quizAppImg from '../../assets/images/quiz.png'
import taskImg from '../../assets/images/task.png'
import swipToryImg from '../../assets/images/swiptory.png'
import notesImg from '../../assets/images/pocketNote.png'
import calculatorimg from '../../assets/images/calc.png'
import supperappimg from '../../assets/images/supperapp.png'
import weatherimg from '../../assets/images/weather.png'
import { GetProjectData } from '../../Api/Project';
const ProjectSection = () => {
  const [projectData, setProjectData] = useState()
  const getData = async () => {
    const res = await GetProjectData();
    setProjectData(res)

  }

  useEffect(() => {
    getData()
  })
  const ProjectImage = [quizAppImg,taskImg, swipToryImg, notesImg, calculatorimg, supperappimg,weatherimg]
  return (
    <section className={styles.section}>
      <h3>PROJECTS</h3>
      <p className={styles.subtitle}>
        Explore some of my recent work and personal projects
      </p>
      <div className={styles.grid}>
        {projectData?.map((project, index) => (
          <ProjectCard key={index} project={project} imageUrl={ProjectImage[index]} />
        ))}
      </div>
    </section>
  );
}

export default ProjectSection;