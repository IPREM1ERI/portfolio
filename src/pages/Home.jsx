import  styles from  "./Home.module.css"
import { Link } from "react-router-dom"

function Home() {
  return (
    <>
      <h1 id="choose_dev">CHARACTER SELECT</h1>
      <div className={styles.homeContainer}>
        <section>
          <h1>CORTANA</h1>
          <h3 id="locked">LOCKED</h3>
          <img src="/cortana.PNG" alt="profile-img" />
          <h2>A.I.</h2>
          <div>
            <h4 id="int">Int:5</h4>
            <h4 id="str">Str:X</h4>
            <h4 id="dex">Dex:X</h4>
            <h4 id="char">Char:X</h4>
            <h4 id="luck">Luck:X</h4>
          </div>
        </section>
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
        <section>
          <h1>RACHE BARTMOSS</h1>
          <h3 id="locked">LOCKED</h3>
          <img src="/rache_img.PNG" alt="profile-img" />
          <h2>NETRUNNER</h2>
          <div>
            <h4 id="int">Int:5</h4>
            <h4 id="str">Str:3</h4>
            <h4 id="dex">Dex:4</h4>
            <h4 id="char">Char:4</h4>
            <h4 id="luck">Luck:5</h4>
          </div>
        </section>
      </div> 
    </>
  )
}

export default Home