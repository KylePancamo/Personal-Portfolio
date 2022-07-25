import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "react-pro-sidebar/dist/css/styles.css";
import { motion } from "framer-motion";

function AboutMe() {
  return (
    <motion.div
      className="AboutMe"
      initial={{ width: 0, opacity: 0}}
      animate={{ width: "100vw", opacity: 1}}
      exit={{
        x: window.innerWidth,
        transition: { duration: 1, ease: [0.87, 0, 0.13, 1] },
      }}
    >
      <div className="page">
        <div className="wrapper">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default AboutMe;
