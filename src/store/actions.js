
export const login = () => {
  return {
    type: "LOGIN",
  };
};
export const logout = () => {
  return {
    type: "LOGOUT",
  };
};

export const addCustomer = (data) => {
  return {
    type: "ADD_CUSTOMER",
    payload: data
  };
};



export const doLogin = () => {
  return (dispatch) => {
      dispatch(login());
  };
};
