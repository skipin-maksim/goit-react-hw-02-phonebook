import React, { Component } from 'react';
import { connect } from 'react-redux';

import authOperations from '../redux/auth/authOperations';

class RegistartionView extends Component {
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
      <form onSubmit={this.handleSubmit}>
        <h2>Registartion form</h2>
        <input
          onChange={this.handleChange}
          type="text"
          name="name"
          value={name}
        />
        <input
          onChange={this.handleChange}
          type="email"
          name="email"
          value={email}
        />
        <input
          onChange={this.handleChange}
          type="password"
          name="password"
          value={password}
        />
        <button type="submit">Registartion</button>
      </form>
    );
  }
}

const mDTP = {
  onRegister: authOperations.register,
};

export default connect(null, mDTP)(RegistartionView);
