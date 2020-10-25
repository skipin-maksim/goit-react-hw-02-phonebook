import React from 'react';
import InputMask from 'react-input-mask';

import s from '../LabelInput/LabelInput.module.scss';

export default function MaskNumber({ stateData, title, name, onGetInputData }) {
  return (
    <label className={s.labelFind}>
      <span>{title}</span>
      <InputMask
        autoFocus={false}
        className={s.inputFind}
        mask="+99-999-999-99-99"
        maskPlaceholder={''}
        type="text"
        name={name}
        value={stateData[name]}
        onChange={e => {
          onGetInputData(e.target.name, e.target.value);
        }}
      />
    </label>
  );
}
