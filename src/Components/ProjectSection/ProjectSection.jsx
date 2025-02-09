import React, { useEffect, useState } from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import styles from './ProjectSection.module.css';
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

  return (
    <section className={styles.section}>
      <h3>PROJECTS</h3>
      <p className={styles.subtitle}>
        Explore some of my recent work and personal projects
      </p>
      <div className={styles.grid}>
        <div className={styles.prev} onClick={() => handlePrev()} >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>

        </div>
        {projectData?.slice(visibleIndex, visibleIndex + 3)?.map((project, index) => (
          <ProjectCard key={index} project={project}  />
        ))}
        <div className={styles.next} onClick={() => handleNext()} >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;