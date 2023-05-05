import styles from "./contact.module.css";

export const Contact = () => {
  return (
    <div id="contact" className={styles.container}>
      <h1 className={styles.heading}>Get in touch</h1>
      <h1 className={styles.heading2}>Ratikanta Mohanta</h1>
      <h2 className={styles.heading2}>mratikanta1997@gmail.com</h2>
      <h2 className={styles.heading2}>+91-9337951732</h2>
      <div className={styles.allLinksDiv}>
        <div>
          <a
            href="https://www.linkedin.com/in/ratikanta-mohanta/"
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.platformLinks}>Linkedin</div>
          </a>
        </div>
        <div>
          <a
            href="https://github.com/Rati3010"
            rel="noreferrer"
            target="_blank"
          >
            <div className={styles.platformLinks}>GitHub</div>
          </a>
        </div>
      </div>
    </div>
  );
};
