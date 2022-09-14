import React from "react";
import {Link} from 'react-router-dom'

// const Candy = (props)=>{
const Candy = ({id, name, description, quantity, imageUrl})=>{
    return(
        <div>  
            <Link to={`/candies/${id}`}>{name}</Link>
            <div>Name:{name}</div>
            <div>Description:{description}</div>
            <div>Quantity:{quantity}</div>
            <img src={imageUrl}/>
        </div>
        // <div>  
        //     <Link to={`/candies/${props.data.id}`}>{props.data.name}</Link>
        //     <div>Name:{props.data.name}</div>
        //     <div>Description:{props.data.description}</div>
        //     <div>Quantity:{props.data.quantity}</div>
        //     <img src={props.data.imageUrl}/>
        // </div>
    )
}

export default Candy