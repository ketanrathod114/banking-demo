import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import loginReducer from './reducer';

const store = createStore(loginReducer, applyMiddleware(thunk));

export default store;