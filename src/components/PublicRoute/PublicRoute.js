import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

import authSelectors from '../../redux/auth/authSelectors';
import routes from '../../routes';

function PublicRoute({
  component: Component,
  isLogin,
  restricted,
  ...routeProps
}) {
  return (
    <Route
      {...routeProps}
      render={props =>
        isLogin && restricted ? (
          <Redirect to={routes.ContactsPage} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}

const mapStateToProps = state => ({
  isLogin: authSelectors.getIsLogin(state),
});

export default connect(mapStateToProps)(PublicRoute);
