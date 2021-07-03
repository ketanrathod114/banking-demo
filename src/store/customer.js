const initialState = { customer: [] };

const customerReducer = (state = initialState, action) => {
  if (action.type === "ADD_CUSTOMER") {
    return {
      customer: [action.payload]
    };
  }


  return state;
};
export default customerReducer;
