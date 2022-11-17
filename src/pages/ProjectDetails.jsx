import findProject from "../utilities/findProject";
import { useParams } from "react-router-dom";
import styles from "./ProjectDetails.module.css"

function ProjectDetails() {
  const params = useParams()
  console.log(params)
  const title = params.projectDetails
  const project = findProject(title)
  return (
    <>
      <div className={styles.containerDetails}>
        {/* {project.title} */}
        <img src={project.image} alt="project-image" />
        <p>{project.description}</p>
        <div>
          <a href={project.deploymentLink}>
            <button >Deployed Site</button>
          </a>
          <a href={project.repositoryLink}>
            <button >GitHub Repo</button>
          </a>
        </div>
      </div>
    </>
  )
}

export default ProjectDetails