import React from "react"
import { useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom"

function EditForm({ onUpdateSpecial }) {
    const { id } = useParams()
    const history = useHistory()
    const [name, setName] = useState("")

    const [formData, setFormData] = useState({
        locationName: "",
        locationImage: "",
        locationNeighborhood: "",
        locationAddress: "",
        locationURL: "",
        hHHours: "",
        hHSpecials: "",
    })

    useEffect(() => {
        fetch(`http://localhost:3000/specials/${id}`)
        .then((r) => r.json())
        .then((special) => {
            setFormData(special)
            setName(special.locationName)
        })
    },[])

    const { locationName, locationImage, locationNeighborhood, locationAddress, locationURL, hHHours, hHSpecials } = formData
    
    function handleChange(e) {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value})
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch(`http://localhost:3000/specials/${id}`, {
            method: "PATCH",
            headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        },
        body: JSON.stringify({...formData, needsReview: `true`}),
        })
        .then((res) => res.json())
        .then((udpatedSpecial) => {
            onUpdateSpecial(udpatedSpecial)
            history.push(`/`)
            window.alert("Thank you for submitting an edit!")
        })
        
    }

    return (
        <>
        <h2>Editing Information for {name}</h2>
        <form onSubmit={handleSubmit}>
            <label>Location Name: </label>
            <input className="regularInput" type="text" name="locationName" placeholder="Location Name" value={locationName} onChange={handleChange} required/>
            <br></br>
            <label>Location Image URL: </label>
            <input className="regularInput" type="text" name="locationImage" placeholder="Image URL" value={locationImage} onChange={handleChange}/>
            <br></br>
            <label>Neighborhood: </label>
            <input type="radio" name="locationNeighborhood" id="lodo" value="LoDo" checked={locationNeighborhood === "LoDo"} onChange={handleChange} />
            <label htmlFor="lodo">LoDo</label>
            <input type="radio" name="locationNeighborhood" id="lohi" value="LoHi" checked={locationNeighborhood === "LoHi"} onChange={handleChange} />
            <label htmlFor="lohi">LoHi</label>
            <input type="radio" name="locationNeighborhood" id="rino" value="RiNo" checked={locationNeighborhood === "RiNo"} onChange={handleChange} />
            <label htmlFor="rino">RiNo</label>
            <br></br>
            <label>Address: </label>
            <input className="regularInput" type="text" name="locationAddress" placeholder="Address" value={locationAddress} onChange={handleChange} />
            <br></br>
            <label>Website: </label>
            <input className="regularInput" type="text" name="locationURL" placeholder="Location Website" value={locationURL} onChange={handleChange} />
            <br></br>
            <label>Happy Hour Times: </label>
            <input className="regularInput" type="text" name="hHours" placeholder="Happy Hour Hours" value={hHHours} onChange={handleChange} required/>
            <br></br>
            <label>Happy Hour Specials: </label>
            <br></br>
            <textarea id="hHSpecials" rows="12" cols="50" type="text" name="hHSpecials" placeholder="Happy Hour Specials" value={hHSpecials} onChange={handleChange} required></textarea>
            <br></br>
            <input type="submit" value="Submit Changes" />
        </form>
        </>
    )
}

export default EditForm