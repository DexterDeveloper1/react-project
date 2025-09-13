import type React from "react";
import "./DashboardLayout.css"
import { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const DashboardLayout: React.FC = () => {

    const [open, setOpen] = useState(true);

    return (
        <div className="layout">
            <Sidebar open={open} onToggle={() => setOpen((open) => !open)} />
            <div className="layout-main">
                <Navbar onToggleSidebar={() => setOpen(open => !open)}/>
                <div className="layout-content">
                    <Outlet />
                </div>
            </div>

        </div>
    );
};

export default DashboardLayout