import React from "react";
import {Link} from 'react-router-dom'

const Candy = (props)=>{
    // console.log('props.name:', props.name)
    return(
        <div>
  
            <Link to={`/candies/${props.data.id}`}>{props.data.name}</Link>
            <div>Name:{props.data.name}</div>
            <div>Description:{props.data.description}</div>
            <div>Quantity:{props.data.quantity}</div>
            <img src={props.data.imageUrl}/>
        </div>
    )
}

export default Candy