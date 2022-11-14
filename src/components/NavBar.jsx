import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
        <Link to='/'>Home</Link>
        <ul>
            <Link to='/about'>About</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/resume'>Resume</Link>
        </ul>
    </nav>
  )
}

export default NavBar