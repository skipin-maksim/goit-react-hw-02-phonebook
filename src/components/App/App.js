import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Layout from '../Layout/Layout';
import NavBar from '../NavBar/NavBar';
import ContactsView from '../../views/ContactsView';
import HomeView from '../../views/HomeView';
import LoginView from '../../views/LoginView';
import RegistartionView from '../../views/RegistartionView';

export default function App() {
  return (
    <Layout>
      <NavBar />
      <Switch>
        <Route path={'/'} exact component={HomeView} />
        <Route path={'/contacts'} component={ContactsView} />
        <Route path={'/login'} component={LoginView} />
        <Route path={'/registartion'} component={RegistartionView} />
      </Switch>
    </Layout>
  );
}
