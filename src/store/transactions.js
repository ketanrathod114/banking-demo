const initialState = [];

const transactionsReducer = (state = initialState, action) => {

  if (action.type === "ALL_TRANSACTIONS") {
    return {
      ...state,
     ...action.payload
    };
  }
  if (action.type === "ADD_TRANSACTIONS") {
    return {
      ...state,
      ...action.payload
    };
  }

  return state;
};
export default transactionsReducer;
