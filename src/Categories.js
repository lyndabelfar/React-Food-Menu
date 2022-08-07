

function Categories(props){
    
    return(
        <div className="categories-div">
            {
                props.categories.map((category)=>{
                    return <button className="select-btn" onClick={()=>{props.filterItems(category)}}>{category}</button>
                })
            }
        </div>
    )

}


export default Categories