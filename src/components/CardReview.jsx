function CardReview({ special, onReview }) {
    
    function markReviewed(e) {
        console.log(e)
        fetch(`http://localhost:3000/specials/${special.id}`, {
            method: "PATCH",
            headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        },
        body: JSON.stringify({needsReview: `false`}),
        })
        .then((res) => res.json())
        .then((reviewedSpecial) => {
            onReview(reviewedSpecial)
        })
    }
    
    return (
        <li>
            <a href={`/specials/${special.id}`}>
                    <br></br>
                    <img src={special.locationImage} alt={special.locationName} width={"200"} height={"200"}/>
                    <h3>{special.locationName}</h3>
            </a>
            <button onClick={markReviewed}>Mark as Reviewed</button>
        </li>
    )
}

export default CardReview