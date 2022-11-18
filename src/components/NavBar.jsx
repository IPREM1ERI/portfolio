import { Link } from "react-router-dom";
import styles from "./NavBar.module.css"
// import { FaGithub, FaLinkedinIn, FaAt } from 'react-icons/fa'

function NavBar() {
  return (
    <nav className={styles.navBar}>
      <h2>DAVID VAZQUEZ</h2>
      <div id="git_linkedin">
        <a className="fa-brands fa-linkedin" href="https://www.linkedin.com/in/davidvazquez88/"></a>
        <a className="fa-brands fa-github" href="https://github.com/IPREM1ERI"  ></a>
      </div>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/projects'>Projects</Link>
      <Link to='/resume'>Resume</Link>
      <Link to='/contact'>Contact</Link>
    </nav>
  )
}

export default NavBar



