function HeaderAdmin({ handleHomeClick }) {
    return (
    <header id="header">
        <div>
            <h1 className="child">Administrative Access</h1>
            <a className="child" href="/" onClick={handleHomeClick} value="home">
                <button className="headerButton">Exit Admin Mode</button>
            </a>
        </div>
    </header>
    )
}

export default HeaderAdmin