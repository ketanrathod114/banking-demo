const initialState = { isLoggedIn: false };

const loginReducer = (state = initialState, action) => {
  if (action.type === "LOGIN") {
    return {
      isLoggedIn: true
    };
  }
  if (action.type === "LOGOUT") {
    return {
      isLoggedIn: false
    };
  }

  return state;
};
export default loginReducer;
