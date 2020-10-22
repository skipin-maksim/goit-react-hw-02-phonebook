import React from 'react';
import { connect } from 'react-redux';

import contactsActions from '../../redux/contacts/contactsActions';

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

const mapStateToProps = (state, ownProps) => {
  const contact = state.contacts.items.find(item => item.id === ownProps.id);

  return { ...contact };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onRemoveContact: () => dispatch(contactsActions.removeContact(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactItem);
