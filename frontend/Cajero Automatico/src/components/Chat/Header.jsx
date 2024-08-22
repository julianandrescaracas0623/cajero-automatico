import Menu from "./Menu";
import PropTypes from "prop-types";

const Header = ({ isMenuOpen, toggleMenu, onReportClick }) => (
  <header className="sticky top-0 z-10 flex items-center gap-3 px-4 py-3 bg-white border border-black shadow">
    <div className="w-8 h-8 border border-black rounded-full overflow-hidden">
      <img
        src="../../../public/img/logo.webp"
        alt="Logo"
        className="object-cover w-full h-full"
      />
    </div>
    <div className="flex-1">
      <div className="font-medium">Asistente Bancolombia</div>
      <div className="text-xs text-gray-500">Online</div>
    </div>
    <Menu
      isMenuOpen={isMenuOpen}
      toggleMenu={toggleMenu}
      onReportClick={onReportClick}
    />
  </header>
);

Header.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
  onReportClick: PropTypes.func.isRequired,
};

export default Header;
