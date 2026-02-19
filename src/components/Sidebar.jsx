function SideBar({activePage, onPageChange, onLogout}) {
    const navitems = [
        {id: "Dashboard ", label: " Dashboard"},
        { id: "products", label: "products" },
        {id: "Orders", label: " Orders "},
        {id: "Books", label: " Books "},
        
        
    ];
    return (
        <aside className="sidebar">
            <h4> Knowledge Shelves</h4>
            <nav>
                <ul className="nav-list">
                    {navitems.map((item) => (
                        <li key={item.id} className={activePage === item.id ? "nav-item active" : "nav-item"} onClick={() => onPageChange(item.id)}>{item.label}</li>
                        
                    ))}
                    <button  className="nav-item logout" onClick={onLogout}>Logout</button>
                </ul>
            </nav>

        </aside>
    )
}
export default SideBar;