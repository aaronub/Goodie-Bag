import axios from 'axios';

//action type 
const GET_CANDIES = 'GET_CANDIES'

//action creator
const getCandies = (candies) => ({
    type: GET_CANDIES,
    candies,
})

//thunk
export const _getCandies = () => {
    return async (dispatch) => {
      const { data } = await axios.get('/api/candies');
    //   console.log('data:', data)
      dispatch(getCandies(data));
    };
};

const initState = []
// reducer function 
const CandiesReducer = (state=initState, action) => {
    switch (action.type) {
        case GET_CANDIES:
            return action.candies;
        
        default:
            return state;
    }

}

export default CandiesReducer;