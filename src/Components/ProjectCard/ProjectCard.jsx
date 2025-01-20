import React from 'react';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ project, imageUrl }) => {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img 
          src={imageUrl} 
          alt={project?.title} 
          className={styles.image}
          loading="lazy"
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{project?.title}</h3>
        {project?.description.map((desc, index) => (
          
        <p key={index} className={styles.description}>{desc}</p>
        ))}
        <div className={styles.techContainer}>
          {project?.technologies.map((tech, index) => (
            <span 
              key={index}
              className={styles.techBadge}
            >
              {tech}
            </span>
          ))}
        </div>
        <a 
          href={project?.link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          View Project
          <span className={styles.arrow}>→</span>
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;