
import styles from "./Projects.module.css";

import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    // hello
    <div className={styles.container} id="projects">
      <h2 className={styles.title}>INDUSTRIAL PROJECTS</h2>
      <div className={styles.wrapper}>
        <div className={styles.projects}>
          {projects.map((project, id) => {
            return <ProjectCard key={id} project={project} />;
          })}
        </div>
      </div>
    </div>
  );
};