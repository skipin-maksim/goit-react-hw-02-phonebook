import React, { Suspense, Component, lazy } from 'react';
import { Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import routes from '../../routes';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import PublicRoute from '../PublicRoute/PublicRoute';
import Layout from '../Layout/Layout';
import NavBar from '../NavBar/NavBar';
import Spinner from '../Spinner/Spinner';
import authOperations from '../../redux/auth/authOperations';

const AsyncHomePage = lazy(() =>
  import('../../views/HomeView' /* webpackChunkName: "home-page" */),
);

const AsyncContactsPage = lazy(() =>
  import('../../views/ContactsView' /* webpackChunkName: "contacts-page" */),
);

const AsyncLoginPage = lazy(() =>
  import('../../views/LoginView' /* webpackChunkName: "login-page" */),
);

const AsyncRegistrationPage = lazy(() =>
  import(
    '../../views/RegistrationView' /* webpackChunkName: "registartion-page" */
  ),
);

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }
  render() {
    return (
      <Layout>
        <NavBar />
        <Suspense fallback={<Spinner />}>
          <Switch>
            <PublicRoute
              path={routes.HomePage}
              exact
              component={AsyncHomePage}
              restricted={false}
            />

            <PrivateRoute
              path={routes.ContactsPage}
              component={AsyncContactsPage}
            />

            <PublicRoute
              path={routes.LoginPage}
              component={AsyncLoginPage}
              restricted={true}
            />
            <PublicRoute
              path={routes.RegistrationPage}
              component={AsyncRegistrationPage}
              restricted={true}
            />
          </Switch>
        </Suspense>
      </Layout>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.currentUser,
};

export default connect(null, mapDispatchToProps)(App);
