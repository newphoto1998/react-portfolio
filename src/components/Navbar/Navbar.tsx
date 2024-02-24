import { useState } from "react";
import styles from "./Navbar.module.css";
import { FaBars } from "react-icons/fa6";

function Navbar() {
  const [isToggle, setToggle] = useState<boolean>(false);

  const handleToggle = () => {
    setToggle(!isToggle);
  };
  return (
    <nav>
      <div className={styles.container}>
        <div className={styles.nav_con}>
          <div className={styles.logo}>
            <a href="#">PF PORT</a>
          </div>

          <ul>
            <li>
              <a href="#">Skills</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <div className={styles.button_hireme}>
            <a href="#">Hire me</a>
          </div>
        </div>

        {/* Mobile menu */}
        <FaBars className={styles.mobile_bars} onClick={handleToggle} />
        {isToggle && (
          <>
            <ul className={styles.mobile_menu}>
              <li>
                <a className={styles.affectButton} href="#">Skills</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
            <div className={styles.mobile_button}>
              <a href="#">Hire me</a>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
