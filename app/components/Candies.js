import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { _getCandies } from '../redux/CandiesReducer';
import Candy from './Candy'


function Candies(){

    const dispatch = useDispatch();

     React.useEffect(()=> {
       dispatch(_getCandies());
     }, []);

    const candies = useSelector(state => state.candies)
    // console.log('ln16 candies: Candies.js', candies)

    return (
        <div>
            {candies.map((itm,idx) => (
                <Candy key={idx} data={itm}/>
                // <div key={idx}>
                //     <div>Name:{itm.name}</div>
                //     <div>Description:{itm.description}</div>
                //     <div>Quantity:{itm.quantity}</div>
                //     <img src={itm.imageUrl}/>
                // </div>
            ))}
        </div>
    )
}

export default Candies