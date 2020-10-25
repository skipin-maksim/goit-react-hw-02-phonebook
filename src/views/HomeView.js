import React from 'react';

import s from './views.module.scss';

export default function HomeView() {
  return (
    <div className={s.titleBlock}>
      <h1>This is home work №8</h1>
      <h2>Author Skipin Maksim</h2>
      <div className={s.abr}>SM</div>
    </div>
  );
}
