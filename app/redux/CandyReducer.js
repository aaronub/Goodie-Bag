import axios from 'axios';

//action type 
const GET_CANDY = 'GET_CANDY'
const UPDATE_QUANTITY = 'UPDATE_QUANTITY'

//action creator
const getCandy = (candy) => ({
    type: GET_CANDY,
    candy,
})
const updateQuantity = (candy)=>({
    type:UPDATE_QUANTITY,
    candy,
})

//thunk
export const _getCandy = (id) => {
    return async (dispatch) => {
        // also {data} ??????????????
      const { data } = await axios.get(`/api/candies/${id}`);
    //   console.log('data:', data)
      dispatch(getCandy(data));
    };
};

export const increaseQuantity = (id) => {
    return async (dispatch) => {
        // also {data} ??????????????
      const { data } = await axios.put(`/api/candies/${id}/increase`);
      console.log('data:', data)
      dispatch(updateQuantity(data));
    };
};



const initState = {}
// reducer function 
const CandyReducer = (state=initState, action) => {
    switch (action.type) {
        case GET_CANDY:
            return action.candy;

        case UPDATE_QUANTITY:
            return action.candy;
        
        default:
            return state;
    }

}

export default CandyReducer;