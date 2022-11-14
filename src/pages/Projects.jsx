import { projects } from "../data/projects"
import ProjectsList from "../components/ProjectsList"
import styles from './Projects.module.css'

function Projects() {
  return (
    <>
    <div className={styles.projectsBody} >
      <ProjectsList projects={projects}/>
    </div>
    </>
  )
}

export default Projects