import React from "react"
import {v4 as uuid} from "uuid"

function SubmitForm({ addNewSpecial }) {

    function handleSubmit(e) {
        e.preventDefault();
        const formElement = e.target;

        const newSpecialData = {
            id: uuid(),
            locationName: formElement["location"].value,
            locationImage: formElement["image"].value,
            locationNeighborhood: formElement["neighborhood"].value,
            locationAddress: formElement["address"].value,
            locationURL: formElement["url"].value,
            hHHours: formElement["hours"].value,
            hHSpecials: formElement["specials"].value,
            needsReview: "true"
        }
        addNewSpecial(newSpecialData)
        formElement.reset()
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Location Name: </label>
            <input className="regularInput" type="text" name="location" placeholder="Location Name" required/>
            <br></br>
            <label>Location Image URL: </label>
            <input className="regularInput" type="url" name="image" placeholder="Image URL" />
            <br></br>
            <label>Neighborhood: </label>
            <input type="radio" name="neighborhood" id="lodo" value="LoDo" />
            <label htmlFor="lodo">LoDo</label>
            <input type="radio" name="neighborhood" id="lohi" value="LoHi" />
            <label htmlFor="lohi">LoHi</label>
            <input type="radio" name="neighborhood" id="rino" value="RiNo"/>
            <label htmlFor="rino">RiNo</label>
            <br></br>
            <label>Address: </label>
            <input className="regularInput" type="text" name="address" placeholder="Address" />
            <br></br>
            <label>Website: </label>
            <input className="regularInput" type="url" name="url" placeholder="Website" />
            <br></br>
            <label>Happy Hour Times: </label>
            <input className="regularInput" type="text" name="hours" placeholder="Happy Hour Hours" required/>
            <br></br>
            <label>Happy Hour Specials: </label>
            <br></br>
            <textarea  id="hHSpecials" rows="12" cols="50" type="text" name="specials" placeholder="Happy Hour Specials" required></textarea>
            <br></br>
            <input type="submit" value="Add" />
        </form>
    )
}

export default SubmitForm