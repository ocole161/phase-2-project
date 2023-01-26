function HeaderNoSubmit({ handleHomeClick }) {
    return (
    <header id="header">
        <div>
            <a className="child" href="/" onClick={handleHomeClick} value="home">
                <h1 className="child">Denver Discount Drinks!</h1>
            </a>
            <a className="child" href="/admin">
                <button title={"Go to Admin Page"} className="headerButton">Admin Page</button>
            </a>
            <br></br>
            <h2>Submit a New Happy Hour Special:</h2>
        </div>
    </header>
    )
}

export default HeaderNoSubmit