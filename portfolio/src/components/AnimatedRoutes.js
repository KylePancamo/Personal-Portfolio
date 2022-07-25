import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import AboutMe from "../Pages/Aboutme";
import Homepage from "../Pages/Homepage";

import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route exact path="/aboutme" element={<AboutMe />} />
        <Route exact path="/" element={<Homepage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
