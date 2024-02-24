import styles from "./Portfolio.module.css";
import { Tilt } from 'react-tilt'

function Portfolio() {
  return (
    <div className={styles.portfolio_content}>
      <h3 className={styles.portfolio_title}>Portfolio</h3>
      <div className={styles.Portfolio_list}>
        <Tilt scale={1} transitionSpeed={2500} titleReverse={true} className={styles.Portfolio_item}>
          <img src="https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?w=1380&t=st=1708270504~exp=1708271104~hmac=2700a1daef9af717f92834bd222f210058462fa3769ce3bc0c9303b3e720c033" />
          <p>Project Title</p>
        </Tilt>

        <Tilt  scale={1} transitionSpeed={2500} titleReverse={true} className={styles.Portfolio_item}>
          <img src="https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?w=1380&t=st=1708270504~exp=1708271104~hmac=2700a1daef9af717f92834bd222f210058462fa3769ce3bc0c9303b3e720c033" />
          <p>Project Title</p>
        </Tilt>

        <Tilt scale={1} transitionSpeed={2500} titleReverse={true} className={styles.Portfolio_item}>
          <img src="https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?w=1380&t=st=1708270504~exp=1708271104~hmac=2700a1daef9af717f92834bd222f210058462fa3769ce3bc0c9303b3e720c033" />
          <p>Project Title</p>
        </Tilt>
      </div>
    </div>
  );
}

export default Portfolio;
