import  styles from  "./About.module.css"

function About() {
  return (
    <>
      <main className={styles.about}>
        <div>
          <img src="./IMG_1552.jpg" alt="" />
        </div>
        <section>
          <h1>Hi, Im David</h1>
          <p>My journey in the worlds of the military and hospitality industries has helped me cultivate a coding philosophy that emphasizes writing clean, functional code that provides a fun and user-friendly experience.My experience in those fields as well as my  love for all things tech, drives me to keep learning for ways to keep improving my coding philosophy.</p>
          <p>In my free time I delve into my interest. Playing games like Lost Ark, Halo Infinte, Warzone, roulette in silver/gold lobbies in Valorant praying for competent teammates, building a new keyboard while listening to music, or catch up on reading comics/manga while a Dodger or Laker game plays in the background. And now I can add messing around with code to my interest.</p>
        <h1>Software Development Skills</h1>
          <ul>
            <li className="fa-brands fa-square-js"></li>
            <li className="fa-brands fa-html5"></li>
            <li className="fa-brands fa-css3-alt"></li>
            <li className="fa-brands fa-python"></li>
            <li className="fa-brands fa-react"></li>
            <li className="fa-brands fa-node-js"></li>
          </ul>
        </section>
      </main>
    </>
  )
}

export default About
