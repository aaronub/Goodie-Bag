import React from "react";
import {useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { _getCandy } from "../redux/CandyReducer";
// import { _getCandies } from "../redux/CandiesReducer";
import {increaseQuantity} from '../redux/CandyReducer';


const CandyPage = ()=>{
    const {id} = useParams();
    const dispatch = useDispatch()

    //not working???? why?????????/
    // React.useEffect(()=> {
    //     dispatch(_getCandies());
    //   }, []);
    // const candies = useSelector(state => state.candies)
    // console.log('candies:', candies)
    // const candy = candies.find(itm => Number(params.id) === itm.id)
    // console.log('candy:', candy)

//1, dispatch inside thunk function is from candy subreducer, so below should be useSelector(state=>state.candy)
// should take the 'substate' from candy subreducer, dispatch inside thunk function and useSelector inside 
// 'substate', should be from the same subreducer
//2, Normally singlePage, singleStudent, singleAuthor, should all be loacated with :id, so useParams() is needed
//3, Once click increase button, dispatch thunk function, then axious.put, connecting API router for updating the number
// database updated, then use the returned updated {data} to create action, then dispatch this action, then get to subreducer
// then 'substate' changes, then useSelector(state=>state.candy) respondes, that component re-renders
//4, But for workshop groceris, no APi, no database, once click, action created in the component, then dispatch, then get to 
// the reducer, to update the state, then useSelector() component re-renders
//5, In groceries, useSelector(state=>state.groceries)
// In Goodie Bag: useSelector(state=> state.candy)
// difference is: In groceries, initState the whole was defined as {groceries:[], visFilter: SHOW_ALL}, I think! any property 
// changes, global state changes, then useSelector component re-renders. In Goodie Bag, initial state is {candies:[],candy:{}}, 
// which from 2 subreducers, when dispatch(some thunk function), only get to that subreducer, so that 'substate' changes
// then only useSeletor with that 'substate' component re-renders. So CandyPage quantity changes, in subreducer candy, quanitty
// changes , but in subreducer candies that candy quantity not changeed yet
    React.useEffect(()=> {
        dispatch(_getCandy(id));
      }, []);

    const candy = useSelector(state=> state.candy)

    const handleIncrease = () => {
        dispatch(increaseQuantity(id))
    }

    return(
        <div>
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
