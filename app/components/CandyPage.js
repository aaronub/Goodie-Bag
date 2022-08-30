import React from "react";
import {useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { _getCandy } from "../redux/CandyReducer";
// import { _getCandies } from "../redux/CandiesReducer";
import {increaseQuantity} from '../redux/CandyReducer';


const CandyPage = ()=>{
    const params = useParams();
    const dispatch = useDispatch()

    //not working???? why?????????/
    // React.useEffect(()=> {
    //     dispatch(_getCandies());
    //   }, []);
    // const candies = useSelector(state => state.candies)
    // console.log('candies:', candies)
    // const candy = candies.find(itm => Number(params.id) === itm.id)
    // console.log('candy:', candy)

    React.useEffect(()=> {
        dispatch(_getCandy(params.id));
      }, []);

    const candy = useSelector(state=> state.candy)
    // console.log('state.candy', candy)

    const handleIncrease = (event) => {
        dispatch(increaseQuantity(params.id))
    }

    return(
        <div>
            {/* hiiiii */}
            <div>Name:{candy.name}</div>
            <div>Description:{candy.description}</div>
            <div>Quantity:{candy.quantity}</div>
            <img src={candy.imageUrl}/>
            <button onClick={handleIncrease}>Increase by 1</button>
            <button>Decrease by 1</button>
        </div>
    )
}


export default CandyPage;
