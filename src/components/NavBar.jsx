import { Link } from "react-router-dom";
import styles from "./NavBar.module.css"

function NavBar() {
  return (
    <nav className={styles.navBar}>
      <h3>DAVID VAZQUEZ</h3>
      <div id="git_linkedin">
        <a href="https://www.linkedin.com/in/davidvazquez88/">linkedin</a>
        <a href="https://github.com/IPREM1ERI">GitHub</a>
      </div>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/projects'>Projects</Link>
      <Link to='/contact'>Contact</Link>
      <Link to='/resume'>Resume</Link>
    </nav>
  )
}

export default NavBar