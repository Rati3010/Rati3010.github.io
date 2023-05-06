import styles from "./Navbar.module.css";
import logo from "../images/pngegg.png";

export const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.firstChild}>
        <h1>RKM.</h1>
      </div>
      <div className={styles.secondChild}>
        <div>
          <a href="#home">Home</a>
        </div>
        <div>
          <a href="#about">About</a>
        </div>
        <div>
          <a href="#skills">Skills</a>
        </div>
        <div>
          <a href="#projects">Projects</a>
        </div>
        <div>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </div>
  );
};
