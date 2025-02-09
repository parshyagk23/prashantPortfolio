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
  const [visibleIndex, setVisibleIndex] = useState(0)
  const getData = async () => {
    const res = await GetProjectData();
    setProjectData(res)

  }
  const handlePrev = () => {
    if (visibleIndex <= 0) return
    setVisibleIndex((prevIndex) => prevIndex - 1);
  }
  const handleNext = () => {
    if (visibleIndex >= projectData.length - 3) return
    setVisibleIndex((prevIndex) => prevIndex + 1);
  }

  useEffect(() => {
    getData();
  }, [])

  const ProjectImage = [quizAppImg, taskImg, swipToryImg, notesImg, calculatorimg, supperappimg, weatherimg]
  return (
    <section className={styles.section}>
      <h3>PROJECTS</h3>
      <p className={styles.subtitle}>
        Explore some of my recent work and personal projects
      </p>
      <div className={styles.grid}>
        <div className={styles.prev} onClick={() => handlePrev()} >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>

        </div>
        {projectData?.slice(visibleIndex, visibleIndex + 3)?.map((project, index) => (
          <ProjectCard key={index} project={project} imageUrl={ProjectImage[index]} />
        ))}
        <div className={styles.next} onClick={() => handleNext()} >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;