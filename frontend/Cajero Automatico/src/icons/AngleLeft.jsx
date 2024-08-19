import { motion } from "framer-motion";
import PropTypes from "prop-types";

const AngleLeft = ({ onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20, scale: 1 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{
        duration: 0.5,
        type: "spring",
        damping: 10,
        stiffness: 100,
      }}
      whileHover={{
        scale: 1.2,
        x: -10,
      }}
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-big-left-line"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 15v3.586a1 1 0 0 1 -1.707 .707l-6.586 -6.586a1 1 0 0 1 0 -1.414l6.586 -6.586a1 1 0 0 1 1.707 .707v3.586h6v6h-6z" />
        <path d="M21 15v-6" />
      </svg>
    </motion.div>
  );
};

AngleLeft.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AngleLeft;
