import { Link } from "react-router-dom"
import  styles from  "./Contact.module.css"

function Contact() {
  return (
    <main className={styles.contact}>
      <h1>GET IN TOUCH</h1>
      <ul>
        <li>"I am currently searching for my next opportunity"</li>
        <li>If you either have the perfect job or just want to say hi,</li>
        <li>here's how to connect:</li>
      </ul>
      <section>
        <div>
          <a className="fa-brands fa-linkedin" href="https://www.linkedin.com/in/davidvazquez88/"></a>
          <a className="linkNames"href="https://www.linkedin.com/in/davidvazquez88/">LinkedIn</a>
        </div>
        <div>
          <a className="fa-brands fa-github" href="https://github.com/IPREM1ERI"  ></a>
          <a className="linkNames" href="https://github.com/IPREM1ERI">GitHub</a>
        </div>
        <div>
          <a className="fa-solid fa-at" href="mailto:d.vazquez0822@gmail.com"></a>
          <a className="linkNames" href="mailto:d.vazquez0822@gmail.com">Email</a>
        </div>
      </section>
    </main>  
  )
}

export default Contact

