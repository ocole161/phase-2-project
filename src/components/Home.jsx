import CardList from "./CardList"

function Home({ specials, handleClick}) {

    return (
        <div>
            <br></br>
            <label className="largeLabel">Neighborhood: </label>
            <button onClick={handleClick} value="Home">All</button>
            <button onClick={handleClick} value="LoDo">LoDo</button>
            <button onClick={handleClick} value="LoHi">LoHi</button>
            <button onClick={handleClick} value="RiNo">RiNo</button>
            <br></br>
            <CardList specials={specials} />
        </div>
    )
}

export default Home