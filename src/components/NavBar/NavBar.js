import React from 'react';
import { NavLink } from 'react-router-dom';

import NavUserMenu from '../NavUserMenu/NavUserMenu';
import AuthBlock from '../AuthBlock/AuthBlock';

import s from './NavBar.module.scss';

export default function NavBar() {
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
          <li>
            <NavLink
              className={s.link}
              activeClassName={s.activeLink}
              to="/contacts"
            >
              Contacts
            </NavLink>
          </li>
        </ul>

        <AuthBlock />
        {/* <NavUserMenu /> */}
      </nav>
    </header>
  );
}
