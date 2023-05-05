import overstock from "../images/overstock.png"
import styles from "./projects.module.css";
import hichat from "../images/hichat.png";
import shower from "../images/shower.png";
import desk from "../images/desktime.png"
import drum from "../images/Drumkit.png"
import envoy from "../images/envoy.png"
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
              src={shower}
              alt=""
            />
          </center>
        </div>
        <div className={styles.afterImg}>
          <h2>Sparkling Showers</h2>
          <ul>
           <li>Login and Signup functionality with custom backend made using express</li>
           <li>Homepage navbar and footer with Chakra ui and completely responsive</li>
           <li>Admin side add and delete products</li>
           <li>Backend using Mongo DB deployed on cyclic</li>
           <li>product pages with single pages and review section</li>
          </ul>
          <div  ><b>Tech stack- React | Express JS | Mongo DB | chakra-ui | Node JS | CSS</b></div>
          <br />
          <button
            onClick={() => {
              window.open(
                "https://mybathnbody.vercel.app/",
                "_blank"
              );
            }}
          >
            Website
          </button>
          <button
            onClick={() => {
              window.open("https://github.com/Ashutosh-041298-DEV/Sparkling-Showers", "_blank");
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
              src={desk}
              alt=""
            />
          </center>
        </div>
        <div className={styles.afterImg}>
          <h2>Desktime Website</h2>
          <ul>
           <li>Login and Signup functionality</li>
           <li>Navbar and Footer </li>
           <li>Calender using Chakra ui</li>
           <li>Navbar change on the basis of user authentication</li>
          </ul>
          <div  ><b>Tech stack- React JS | Firebase | Chakra-ui</b></div>
          <br />
          <button
            onClick={() => {
              window.open(
                "https://cultured-bed-2030.netlify.app/",
                "_blank"
              );
            }}
          >
            Website
          </button>
          <button
            onClick={() => {
              window.open("https://github.com/Ashutosh-041298-DEV/cultured-bed-2030", "_blank");
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
              src={envoy}
              alt=""
            />
          </center>
        </div>
        <div className={styles.afterImg}>
          <h2>Envoy.com Website</h2>
          <ul>
            <li>created using React JS </li>
            <li>Home page Navbar and Footer with authentication</li>
            <li>Products page with sorting and filter</li>
            <li>Login and signup</li>
            
          </ul>
          <div  ><b>Tech stack- React Js| Json-Server |chakra-ui</b></div>
          <br />
          <button
            onClick={() => {
              window.open(
                "https://mute-line-8050.netlify.app/",
                "_blank"
              );
            }}
          >
            Website
          </button>
          <button
            onClick={() => {
              window.open("https://github.com/Ashutosh-041298-DEV/mute-line-8050", "_blank");
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
              src={drum}
              alt=""
            />
          </center>
        </div>
        <div className={styles.afterImg}>
          <h2>Drumkit website</h2>
          <ul>
            <li>play sounds using both keyboard </li>
            <li>Touch buttons are available for playing sound</li>
            <li>Create your own music</li>
            
          </ul>
          <div  ><b>Teck Stack:-ES6 | HTML | CSS | Vanilla Js</b></div>
          <br />
          <button
            onClick={() => {
              window.open("https://naughty-sinoussi-58c007.netlify.app/", "_blank");
            }}
          >
            Website
          </button>
          <button
            onClick={() => {
              window.open("https://github.com/Ashutosh-041298-DEV/Drumkit", "_blank");
            }}
          >
            GitHub
          </button>
        </div>
      </div>
    </div>
  );
};
