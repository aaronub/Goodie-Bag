import { createStore, combineReducers,applyMiddleware } from "redux";
import loggingMiddleware from 'redux-logger'
import CandiesReducer from "./redux/CandiesReducer";
import CandyReducer from "./redux/CandyReducer";
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  candies: CandiesReducer,
  candy: CandyReducer,
})

function configureStore(){
  return createStore(rootReducer, applyMiddleware(thunk, loggingMiddleware))
}

export default configureStore
