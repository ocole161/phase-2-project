import Card from "./Card"

function CardList({ specials }) {
    return (
        <ul className="cards">
            {specials.map(special => {
                return <Card key={special.id} special={special}/>
                })
            }   
        </ul>
    )
}


export default CardList