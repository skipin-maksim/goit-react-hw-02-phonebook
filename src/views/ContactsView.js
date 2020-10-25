import React from 'react';
import { connect } from 'react-redux';

import contactsSelectors from '../redux/contacts/contactsSelectors';

import ContactForm from '../components/ContactForm/ContactForm';
import Filter from '../components/Filter/Filter';
import ContactList from '../components/ContactList/ContactList';

import s from '../components/App/App.module.scss';

function ContactsView({ contactsItems }) {
  const isShowContacts = contactsItems.length > 0;

  return (
    <section className={s.phonebook}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm />
      <Filter />

      <h2 className={s.title}>Contacts</h2>
      <ContactList />
      {!isShowContacts && <p className={s.noContacts}>No contacts</p>}
    </section>
  );
}

const mapStateToProps = state => ({
  contactsItems: contactsSelectors.getContacts(state),
});

export default connect(mapStateToProps)(ContactsView);
