import  styles from  "./Home.module.css"
import { Link } from "react-router-dom"

function Home() {
  return (
    <> 
      <div className={styles.homeContainer}>
        <Link to='/about'>
          <h1>DAVID VAZQUEZ</h1><br/>
          <img src="http://www.avatarsinpixels.com/chibi/eyJTaG9lcyI6IjQiLCJQYW50cyI6IjE3IiwiVG9wIjoiMTAiLCJNb3V0aCI6IjYiLCJIYWlyVG9wIjoiNiIsInNraW5Ub25lIjoiYzI4ODM3IiwiaGFpclRvbmUiOiIzMzMzMzMiLCJleWVzVG9uZSI6ImU2Y2NhOCIsInBhbnRzVG9uZTIiOiJjY2NjY2MiLCJ0b3BUb25lMiI6ImNhZmFkNCJ9/1/show.png" alt="profile-img" />
          <h3>A</h3>
          <h2>SOFTWARE ENGINEER</h2>
          <h4>Int:4 Str:2 Luck:1 Dex:3 Char:5</h4>
        </Link>
      </div> 
    </>
  )
}

export default Home