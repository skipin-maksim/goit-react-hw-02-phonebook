import React from 'react';
import { NavLink } from 'react-router-dom';

import s from '../NavBar/NavBar.module.scss';

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
          to="/registartion"
        >
          Registration
        </NavLink>
      </li>
    </ul>
  );
}
