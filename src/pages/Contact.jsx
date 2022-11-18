import { Link } from "react-router-dom"
import  styles from  "./Contact.module.css"

function Contact() {
  return (
    <section className={styles.contact}>
      <h1>Contact</h1>
      <ul>
        <li>"I am currently searching for my next opportunity"</li>
        <li>If you either have the perfect job or just want to say hi,</li>
        <li>here's how to connect:</li>
      </ul>
      <div>
        <a className="fa-brands fa-linkedin" href="https://www.linkedin.com/in/davidvazquez88/"> LinkedIn</a>
          <a className="fa-brands fa-github" href="https://github.com/IPREM1ERI"  > GitHub</a>
        <a className="fa-solid fa-at" href="mailto:d.vazquez0822@gmail.com"> Email</a>
      </div>
    </section>  
  )
}

export default Contact

