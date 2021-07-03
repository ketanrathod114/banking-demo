const initialState = { customer: [] };

const loginReducer = (state = initialState, action) => {
  if (action.type === "ADD_CUSTOMER") {
    return {
      customer: [action.payload]
    };
  }


  return state;
};
export default loginReducer;
