import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import authSelectors from '../../redux/auth/authSelectors';
import NavUserMenu from '../NavUserMenu/NavUserMenu';
import AuthBlock from '../AuthBlock/AuthBlock';
import routes from '../../routes';

import s from './NavBar.module.scss';

function NavBar({ isLogin }) {
  return (
    <header className={s.topHeader}>
      <nav className={s.topNav}>
        <ul className={s.list}>
          <li>
            <NavLink
              exact
              className={s.link}
              activeClassName={s.activeLink}
              to="/"
            >
              Home
            </NavLink>
          </li>
          {isLogin && (
            <li>
              <NavLink
                className={s.link}
                activeClassName={s.activeLink}
                to={routes.ContactsPage}
              >
                Contacts
              </NavLink>
            </li>
          )}
        </ul>

        {isLogin ? <NavUserMenu /> : <AuthBlock />}
      </nav>
    </header>
  );
}

const mapStateToProps = state => ({
  isLogin: authSelectors.getIsLogin(state),
});

export default connect(mapStateToProps)(NavBar);
