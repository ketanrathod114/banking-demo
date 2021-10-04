import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import loginReducer from "./login";
import customerReducer from "./customer";
import transactionsReducer from "./transactions"

let rootReducer = combineReducers({
  login: loginReducer,
  customer: customerReducer,
  transactions: transactionsReducer
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
