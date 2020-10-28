import React from 'react';
import { connect } from 'react-redux';
import Spinner from '../Spinner/Spinner';

import contactsSelectors from '../../redux/contacts/contactsSelectors';
import contactsOperations from '../../redux/contacts/contactsOperations';
import ContactItem from './ContactItem';

function ContactList({ visibleContacts, isLoading }) {
  const isShowContacts = visibleContacts.length > 0;

  return (
    <>
      {isLoading && <Spinner />}
      {isShowContacts && (
        <ul className="ContactList">
          {visibleContacts.map(({ id }, idx) => {
            return <ContactItem key={id} id={id} idx={idx} />;
          })}
        </ul>
      )}
    </>
  );
}

const mapStateToProps = state => {
  return {
    visibleContacts: contactsSelectors.getVisibleContacts(state),
    isLoading: contactsSelectors.getIsLoading(state),
  };
};

const mapDispathToProps = {
  onFatchContacts: contactsOperations.fetchContacts,
};

export default connect(mapStateToProps, mapDispathToProps)(ContactList);
