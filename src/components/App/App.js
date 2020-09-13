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

  componentDidMount() {
    const isContacts = localStorage.getItem('contacts');

    if (isContacts) {
      this.setState({ contacts: JSON.parse(isContacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }

    if (prevState.contacts === this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

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
          return {
            contacts: [...prevState.contacts, contact],
          };
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
    this.setState({ filter: '', name: '', number: '' });
  };

  render() {
    const { contacts } = this.state;
    const visibleContacts = this.getVisibleContacts();
    const isShowFilter = contacts.length > 1;
    const isShowContacts = visibleContacts.length > 0;

    return (
      <section className={s.phonebook}>
        <h1 className={s.title}>Phonebook</h1>

        <ContactForm
          stateData={this.state}
          onChange={this.getInputData}
          onCreateContact={this.createContact}
        />

        <h2 className={s.title}>Contacts</h2>

        {isShowFilter && (
          <Filter stateData={this.state} onChange={this.getInputData} />
        )}

        {isShowContacts && (
          <ContactList
            visibleContacts={visibleContacts}
            onRemoveContact={this.removeContact}
          />
        )}

        {!isShowContacts && <p className={s.noContacts}>No contact</p>}
      </section>
    );
  }
}

export default App;
