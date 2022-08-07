


function Menu(props){
    return(
        <div className="menu-div">
            <img className="food-img" src={props.item.img}/>
            <div className="infos">
                <div className="top-infos">
                    <h3 className="title">{props.item.title}</h3>
                    <div className="price">{'$'+props.item.price}</div>
                </div>
                <p className="description">{props.item.desc}</p>
            </div>
        </div>
    )
}


export default Menu