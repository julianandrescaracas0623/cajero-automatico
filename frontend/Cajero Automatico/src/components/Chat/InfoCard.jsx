import { motion } from "framer-motion";
import PropTypes from "prop-types";

const InfoCard = ({ title, content }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    transition={{ duration: 0.5 }}
    className="bg-white rounded-lg p-3 text-sm border border-black"
  >
    <p>{title}:</p>
    <p className="font-medium">{content}</p>
  </motion.div>
);

InfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
};

export default InfoCard;
