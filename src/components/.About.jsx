import styles from "./About.module.css";


export const About = () => {
    
  return (
    <div id="about" className={styles.container}>
      <h1 className={styles.heading}>About</h1>
      <h2 className={styles.heading2}>I'm Ratikanta Mohanta</h2>
      <div className={styles.para}>
      Strong in design and integration with intuitive problem-solving skills. Proficient in HTML, CSS, JavaScript, React, and Redux. Passionate about implementing and launching new projects. looking to get hired and build experience and get new skills along the way then use those skills to earn myself a good position
      </div>
      <div className={styles.mail}>
        Drop a mail @ <span className={styles.email}>mratikanta1997@gmail.com</span>
        <span
          onClick={() => {
            navigator.clipboard.writeText("mratikanta1997@gmail.com");
          }}
        >
          <img src={`https://cdn-icons-png.flaticon.com/512/3991/3991554.png`} alt="" />
        </span>
       
      </div>
    </div>
  );
};
