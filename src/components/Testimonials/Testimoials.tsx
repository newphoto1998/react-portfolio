import styles from "./Testimoials.module.css";

function Testimoials() {
  return (
    <div className={styles.Testimoinal_content}>
      <h3 className={styles.Testimoinal_title}> Testimonials</h3>
      <div className={styles.Testimoinal_list}>
        {[...Array(3)].map(() => (
          <div className={styles.Testimoinal_item}>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
              in optio architecto expedita amet possimus laudantium. Magni eaque
              soluta voluptas.
            </p>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Outdoors-man-portrait_%28cropped%29.jpg/800px-Outdoors-man-portrait_%28cropped%29.jpg" />
            <h4>John Doe</h4>
            <p className={styles.bio}>Web Devloper</p>
          </div>
        ))}

        {/* <div className={styles.Testimoinal_item}>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet in
            optio architecto expedita amet possimus laudantium. Magni eaque
            soluta voluptas.
          </p>
          <img src="../../assets/image/profile_image.jpg" />
          <h4>John Doe</h4>
          <p>Web Devloper</p>
        </div>

        <div className={styles.Testimoinal_item}>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet in
            optio architecto expedita amet possimus laudantium. Magni eaque
            soluta voluptas.
          </p>
          <img src="../../assets/image/profile_image.jpg" />
          <h4>John Doe</h4>
          <p>Web Devloper</p>
        </div> */}
      </div>
    </div>
  );
}

export default Testimoials;
