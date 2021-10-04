const initialState = { id: "", name: "", balance: "", account: "", branch: "" };

const customerReducer = (state = initialState, action) => {
  if (action.type === "ADD_CUSTOMER") {
    return {
      ...state,
      id: action.payload.customer_id,
      name: action.payload.name,
      balance: action.payload.balance,
      account: action.payload.account_number,
      branch: action.payload.branch_name,
    };
  }
  if(action.type === "DEDUCT_AMOUNT"){
    return{
      ...state,
      balance: state.balance - action.payload
    }
  }

  return state;
};
export default customerReducer;
