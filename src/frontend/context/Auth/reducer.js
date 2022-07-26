export const authReducer = (authState, { type, payload: { user, token } }) => {
  switch (type) {
    case "LOGIN": {
      return { ...authState, user: user, token: token };
    }
    case "SIGNUP": {
      return { ...authState, user: user, token: token };
    }
    case "LOGOUT":
      return { ...authState, user: null, token: null };
    default:
      return authState;
  }
};
