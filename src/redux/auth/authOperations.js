import axios from 'axios';

import authActions from './authActions';

const baseIrl = 'https://goit-phonebook-api.herokuapp.com';

const register = credentials => dispatch => {
  dispatch(authActions.registerRequest());

  axios
    .post(`${baseIrl}/users/signup`, credentials)
    .then(res => {
      console.log(res);
      // token.set(res.data.token);
      dispatch(authActions.registerSuccess(res.data));
    })
    .catch(error => {
      dispatch(authActions.registerError(error));
    });
};

export default { register };
