import { useRef } from "react";
import { motion } from "framer-motion";
import TransitionDiv from "../../components/TransitionDiv/TransitionDiv";
import CustomCursor from "../../components/CustomCursor/CustomCursor";
import { useDispatch, useSelector } from "react-redux";
import { setCursorType } from "../../../features/cursorType/cursorType";
import { setSelectedTab } from "../../../features/tabSlice/tabSlice";
import { Link } from "react-router";

function Home() {
  const containerRef = useRef(null);
  const selectedCursor = useSelector((state) => state.cursorType.currentType);
  const isMobile = useSelector((state) => state.isMobile.isMobile);
  const dispatch = useDispatch();

  return (
    <motion.div
      ref={containerRef}
      onMouseEnter={() => dispatch(setCursorType("default"))}
      className="flex flex-col md:flex-row items-center justify-between h-screen px-6 md:px-20 bg-rnr-light-background cursor-none"
      key="home"
    >
      {!isMobile && <CustomCursor type={selectedCursor} />}

      {/* === Left Content === */}
      <motion.div
        className="w-full mt-11 md:mt-0 md:w-1/2 text-center md:text-left space-y-6"
        initial={{ x: "-10vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-rnr-light-heading leading-tight">
          Welcome to <span className="text-rnr-light-accent">Roots and Roofs</span>
        </h1>
        <p className="text-lg md:text-xl text-rnr-light-text-muted font-light">
          Your trusted partner in finding the perfect property—where your journey to a dream home begins.
        </p>

        <Link to="/about" onClick={() => dispatch(setSelectedTab("about"))}>
          <motion.button
            className="mt-4 px-6 py-3 rounded-full bg-rnr-light-accent text-white hover:bg-rnr-light-accent-hover transition"
            onMouseEnter={() => dispatch(setCursorType("arrow"))}
            onMouseLeave={() => dispatch(setCursorType("default"))}
            whileTap={{ scale: 0.95 }}
          >
            Learn More About Us
          </motion.button>
        </Link>
      </motion.div>

      {/* === Right 3D House Placeholder === */}
      <motion.div
        className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center items-center"
        initial={{ x: "10vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
      >
        {/* TODO: Add 3D interactive house model here */}
        <div className="w-full h-[250px] md:h-[400px] bg-rnr-light-surface-alt rounded-xl border border-rnr-light-border flex items-center justify-center">
          <span className="text-rnr-light-muted">[ 3D House Coming Soon ]</span>
        </div>
      </motion.div>

      <TransitionDiv />
    </motion.div>
  );
}

export default Home;
