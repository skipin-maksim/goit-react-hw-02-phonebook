import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import notification from 'toastr';

import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';

import s from './App.module.scss';

const INITIAL_STATE = {
  contacts: [],
  filter: '',
  name: '',
  number: '',
};

class App extends Component {
  state = { ...INITIAL_STATE };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  getInputData = (name, value) => this.setState({ [name]: value });

  createContact = e => {
    e.preventDefault();

    const { name, number } = this.state;

    if (name && number) {
      const isContact = this.state.contacts.find(el => {
        if (el.name.toLowerCase() === name.toLowerCase()) {
          notification['info'](
            'A contact with the same Name already exists',
            'Info',
          );
          return true;
        }
        return false;
      });

      if (!isContact) {
        const contact = {
          id: uuidv4(),
          name: name,
          number: number,
        };

        this.setState(prevState => {
          return prevState.contacts.push(contact);
        });

        this.reset();
      }
    } else {
      notification['error']('You did not enter a Name or Number', 'Error');
    }
  };

  removeContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId,
        ),
      };
    });
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  isRenderContactList = () => {
    const visibleContacts = this.getVisibleContacts();

    if (visibleContacts.length > 0) {
      return (
        <ContactList
          visibleContacts={visibleContacts}
          onRemoveContact={this.removeContact}
        />
      );
    } else {
      return <p className={s.noContacts}>No contact</p>;
    }
  };

  isRenderFilter = () => {
    if (this.state.contacts.length > 0) {
      return (
        <Filter stateData={this.state} onGetInputData={this.getInputData} />
      );
    }
  };

  render() {
    return (
      <section className={s.phonebook}>
        <h1 className={s.title}>Phonebook</h1>
        <ContactForm
          stateData={this.state}
          onGetInputData={this.getInputData}
          onCreateContact={this.createContact}
        />
        <h2 className={s.title}>Contacts</h2>

        {this.isRenderFilter()}
        {this.isRenderContactList()}
      </section>
    );
  }
}

export default App;
