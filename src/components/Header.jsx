function Header({ handleHomeClick }) {
    return (
        <header id="header">
            <div className="parent">
                <a className="child" href="/" onClick={handleHomeClick} value="home">
                    <h1 className="child">image.pngDenver Discount Drinks</h1>
                </a>
                <a className="child" href="/specials/submit">
                    <button title={"Submit New Happy Hour Special"} className="headerButton">Submit New Happy Hour</button>
                </a>
                <a className="child" href="/admin">
                    <button title={"Go to Admin Page"} className="headerButton">Admin Page</button>
                </a>
                <br></br>
            </div>
        </header>
    )
}

export default Header