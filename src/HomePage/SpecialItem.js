const SpecialItem = ({item})=>{
    
    return(
        <div className="item-card" key={item.id}>
            <img src={item.img}></img>
            <div className="item-card-text">
            <div className="specials-head">
            <p className="card-title">{item.name}</p>
            <p>${item.price}</p>
            </div>
            <p>{item.description}</p>
            </div>
            <a>Order a delivery</a>
        </div>
    )
}

export default SpecialItem;