import styles from "./Resume.module.css"
function Resume() {
  return (
    <main className={styles.resume}>
      <embed 
        type="application/pdf"
        src="./David-Vazquez-Resume.pdf"
        // frameBorder="0"
        scrolling="auto"
        height="500%"
        width="100%"
      />
      <div className="buttonDiv">
        <button>
        <a href={require("./Resume/David-Vazquez-Resume.pdf")} download="David Vazquez's Resume">Download Resume</a>
        </button>
      </div>
    </main>
  )
}

export default Resume