const getIsLogin = state => state.auth.token;

const getUsername = state => state.auth.user.email;
const getError = state => state.error;

export default {
  getIsLogin,
  getUsername,
  getError,
};
