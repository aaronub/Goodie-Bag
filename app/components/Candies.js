import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { _getCandies } from '../redux/CandiesReducer';
import Candy from './Candy'


function Candies(){

    const dispatch = useDispatch();

//dispatch inside thunk function is from candies subreducer, so below useSelector(state=>state.candies)
// should take the 'substate' from that subreducer
     React.useEffect(()=> {
       dispatch(_getCandies());
     }, []);

    const candies = useSelector(state => state.candies)

    return (
        <div>
            {candies.map((itm,idx) => (
                // <Candy key={idx} data={itm}/>
                <Candy key={idx} {...itm}/>
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