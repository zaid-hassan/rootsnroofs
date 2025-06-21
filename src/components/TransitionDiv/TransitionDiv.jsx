import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

function TransitionDiv() {
  const selectedTab = useSelector((state) => state.tabSlice.selectedTab);

  return (
    <motion.div className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden">
      {/* Slide In Overlay */}
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: "100%" }}
        exit={{ y: 0 }}
        transition={{ duration: 1.1, ease: [0.77, 0, 0.175, 1] }} // smoother easing
        className="absolute inset-0 bg-rnr-dark-background origin-bottom"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 0, scale: 0.95 }}
            exit={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 1.1, ease: "easeOut" }}
            className="uppercase text-4xl md:text-8xl font-extrabold font-jetbrains-mono text-rnr-dark-accent"
          >
            {selectedTab}
          </motion.h1>
        </div>
      </motion.div>

      {/* Slide Out Overlay */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        exit={{ y: "-100%" }}
        transition={{ duration: 1.1, ease: [0.77, 0, 0.175, 1] }}
        className="absolute inset-0 bg-rnr-dark-background origin-top"
      />
    </motion.div>
  );
}

export default TransitionDiv;
