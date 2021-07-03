import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import loginReducer from './login';
import customerReducer from './customer';
let rootReducer =  combineReducers({
    login: loginReducer,
    customer: customerReducer
  })
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;