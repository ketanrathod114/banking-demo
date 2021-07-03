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

export const doLogin = () => {
  return (dispatch) => {
    dispatch(login());
  };
};

export const addCustomer = (data) => {
  return async (dispatch) => {
    const response = await fetch("http://localhost:3001/accounts");
    const responseData = await response.json();
    let customerInfo = responseData.filter((x) => x.customer_id === data);
    dispatch(customer(...customerInfo));
  };
};

export const customer = (data) => {
  return {
    type: "ADD_CUSTOMER",
    payload: data,
  };
};
