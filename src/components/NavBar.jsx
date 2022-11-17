import { Link } from "react-router-dom";
import styles from "./NavBar.module.css"

function NavBar() {
  return (
    <header>
      <nav className={styles.navBar}>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/projects'>Projects</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/resume'>Resume</Link>
        <div className="git_linkedin">
          <a href="https://www.linkedin.com/in/davidvazquez88/">linkedin</a>
          <a href="https://github.com/IPREM1ERI">GitHub</a>
        </div>
      </nav>
    </header>
  )
}

export default NavBar