import  styles from  "./Home.module.css"
import { Link } from "react-router-dom"

function Home() {
  return (
      <container className={styles.homeContainer}>
        <section>
        <Link to='/about'>
          <h1>DAVID VAZQUEZ</h1>
          <img src="/homepageImg.PNG" alt="profile-img" />
          <h2>SOFTWARE ENGINEER</h2>
        </Link>
          <div>
            <h4 id="int">Int:3</h4>
            <h4 id="str">Str:2</h4>
            <h4 id="dex">Dex:3</h4>
            <h4 id="char">Char:5</h4>
            <h4 id="luck">Luck:1</h4>
          </div>
        </section>
      </container> 
  )
}

export default Home