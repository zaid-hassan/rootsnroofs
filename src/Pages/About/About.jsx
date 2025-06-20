import { motion } from "framer-motion";
import TransitionDiv from "../../components/TransitionDiv/TransitionDiv";
import { useDispatch, useSelector } from "react-redux";
import { setCursorType } from "../../../features/cursorType/cursorType";
import CustomCursor from "../../components/CustomCursor/CustomCursor";
import Border from "../../components/Border/Border";

function About() {
  const selectedCursor = useSelector((state) => state.cursorType.currentType);
  const isMobile = useSelector((state) => state.isMobile.isMobile);
  const dispatch = useDispatch();

  return (
    <motion.div
      key="about"
      className="flex flex-col justify-start items-start px-6 py-12 min-h-screen bg-rnr-light-background"
    >
      {!isMobile && <CustomCursor type={selectedCursor} />}

      {/* === Heading === */}
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold mb-2 text-rnr-light-heading font-main"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
      >
        About Us
      </motion.h1>

      {/* <motion.div
        className="h-1 w-24 bg-rnr-light-accent mb-8 rounded"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      /> */}
      <Border />

      {/* === Paragraph 1 === */}
      <motion.p
        className="max-w-3xl text-lg text-rnr-light-text-muted font-light leading-relaxed mb-6"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        At <strong className="text-rnr-light-accent">Roots and Roofs</strong>, we believe that finding a home is more than just a transaction — it’s a life milestone. We are a client-focused real estate company committed to helping families, individuals, and investors discover the perfect space to grow and thrive.
      </motion.p>

      {/* === Paragraph 2 === */}
      <motion.p
        className="max-w-3xl text-lg text-rnr-light-text-muted font-light leading-relaxed mb-10"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        Whether you're searching for a cozy apartment, a dream house, or a smart investment, our team ensures a seamless experience with integrity, insight, and a deep understanding of local markets. We listen, we care, and we guide — every step of the way.
      </motion.p>

      {/* === Scroll-in Cards === */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{  amount: 0.2 }}
        transition={{ staggerChildren: 0.2 }}
      >
        {[
          {
            title: "Local Expertise",
            text: "Deep knowledge of neighborhoods, schools, and markets to find what fits you best.",
          },
          {
            title: "Personal Approach",
            text: "We listen closely to your needs and tailor every step of the process to suit you.",
          },
          {
            title: "End-to-End Support",
            text: "From paperwork to moving day — we’re with you throughout the entire journey.",
          },
        ].map((card, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-md rounded-xl p-6 border border-rnr-light-border"
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
          >
            <h3 className="text-xl font-semibold text-rnr-light-heading mb-2">
              {card.title}
            </h3>
            <p className="text-rnr-light-text-muted text-md">{card.text}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* === Resume / Brochure Download (optional) === */}
      <motion.a
        href="https://drive.google.com/file/d/1xEAmpn-gu5GsFssBjffxXv7UpdB2D2R-/view?usp=sharing"
        target="_blank"
        className="mt-12 font-main text-rnr-light-text bg-rnr-light-surface border border-rnr-light-border hover:bg-rnr-light-accent hover:text-white transition-all duration-300 ease-in-out px-5 py-3 rounded-lg cursor-pointer"
        onMouseEnter={() => dispatch(setCursorType("arrowDown"))}
        onMouseLeave={() => dispatch(setCursorType("default"))}
      >
        View Company Brochure
      </motion.a>

      <TransitionDiv />
    </motion.div>
  );
}

export default About;
