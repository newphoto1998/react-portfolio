import styles from "./Number.module.css";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";
function Number() {
  return (
    <div className={styles.number_content}>
      <div className={styles.number_item}>
        <h3>
          <ReactVisibilitySensor partialVisbility offset={{ bottom: 200 }}>
            {({ isVisible }:any) => (
              <div>
                {isVisible ? (
                  <CountUp start={0} end={100} duration={5} /> 
                ) : null} +
              </div>
            )}
          </ReactVisibilitySensor>
        </h3>
        <p>Project Delivered</p>
      </div>

      <div className={styles.number_item}>
        <h3>  <ReactVisibilitySensor partialVisbility offset={{ bottom: 200 }}>
            {({ isVisible }:any) => (
              <div>
                {isVisible ? (
                  <CountUp start={0} end={50} duration={5} /> 
                ) : null} +
              </div>
            )}
          </ReactVisibilitySensor></h3>
        <p>Company Helped</p>
      </div>

      <div className={styles.number_item}>
        <h3>  <ReactVisibilitySensor partialVisbility offset={{ bottom: 200 }}>
            {({ isVisible }:any) => (
              <div>
                {isVisible ? (
                  <CountUp start={0} end={100} duration={5} /> 
                ) : null} +
              </div>
            )}
          </ReactVisibilitySensor></h3>
        <p>Year of experience</p>
      </div>

      <div className={styles.number_item}>
        <h3>  <ReactVisibilitySensor partialVisbility offset={{ bottom: 200 }}>
            {({ isVisible }:any) => (
              <div>
                {isVisible ? (
                  <CountUp start={0} end={200} duration={5} /> 
                ) : null} +
              </div>
            )}
          </ReactVisibilitySensor></h3>
        <p>Happy Cilent</p>
      </div>
    </div>
  );
}

export default Number;
