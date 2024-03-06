import styles from "./Home.module.css";
import profile from "../images/profile.png"
import ReactTypingEffect from "react-typing-effect"

export const Home = () => {
  
  return (
    <div id="home" className={styles.container}>
      <div style={{ flex: "1" }} className={styles.firstChild}>
        <div>Hi, I am</div>

        <div>
          <span style={{ color: "blueviolet" }}>Ratikanta Mohanta</span>
        </div>
        <ReactTypingEffect
        text={["A Front-End Developer", " A Back-End Developer", "A Full-Stack Developer"]}
        cursorRenderer={cursor => <h1>{cursor}</h1>}
        displayTextRenderer={(text, i) => {
          return (
            <h1 style={{fontSize:"35px",marginTop:"0px",marginBottom:"0px"}}>
              {text.split('').map((char, i) => {
                const key = `${i}`;
                return (
                  <span
                    key={key}
                    style={{color: 'black'}}
                  >{char}</span>
                );
              })}
            </h1>
          );
        }}        
      />
        <div>
          <button className={styles.resumeBtn} onClick={()=>{
            window.open(
              "https://drive.google.com/file/d/1nVlXhhCcPXi9EbnphfMMk6YYhmyqKb16/view?usp=sharing&export=download",
              "_blank"
            );
          }}>Resume</button>
        </div>
        <div className={styles.iconDiv}>
          <a href="https://github.com/Rati3010" target="_blank" rel="noreferrer" style={{ display: "block" }}>
            <img src={`https://cdn-icons-png.flaticon.com/512/25/25231.png`} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/ratikanta-mohanta/" style={{ display: "block" }} target="_blank" rel="noreferrer">
            <img src={`https://pngimg.com/uploads/linkedIn/small/linkedIn_PNG20.png`} alt="" />
          </a>
        </div>
      </div>
      <div className={styles.secondChild}>
        <img
          src={profile}
          alt="profile_img"
         
          style={{ borderRadius: "50%" }}
        />
      </div>
    </div>
  );
};
