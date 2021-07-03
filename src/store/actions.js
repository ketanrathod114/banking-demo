
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
