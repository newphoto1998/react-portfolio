import styles from "./Contract.module.css";
import { FaPhone, FaEnvelope } from "react-icons/fa6";
function Contract() {
  return (
    <div className={styles.contract_wrapper}>
      <div className={styles.contract_content}>
        <div className={styles.contract_info}>
          <h3>Get in touch</h3>
          <p className={styles.contract_desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga eius
            eligendi in laboriosam delectus ipsum inventore alias dolorem
            ducimus aliquid.
          </p>

          <p className={styles.contract_address}>
            123 Main Street <br />
            Bangkok, Thailand
          </p>

          <p>
       
            <FaPhone /> (+66) 98 555 1234
          </p>
          <p>
         
            <FaEnvelope /> phatcharaphon.f@gmail.com
          </p>
        </div>

        <div className={styles.contract_form}>
                <form >
                    <div className={styles.input_group}>
                        <div>
                            <label htmlFor="first name">First Name</label>
                            <input type="text" placeholder="eg. John"/>
                        </div>

                        <div>
                            <label htmlFor="last name">last Name</label>
                            <input type="text" placeholder="eg. done"/>
                        </div>
                    </div>
                    <label htmlFor="email address"> Email Address</label>
                    <input type="email" placeholder="eg.phatcharaphon.f@gmail.com"/>
                    <label htmlFor="message"> Your message</label>
                    <textarea name="" id="" cols={30} rows={10} placeholder="Type here"></textarea>     
                    <button type="submit">submit</button>   
                </form>

        </div>
      </div>
    </div>
  );
}

export default Contract;
