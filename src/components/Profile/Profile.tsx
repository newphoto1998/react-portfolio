import styles from "./Profile.module.css";
import { FaGithub, FaLinkedin, FaFacebookF } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";
import { Tilt } from 'react-tilt'
function Profile() {
  return (
    <div className={styles.profile_wrapper}>
      <div className={styles.profile_container}>
        <div className={styles.profile_content}>
          <div className={styles.profile_info_title}>
            <p className={styles.info_1}>Hi, it’s me</p>
            <p className={styles.info_2}>Phatcharaphon Fongsamut</p>
            <p className={styles.info_3}>
              <span style={{ marginRight: "10px" }}> I'm a</span>
              <TypeAnimation
                sequence={["Software Developer", 1000, "Full Stack Developer", 1000]}
                speed={50}
                repeat={Infinity}
              />
            </p>
            <p className={styles.info_4}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
              fugiat commodi <br />
              quas cupiditate minus dolore nulla eos accusantium labore
              explicabo.
            </p>
            <ul className={styles.info_social}>
              <li>
                <a href="#">
                  <FaGithub />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaFacebookF />
                </a>
              </li>
            </ul>
          </div>

          <Tilt  scale={1.2} transitionSpeed={2500} titleReverse={true}>
            <div className={styles.profile_img}></div>
          </Tilt>
        </div>
      </div>
    </div>
  );
}

export default Profile;
