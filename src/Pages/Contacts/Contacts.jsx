import { motion } from "framer-motion";
import TransitionDiv from "../../components/TransitionDiv/TransitionDiv";
import Border from "../../components/Border/Border";
import { useDispatch, useSelector } from "react-redux";
import CustomCursor from "../../components/CustomCursor/CustomCursor";
import { setCursorType } from "../../../features/cursorType/cursorType";

function Contacts() {
  const selectedCursor = useSelector((state) => state.cursorType.currentType);
  const isMobile = useSelector((state) => state.isMobile.isMobile);
  const dispatch = useDispatch();

  const contactInfo = [
    {
      label: "Email",
      value: "contact@rootsandroofs.com",
      link: "mailto:contact@rootsandroofs.com",
    },
    {
      label: "Phone",
      value: "+91 98765 43210",
      link: "tel:+919876543210",
    },
    {
      label: "Office",
      value: "45 Greenfield Ave, Mumbai, MH 400001",
      link: "https://maps.google.com?q=Roots+and+Roofs+Mumbai",
    },
  ];

  return (
    <motion.div
      key="contact"
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
        Get in Touch
      </motion.h1>

      <Border />

      {/* === Subheading === */}
      <motion.p
        className="text-lg text-rnr-light-text-muted font-light mb-10 max-w-2xl"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
      >
        Whether you're looking to buy your first home, explore investment opportunities, or simply ask a few questions — we're here to help. Reach out and our team will get back to you promptly.
      </motion.p>

      {/* === Contact Info === */}
      <motion.div
        className="flex flex-col gap-6 w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        transition={{ staggerChildren: 0.2 }}
      >
        {contactInfo.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
            className="group"
          >
            <p className="text-sm text-rnr-light-text font-medium uppercase tracking-wide mb-1">
              {item.label}
            </p>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => dispatch(setCursorType("link"))}
              onMouseLeave={() => dispatch(setCursorType("default"))}
              className="text-lg md:text-xl font-semibold text-rnr-light-accent hover:underline cursor-none"
            >
              {item.value}
            </a>
          </motion.div>
        ))}
      </motion.div>

      {/* === Call to Action === */}
      <motion.div
        className="mt-16 max-w-3xl"
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ amount: 0.2 }}
        transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-3xl font-bold text-rnr-light-heading mb-3">
          Ready to start your property journey?
        </h2>
        <p className="text-rnr-light-text-muted text-lg mb-6">
          Schedule a free consultation and let us help you find your dream home or the perfect investment.
        </p>
        <a
          href="mailto:contact@rootsandroofs.com"
          onMouseEnter={() => dispatch(setCursorType("arrow"))}
          onMouseLeave={() => dispatch(setCursorType("default"))}
          className="inline-block px-6 py-3 rounded-lg bg-rnr-light-accent text-white font-medium hover:bg-rnr-light-accent-hover transition-colors duration-300 cursor-none"
        >
          Schedule a Consultation
        </a>
      </motion.div>

      <TransitionDiv />
    </motion.div>
  );
}

export default Contacts;
