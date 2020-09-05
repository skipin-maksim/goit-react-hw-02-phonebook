import React, { Component } from 'react';

import s from './ContactItem.module.scss';

class ContactItem extends Component {
  render() {
    const { visibleContacts, onRemoveContact } = this.props;

    return visibleContacts.map((el, idx) => {
      return (
        <li key={el.id} className={s.contactItem}>
          <div className={s.dataBlock}>
            <span className={s.sequentialТumber}>{idx + 1}</span>
            <span className={s.name}>{el.name}</span>
            <span className={s.phoneNumber}>{el.number}</span>
          </div>

          <button
            className={s.removeBtn}
            type="button"
            onClick={() => onRemoveContact(el.id)}
          >
            Delete
          </button>
        </li>
      );
    });
  }
}

export default ContactItem;
