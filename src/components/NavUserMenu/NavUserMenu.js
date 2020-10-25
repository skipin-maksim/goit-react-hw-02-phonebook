import React from 'react';

import avatar from '../../assets/images/avatar.jpg';

import s from '../NavBar/NavBar.module.scss';

export default function NavUserMenu() {
  return (
    <div className={s.list}>
      <button className={s.btnLogout} type="button">
        LogOut
      </button>

      <img
        className={s.avatar}
        src={avatar}
        alt="userphoto"
        width={40}
        height={40}
      />
    </div>
  );
}
