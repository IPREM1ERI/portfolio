import ProjectPreview from "./ProjectPreview"

function ProjectsList(props) {
  return (
    <>
      <h1>Projects</h1>
      <ul>
        { props.projects.map((project, index)=>
          <li key={index}>
            <ProjectPreview project={project}/>
          </li>
        )}
      </ul>
    </>
  )
}

export default ProjectsList