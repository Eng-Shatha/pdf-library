import Header from "../Header";
import MainContent from "../MainContent";
import SideBar from "../Sidebar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function DashBordLayouts() {
    const [showSideBar, setShowSideBar] = useState(true);
    const [activePage, setActivePage] = useState("Home");
    const navigate = useNavigate();
    const toggleSideBar = () => { setShowSideBar(!showSideBar) };
    

    const handleLogout = () => {
        navigate("/Login");
    }


return (

    <div className="layout">

        {showSideBar && <SideBar activePage={activePage} onPageChange={setActivePage} onLogout={handleLogout} />}

        <div>
            <Header onToggleSideBar={toggleSideBar} />
            <MainContent activePage={activePage} />

        </div>
    </div>

)
}
export default DashBordLayouts;