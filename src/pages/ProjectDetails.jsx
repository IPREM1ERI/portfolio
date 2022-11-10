import findProject from "../utilities/findProject";
import { useParams } from "react-router-dom";

function ProjectDetails() {
  const params = useParams()
  console.log(params)
  const title = params.projectDetails
  const project = findProject(title)
  return (
    <>
      <h1>
        {project.title}
        <p>{project.description}</p>
        <img src={project.image} alt="project-image" />
        <a href={project.deploymentLink}>
          <button >Deployed Site</button>
        </a>
        <a href={project.repositoryLink}>
          <button >GitHub Repo</button>
        </a>
      </h1>
    </>
  )
}

export default ProjectDetails