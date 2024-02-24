import styles from "./Services.module.css";
import { FaCode, FaPaintbrush, FaDesktop } from "react-icons/fa6";

function Services() {
  return (
    <div className={styles.services_content}>
      <h3 className={styles.services_title}>My Services</h3>
      <div className={styles.services_list}>
        <div className={styles.services_item}>
          <FaCode />
          <h4>Web Development</h4>
          <h6>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            recusandae enim consectetur sapiente necessitatibus neque eos ipsa
            ullam minima nulla.
          </h6>
        </div>
        <div className={styles.services_item}>
          <FaPaintbrush />
          <h4>Web Design</h4>
          <h6>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            recusandae enim consectetur sapiente necessitatibus neque eos ipsa
            ullam minima nulla.
          </h6>
        </div>
        <div className={styles.services_item}>
          <FaDesktop />
          <h4>Front-end</h4>
          <h6>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            recusandae enim consectetur sapiente necessitatibus neque eos ipsa
            ullam minima nulla.
          </h6>
        </div>
      </div>
    </div>
  );
}

export default Services;
