import React from 'react';
import { NavLink } from 'react-router-dom';

import s from '../NavBar/NavBar.module.scss';
import routes from '../../routes';

export default function AuthBlock() {
  return (
    <ul className={s.list}>
      <li>
        <NavLink className={s.link} activeClassName={s.activeLink} to="/login">
          Login
        </NavLink>
      </li>
      <li>
        <NavLink
          className={s.link}
          activeClassName={s.activeLink}
          to={routes.RegistrationPage}
        >
          Registration
        </NavLink>
      </li>
    </ul>
  );
}
