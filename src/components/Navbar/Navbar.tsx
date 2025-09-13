import { useTheme } from "../../context/ThemeContext";
import "./Navbar.css"

export interface NavbarProps {
    onToggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onToggleSidebar }) => {
    const {theme, toggleTheme} = useTheme();
    return (
        <nav className="navbar">
            <button className="icon-btn" onClick={onToggleSidebar}><i className="fa-solid fa-bars"></i></button>
            <div className="brand">Inventory Dashboard</div>
            <button className="icon-btn" onClick={toggleTheme} aria-label="Toggle Theme">
                {theme === "light" ? <i className="fa-solid fa-moon"></i> : <i className="fa-solid fa-sun"></i>}
            </button>
        </nav>
    )
}

export default Navbar;