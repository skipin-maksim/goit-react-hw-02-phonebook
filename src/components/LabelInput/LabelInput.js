import React from 'react';

import s from './LabelInput.module.scss';

const LabelInput = ({ stateData, title, name, onChange }) => {
  return (
    <label className={s.labelFind}>
      <span>{title}</span>
      <input
        className={s.inputFind}
        type="text"
        name={name}
        value={stateData[name]}
        onChange={e => onChange(e.target.name, e.target.value)}
      />
    </label>
  );
};

export default LabelInput;
