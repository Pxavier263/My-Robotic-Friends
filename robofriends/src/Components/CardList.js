import Card from "./Card";


function CardList ({robot}) {
 const cardArray = robot.map((user, i) => {
    return <Card    
                key={robot[i].id}
                id={robot[i].id}
                 name={robot[i].name}
                 email={robot[i].email}
                 />
})
    return (
        <div >
        {cardArray}
        </div>
    )
}
export default CardList;