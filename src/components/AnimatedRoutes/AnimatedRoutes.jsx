import React from "react";
import { Routes, Route, useLocation } from "react-router";
import { AnimatePresence } from "framer-motion";
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";
import Contacts from "../../Pages/Contacts/Contacts";
import Projects from "../../Pages/Projects/Projects";
import NotFound from "../../Pages/NotFound";
import Services from "../../Pages/Services/Services";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
