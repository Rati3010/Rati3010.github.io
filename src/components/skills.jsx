import styles from "./skills.module.css";

export const Skills = () => {
  return (
    <div id="skills" className={styles.container}>
      <h1 className={styles.heading}>Skills</h1>
      <div className={styles.toolContainer}>
        <div>
          {/* 1 */}
          <a href="https://whatwg.org/">
            <img
              src="https://chiranjeev-thapliyal.vercel.app/svg/html-5.svg"
              alt=""
            />
          </a>
        </div>
        <div>
          {/* 2 */}
          <a href="https://www.w3.org/">
            <img
              src="https://chiranjeev-thapliyal.vercel.app/svg/css3.svg"
              alt=""
            />
          </a>
        </div>
        <div>
          {/* 3 */}
          <a href="https://www.javascript.com/">
            <img
              src="https://chiranjeev-thapliyal.vercel.app/svg/javascript.svg"
              alt=""
            />
          </a>
        </div>
        <div>
          {/* 4 */}
          <a href="https://reactjs.org/">
            <img
              src="https://chiranjeev-thapliyal.vercel.app/svg/reactjs.svg"
              alt=""
            />
          </a>
        </div>
        <div>
          {/* 5 */}
          <a href="https://redux.js.org/">
            <img
              src="https://chiranjeev-thapliyal.vercel.app/svg/redux.svg"
              alt=""
            />
          </a>
        </div>

        <div>
          {/* 6 */}
          <a href="https://nodejs.org/en/">
            <img
              src="https://chiranjeev-thapliyal.vercel.app/svg/nodejs.svg"
              alt=""
            />
          </a>
        </div>
        <div>
          {/* 7 */}
          <a href="https://www.mongodb.com/">
            <img
              src="https://chiranjeev-thapliyal.vercel.app/svg/mongodb.svg"
              alt=""
            />
          </a>
        </div>
        <div>
          {/* 8 */}
          <a href="https://www.getbootstrap.com/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png"
              alt=""
            />
          </a>
        </div>
        <div>
          {/* 9 */}
          <a href="https://www.git-scm.com/">
            <img
              src="https://chiranjeev-thapliyal.vercel.app/svg/git.svg"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
};
