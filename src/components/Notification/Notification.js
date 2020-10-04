import React from 'react';

import s from './Notification.module.scss';

export default function Notification({ type, text }) {
  return (
    <div className={s[`Notification${type}`]}>
      <p className={s.title}>{type}</p>
      <p className={s.text}>{text}</p>
    </div>
  );
}
