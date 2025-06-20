import { motion } from "framer-motion";
import Border from "../../components/Border/Border";
import TransitionDiv from "../../components/TransitionDiv/TransitionDiv";
import { useDispatch, useSelector } from "react-redux";
import CustomCursor from "../../components/CustomCursor/CustomCursor";
import { setCursorType } from "../../../features/cursorType/cursorType";

function Services() {
  const selectedCursor = useSelector((state) => state.cursorType.currentType);
  const isMobile = useSelector((state) => state.isMobile.isMobile);
  const dispatch = useDispatch();

  const services = [
    {
      title: "Property Buying Assistance",
      description:
        "From site visits to final negotiations, we guide clients through the entire buying journey to help them find the perfect property.",
    },
    {
      title: "Property Selling Support",
      description:
        "We handle listing, staging, marketing, and documentation to ensure your property sells fast and at the right value.",
    },
    {
      title: "Rental Management",
      description:
        "We match property owners with reliable tenants, manage leasing, and oversee property upkeep and rent collections.",
    },
    {
      title: "Investment Advisory",
      description:
        "Looking to invest in real estate? Our market experts help you pick high-growth, high-return properties tailored to your goals.",
    },
    {
      title: "Legal & Documentation",
      description:
        "Get expert help with legal verification, registration, and end-to-end documentation for a stress-free experience.",
    },
  ];

  return (
    <motion.div
      key="services"
      className="flex flex-col justify-start items-start px-6 py-12 min-h-screen bg-rnr-light-background"
    >
      {!isMobile && <CustomCursor type={selectedCursor} />}

      {/* Heading */}
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold mb-2 text-rnr-light-heading font-main"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
      >
        Our Services
      </motion.h1>

      <Border />

      {/* Subheading */}
      <motion.p
        className="text-lg text-rnr-light-text-muted font-light mb-10 max-w-2xl"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
      >
        At Roots and Roofs, we offer a range of real estate solutions designed
        to meet the needs of home buyers, investors, sellers, and property
        owners. Here’s what we do:
      </motion.p>

      {/* Services List */}
      <motion.div
        className="grid md:grid-cols-2 gap-8 w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        transition={{ staggerChildren: 0.2 }}
      >
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
            className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-rnr-light-border shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-xl md:text-2xl font-semibold mb-2 text-rnr-light-accent">
              {service.title}
            </h2>
            <p className="text-rnr-light-text-muted font-light text-base leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </motion.div>

      <TransitionDiv />
    </motion.div>
  );
}

export default Services;
