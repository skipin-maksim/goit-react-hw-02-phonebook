import React from 'react';
import { connect } from 'react-redux';

import avatar from '../../assets/images/avatar.jpg';
import authOperations from '../../redux/auth/authOperations';
import authSelectors from '../../redux/auth/authSelectors';

import s from '../NavBar/NavBar.module.scss';

function NavUserMenu({ userName, onLogout }) {
  return (
    <div className={s.list}>
      <span>{userName}</span>

      <img
        className={s.avatar}
        src={avatar}
        alt="userphoto"
        width={40}
        height={40}
      />

      <button onClick={onLogout} className={s.btnLogout} type="button">
        LogOut
      </button>
    </div>
  );
}

const mapStateToProps = state => ({
  userName: authSelectors.getUsername(state),
});

const mapDispatchToProps = {
  onLogout: authOperations.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavUserMenu);
