import React from 'react';

import s from './ContactItem.module.scss';

const ContactItem = ({ name, number, id, idx, onRemoveContact }) => {
  return (
    <li className={s.contactItem}>
      <div className={s.dataBlock}>
        <span className={s.sequentialТumber}>{idx + 1}</span>
        <span className={s.name}>{name}</span>
        <span className={s.phoneNumber}>{number}</span>
      </div>

      <button
        className={s.removeBtn}
        type="button"
        onClick={() => onRemoveContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
