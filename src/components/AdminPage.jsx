import { useState, useEffect } from "react"
import CardReview from "./CardReview"

function AdminPage() {

    const [needsReview, setNeedsReview] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/specials`)
        .then((r) => r.json())
        .then((data) => {
            const needsReviewTrue = data.filter(special => {
                return (special.needsReview === "true")
            })
            setNeedsReview(needsReviewTrue)
        })
    },[])

    function onReview(reviewedSpecial) {
        setNeedsReview(needsReview.filter(special => {
            return (special.id !== reviewedSpecial.id)
        }))
    }

    return (
        <ul className="cards">
            {needsReview.map(special => {
            return (<CardReview key={special.id} special={special} onReview={onReview}/>)
            })
            }   
        </ul>
    )
}

export default AdminPage