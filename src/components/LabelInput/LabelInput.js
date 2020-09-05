import React, { Component } from 'react';

import s from './LabelInput.module.scss';

class LabelInput extends Component {
  render() {
    const { stateData, title, name, onGetInputData } = this.props;

    return (
      <label className={s.labelFind}>
        <span>{title}</span>
        <input
          className={s.inputFind}
          type="text"
          name={name}
          value={stateData[name]}
          onChange={e => onGetInputData(name, e.target.value)}
        />
      </label>
    );
  }
}

export default LabelInput;
