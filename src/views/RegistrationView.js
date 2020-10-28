import React, { Component } from 'react';
import { connect } from 'react-redux';

import authOperations from '../redux/auth/authOperations';

import s from './views.module.scss';

class RegistrationView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onRegister({ ...this.state });

    this.setState({
      name: '',
      email: '',
      password: '',
    });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <h2>Registration form</h2>
        <label className={s.label}>
          <span>Your name</span>
          <input
            onChange={this.handleChange}
            type="text"
            name="name"
            value={name}
            required
          />
        </label>
        <label className={s.label}>
          <span>Your email</span>
          <input
            onChange={this.handleChange}
            type="email"
            name="email"
            value={email}
            required
          />
        </label>
        <label className={s.label}>
          <span>Your password</span>
          <input
            onChange={this.handleChange}
            type="password"
            name="password"
            value={password}
            required
          />
        </label>

        <button className={(s.btn, s.btnSubmit)} type="submit">
          Registration
        </button>
      </form>
    );
  }
}

const mDTP = {
  onRegister: authOperations.register,
};

export default connect(null, mDTP)(RegistrationView);
