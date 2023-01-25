import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link, useHistory } from 'react-router-dom'

function SpecialDetail({ onDeleteSpecial }) {
    const [special, setSpecial] = useState([])
    const { id } = useParams()
    const history = useHistory()
    
    useEffect(() => {
        fetch(`http://localhost:3000/specials/${id}`)
        .then((r) => r.json())
        .then((special) => {
            setSpecial(special)
        })
    },[id])

    function handleDelete() {
        if (confirm("Are you sure you want to delete this special?") == true) {
        fetch(`http://localhost:3000/specials/${id}`, {
            method: "DELETE",
        })
        .then(onDeleteSpecial(special))
        }
    }

    return (
        <>        
        <div>
        <h1>{special.locationName}</h1>
        <h3>Happy Hour: {special.hHHours}</h3>
        <h2 className="specials">{special.hHSpecials}</h2>
        <img src={special.locationImage} alt={special.locationName} width={"400"}/>
        <br></br>
        <h3>{special.locationAddress}</h3>
        <h3>{special.locationNeighborhood}</h3>
        <a href={special.locationURL}>Website</a>
        <br></br>
        <Link to={`/specials/${special.id}/edit`}>
            <button title={"Edit"}>Edit</button>
        </Link>
        <button title={"Delete"} onClick={handleDelete}>🗑️</button>
    </div></>
    )
}

export default SpecialDetail