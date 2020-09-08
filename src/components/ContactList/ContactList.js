import React from 'react';

import ContactItem from './ContactItem';

const ContactList = ({ visibleContacts, onRemoveContact }) => {
  return (
    <ul className="ContactList">
      {visibleContacts.map(({ id, ...otherProps }, idx) => {
        return (
          <ContactItem
            key={id}
            idx={idx}
            id={id}
            onRemoveContact={onRemoveContact}
            {...otherProps}
          />
        );
      })}
    </ul>
  );
};

export default ContactList;
