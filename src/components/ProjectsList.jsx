import ProjectPreview from "./ProjectPreview"
import  styles from  "./ProjectsList.module.css"

function ProjectsList(props) {
  return (
    <>
      <div className={styles.listContainer}>
        <h1>Projects</h1>
        <ul>
          { props.projects.map((project, index)=>
            <li key={index}>
              <ProjectPreview project={project}/>
            </li>
          )}
        </ul>
      </div>
    </>
  )
}

export default ProjectsList