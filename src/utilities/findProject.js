import { projects } from "../data/projects"
import hyphenateWords from "./hyphenateWords"

function findProject(str) {
  return projects.filter(project => hyphenateWords(project.title) === str)[0]
}


export default findProject