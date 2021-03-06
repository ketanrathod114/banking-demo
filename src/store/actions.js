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
    // dispatch(fetchTransaction())
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
export const deductAmount = (data) => {
  return {
    type: "DEDUCT_AMOUNT",
    payload: data,
  };
};


export const transactions = (data) => {
  // console.log('here')
  return {
    type: "ALL_TRANSCATIONS",
    payload: data,
  };
};
export const addTransactions = (data) => {
  return {
    type: "ADD_TRANSACTIONS",
    payload: data,
  };
};

