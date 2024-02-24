import styles from "./Skills.module.css";
import { FaReact,FaGitAlt,FaAngular,FaGolang  } from "react-icons/fa6";
import { SiTypescript } from "react-icons/si";


function Skill() {
  return (

          <div className={styles.skill_content}>
                <h3 className={styles.skills_title}>My Skill</h3>
                <ul className={styles.skills_list}>
                    <li> <FaReact/></li>
                    <li> <FaGitAlt/></li>
                    <li> <FaAngular/></li>
                    <li> <FaGolang/></li>
                    <li> <SiTypescript/></li>
                </ul>
          </div>


  )
}

export default Skill