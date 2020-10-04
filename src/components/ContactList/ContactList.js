import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import ContactItem from './ContactItem';

import scale from '../../animations/scale.module.scss';

const ContactList = ({ visibleContacts, onRemoveContact }) => {
  return (
    <TransitionGroup component="ul" className="ContactList">
      {visibleContacts.map(({ id, ...otherProps }, idx) => {
        return (
          <CSSTransition key={id} timeout={250} classNames={scale}>
            <ContactItem
              idx={idx}
              id={id}
              onRemoveContact={onRemoveContact}
              {...otherProps}
            />
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
};

export default ContactList;
