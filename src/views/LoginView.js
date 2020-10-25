import React, { Component } from 'react';

import s from './views.module.scss';

class LoginView extends Component {
  state = {
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
      email: '',
      password: '',
    });
  };

  render() {
    const { email, password } = this.state;
    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <h2>Login form</h2>

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
          Login
        </button>
      </form>
    );
  }
}

export default LoginView;
