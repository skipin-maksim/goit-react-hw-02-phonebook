import React, { Component } from 'react';
import { connect } from 'react-redux';

import contactsSelectors from '../redux/contacts/contactsSelectors';

import ContactForm from '../components/ContactForm/ContactForm';
import Filter from '../components/Filter/Filter';
import ContactList from '../components/ContactList/ContactList';

import contactsOperations from '../redux/contacts/contactsOperations';

import s from '../components/App/App.module.scss';

class ContactsView extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }

  render() {
    const isShowContacts = this.props.contactsItems.length > 0;

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
}

const mapStateToProps = state => ({
  contactsItems: contactsSelectors.getContacts(state),
});

const mapDispathToProps = {
  onFetchContacts: contactsOperations.fetchContacts,
};

export default connect(mapStateToProps, mapDispathToProps)(ContactsView);
