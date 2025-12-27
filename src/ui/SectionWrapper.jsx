import { motion } from "framer-motion";

const SectionWrapper = ({ children }) => {
  return (
    <motion.section
      className="
        max-w-7xl
        mx-auto
        px-4
        sm:px-6
        lg:px-8
        pt-10
        pb-16
      "
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
