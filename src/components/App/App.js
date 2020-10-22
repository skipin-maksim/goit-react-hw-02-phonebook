import React from 'react';
import { connect } from 'react-redux';

import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';

import s from './App.module.scss';

const App = ({ contactsItems }) => {
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
};

const mapStateToProps = state => ({
  contactsItems: state.contacts.items,
});

export default connect(mapStateToProps)(App);
