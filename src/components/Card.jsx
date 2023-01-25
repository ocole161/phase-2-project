function Card({ special }) {
    return (
        <a href={`/specials/${special.id}`}>
            <li>
                <br></br>
                <img src={special.locationImage} alt={special.locationName} width={"200"} height={"200"}/>
                <h3>{special.locationName}</h3>
            </li>
        </a>
    )
}

export default Card