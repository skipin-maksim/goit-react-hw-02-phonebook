import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

import authSelectors from '../../redux/auth/authSelectors';
import routes from '../../routes';

function PrivateRoute({ component: Component, isLogin, ...routeProps }) {
  return (
    <Route
      {...routeProps}
      render={props =>
        isLogin ? <Component {...props} /> : <Redirect to={routes.LoginPage} />
      }
    />
  );
}

const mapStateToProps = state => ({
  isLogin: authSelectors.getIsLogin(state),
});

export default connect(mapStateToProps)(PrivateRoute);
