import { projects} from "../data/projects";

function ProjectDetails() {
  return (
    <>
      <h1>
        {projects[0].title}
        <p>{projects[0].description}</p>
        <img src={projects[0].image} alt="project-image" />
        <button onClick={projects[0].deploymentLink}>Deployed Site</button>
        <button onClick={projects[0].repositoryLink}>GitHub Repo</button>
      </h1>
    </>
  )
}

export default ProjectDetails