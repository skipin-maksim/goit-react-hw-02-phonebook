import React from 'react';
import { connect } from 'react-redux';

import contactsActions from '../../redux/contacts/contactsActions';

import ContactItem from './ContactItem';

const ContactList = ({ visibleContacts, onRemoveContact }) => {
  const isShowContacts = visibleContacts.length > 0;

  return (
    <>
      {isShowContacts && (
        <ul className="ContactList">
          {visibleContacts.map(({ id }, idx) => {
            return (
              <ContactItem
                key={id}
                id={id}
                idx={idx}
                // onRemoveContact={onRemoveContact}
                // {...otherProps}
              />
            );
          })}
        </ul>
      )}
    </>
  );
};

const mapStateToProps = state => {
  const { items, filter } = state.contacts;
  const normalizedFilter = filter.toLowerCase();

  const filteredContacts = items.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );

  return { visibleContacts: filteredContacts };
};

// const mapDispatchToProps = {
//   onRemoveContact: contactsActions.removeContact,
// };

export default connect(mapStateToProps)(ContactList);
