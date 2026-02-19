function Header({onToggleSideBar}) {
    return (
        <div>
            <button onClick={onToggleSideBar} className="menu-button">☰</button>
            <span></span>
            <span></span>
            <span></span>
        </div>
        
    )
}
export default Header;//هذا يخفي ال sidebar 