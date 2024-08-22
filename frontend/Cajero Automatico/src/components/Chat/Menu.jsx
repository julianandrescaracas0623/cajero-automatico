import { motion, AnimatePresence } from "framer-motion";
import MoveHorizontalIcon from "../../icons/MoveHorizontalIcon";
import PdfIcons from "../../icons/PdfIcons";
import ExitIcon from "../../icons/ExitIcons";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Menu = ({ isMenuOpen, toggleMenu, onReportClick }) => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/main_menu");
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="rounded-full p-2 hover:bg-gray-200 focus:outline-none border border-black"
      >
        <MoveHorizontalIcon className="w-4 h-4" />
      </button>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="menu"
            initial={{ opacity: 0, scale: 0.9, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute right-0 mt-2 w-48 bg-white border border-black rounded shadow-lg"
          >
            <div className="py-1">
              <button
                className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                onClick={onReportClick}
              >
                <PdfIcons className="w-2 h-2 mr-2 inline-block" />
                Reporte
              </button>
              <button
                className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                onClick={handleHomeClick}
              >
                <ExitIcon className="w-2 h-2 mr-2 inline-block" />
                Salir
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

Menu.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
  onReportClick: PropTypes.func.isRequired,
};

export default Menu;
