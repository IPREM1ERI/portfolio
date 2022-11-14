import hyphenateWords from "../utilities/hyphenateWords"
import { Link } from "react-router-dom"
import styles from "./ProjectPreview.module.css"

function ProjectPreview(props) {
  return (
    <div className={styles.container}>
      <h3>{props.project.title}</h3>
      <img src={props.project.image} alt={props.project.title} />
      <section>
          <Link to={hyphenateWords(props.project.title)}>
            <button>Learn more</button>
          </Link>
      </section>
    </div>
  )
}

export default ProjectPreview