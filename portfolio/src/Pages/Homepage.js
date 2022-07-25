import { motion } from "framer-motion";

function Homepage() {
  return (
    <motion.div
      className="homepage"
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "100vw", opacity: 1 }}
      exit={{
        x: -window.innerWidth,
        transition: { duration: 1, ease: [0.87, 0, 0.13, 1] },
      }}
    >
      <h1>Homepage</h1>
    </motion.div>
  );
}

export default Homepage;
