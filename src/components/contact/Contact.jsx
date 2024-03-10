
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    // footer
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:">mayank.stmicro@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/mayankk072//">linkedin.com/mayanktyagi</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/call.jpg")} alt="call icon" />
          <a >+91 750 33 66 245, +91 80 10 71 8083</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/address.jpg")} alt="address icon" />
          <a >Koramangala,Bengaluru Karnataka, INDIA</a>
        </li>
      </ul>
    </footer>
  );
};