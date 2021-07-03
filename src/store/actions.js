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
  return  async (dispatch) => {
    console.log('here')
    const response = await fetch("http://localhost:3001/accounts");
    const responseData = await response.json();
    let customerInfo = responseData.filter((x) => x.customer_id === data);
    console.log(customerInfo)
    dispatch(customer());
  };
};

export const doLogin = () => {
  return (dispatch) => {
  
    dispatch(login());
  };
};

export const customer = (data) => {
  return {
    type: "ADD_CUSTOMER",
    payload: data,
  };
};
