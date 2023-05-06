import overstock from "../images/overstock.png"
import styles from "./projects.module.css";
import hichat from "../images/hichat.png";
import shower from "../images/shower.png";
import friend from "../images/FriendCircle.png"
import happyFox from "../images/happyFox.png";
import mailTrap from "../images/mailtrap.png";

export const Projects = () => {
    
  return (
    <div id="projects" className={styles.container}>
      <h1 className={styles.heading}>Projects</h1>

      <div className={styles.childs}>
        <div>
          <center>
            <img
              style={{ borderRadius: "5px" }}
              src={overstock}
              alt=""
            />
          </center>
        </div>
        <div className={styles.afterImg}>
          <h2>OverStock.com Website</h2>
          <ul>
            <li>Homepage,Navbar, Footer all responsive </li>           
            <li>Login and sign Up using Firebase with Admin side</li>
            <li>Filter and sorting of products with single pages for each product</li>
            <li>Addition of new products from admin side </li>
            <li>Cart and Checkout </li>
          </ul>
          <div  >
            <b> 
            Tech stack- React JS | Chakra Ui | CSS | Json-server | git
            </b>
          </div>
          <br />
          <button
            onClick={() => {
              window.open("https://overstock-pi.netlify.app/", "_blank");
            }}
          >
            Website
          </button>
          <button
            onClick={() => {
              window.open("https://github.com/Ashutosh-041298-DEV/overstock.com", "_blank");
            }}
          >
            GitHub
          </button>
        </div>
      </div>

      <div className={styles.childs}>
        <div>
          <center>
            <img
              style={{ borderRadius: "5px" }}
              src={hichat}
              alt=""
            />
          </center>
        </div>
        <div className={styles.afterImg}>
          <h2>Hi-chat-app</h2>
          <ul>
            <li>SASS based product created using Nextjs and Socket.io</li>
            <li>Login and Signup using Firebase authentication.</li>
            <li>Person to person communication with encrypted chats.</li>
            <li>Storage of chats using cloud firestore with last seen data for each user</li>
          </ul>
          <div  ><b>Tech stack- Next JS | Firebase Auth | Cloud Firestore | Socket.io</b></div>
          <br />
          <button
            onClick={() => {
              window.open(
                "https://hi-chat-app-six.vercel.app/",
                "_blank"
              );
            }}
          >
            Website
          </button>
          <button
            onClick={() => {
              window.open("https://github.com/Ashutosh-041298-DEV/hi-chat-app", "_blank");
            }}
          >
            GitHub
          </button>
        </div>
      </div>

      <div className={styles.childs}>
        <div>
          <center>
            <img
              style={{ borderRadius: "5px" }}
              src={friend}
              alt=""
            />
          </center>
        </div>
        <div className={styles.afterImg}>
          <h2>Friend Circle</h2>
          <ul>
           <li>Login and Signup functionality with custom backend made using express</li>
           <li>Homepage navbar and footer with Chakra ui and completely responsive</li>
           <li>Backend using Mongo DB deployed on cyclic</li>
           <li>Add Friends , like photos and comment in photos</li>
          </ul>
          <div  ><b>Tech stack- React | Express JS | Mongo DB | chakra-ui | Node JS | CSS</b></div>
          <br />
          <button
            onClick={() => {
              window.open(
                "https://client-xi-cyan.vercel.app/",
                "_blank"
              );
            }}
          >
            Website
          </button>
          <button
            onClick={() => {
              window.open("https://github.com/Rati3010/social_media", "_blank");
            }}
          >
            GitHub
          </button>
        </div>
      </div>

      <div className={styles.childs}>
        <div>
          <center>
            <img
              style={{ borderRadius: "5px" }}
              src={happyFox}
              alt=""
            />
          </center>
        </div>
        <div className={styles.afterImg}>
          <h2>HappyFox website</h2>
          <ul>
           <li>Login and Signup functionality</li>
           <li>Navbar and Footer </li>
           <li>Calender using matrix</li>
           <li>Navbar change on the basis of user authentication</li>
           <li>Created the chatbot</li>
          </ul>
          <div  ><b>Tech stack- Javascript | HTML | CSS </b></div>
          <br />
          <button
            onClick={() => {
              window.open(
                "https://cheerful-duckanoo-d5d1ea.netlify.app/",
                "_blank"
              );
            }}
          >
            Website
          </button>
          <button
            onClick={() => {
              window.open("https://github.com/NAYANKUMAR21/closed-mask-38", "_blank");
            }}
          >
            GitHub
          </button>
        </div>
      </div>
      <div className={styles.childs}>
        <div>
          <center>
            <img
              style={{ borderRadius: "5px" }}
              src={mailTrap}
              alt=""
            />
          </center>
        </div>
        <div className={styles.afterImg}>
          <h2>Mailtrap Website</h2>
          <ul>
            <li>Created using HTML and CSS and dployed on netlify</li>
            <li>Home page Navbar and Footer </li>
            <li>Login and signup</li>       
          </ul>
          <div  ><b>Tech stack- HTML | CSS  </b></div>
          <br />
          <button
            onClick={() => {
              window.open(
                "https://serene-cascaron-b64b39.netlify.app/",
                "_blank"
              );
            }}
          >
            Website
          </button>
          <button
            onClick={() => {
              window.open("https://github.com/Rati3010/Mailtrap", "_blank");
            }}
          >
            GitHub
          </button>
        </div>
      </div>
    </div>
  );
};
