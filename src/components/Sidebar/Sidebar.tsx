import type React from "react"
import "./Sidebar.css"
import { NavLink } from "react-router-dom";

export interface SidebarProps {
    open: boolean;
    onToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, onToggle }) => {
    return (
        <aside className={`sidebar ${open ? "open" : "closed"}`}>
            <div className="sidebar-header">
                {open ? <span>Menu</span> : ""}
                <button className="icon-btn" onClick={onToggle}>
                    {open ? 
                    <i className="fa-solid fa-left-long"></i>
                    : <i className="fa-solid fa-right-long"></i>}
                </button>
            </div>

            <nav className="sidebar-nav">
                <NavLink to="/inventory" className={({isActive}) => (isActive ? "active" : "")}>{open ? "Inventory" : <i className="fa-solid fa-boxes-packing"></i>}</NavLink>

                <NavLink to="/reports" className={({isActive}) => (isActive ? "active" : "")}>{open ? "Reports" : <i className="fa-solid fa-chart-simple"></i>}</NavLink>

                <NavLink to="/settings" className={({isActive}) => (isActive ? "active" : "")}>{open ? "Settings" : <i className="fa-solid fa-gear"></i>}</NavLink>
            </nav>
        </aside>
    )
}

export default Sidebar;