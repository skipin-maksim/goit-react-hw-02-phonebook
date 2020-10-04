import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { CSSTransition } from 'react-transition-group';

import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import Notification from '../Notification/Notification';

import s from './App.module.scss';
import fade from '../../animations/fade.module.scss';
import slide from '../../animations/slide.module.scss';

const INITIAL_STATE = {
  contacts: [],
  filter: '',
  name: '',
  number: '',
  notification: {
    status: false,
    type: '',
    text: '',
  },
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
          const type = 'Info';
          const text = 'A contact with the same Name already exists';

          this.toggleNotificationWithInfo(type, text);

          return true;
        }
        return false;
      });

      if (!isContact) {
        const newContact = {
          id: uuidv4(),
          name: name,
          number: number,
        };

        this.setState(prevState => {
          return {
            contacts: [...prevState.contacts, newContact],
          };
        });

        this.reset();
      }
    } else {
      const type = 'Error';
      const text = 'You did not enter a Name or Number';

      this.toggleNotificationWithInfo(type, text);
    }
  };

  toggleNotificationWithInfo = (type, text) => {
    this.setState({
      notification: {
        status: true,
        type: type,
        text: text,
      },
    });

    setTimeout(() => {
      this.resetStateNotification();
    }, 1500);
  };

  resetStateNotification = () => {
    this.setState({
      notification: {
        ...this.state.notification,
        status: false,
      },
    });
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
    const { contacts, notification } = this.state;
    const { type, text } = notification;
    const visibleContacts = this.getVisibleContacts();
    const isShowFilter = contacts.length > 1;
    const isShowContacts = visibleContacts.length > 0;

    return (
      <>
        {/* {notification.status && <Notification title={title} text={text} />} */}

        <CSSTransition
          in={notification.status}
          classNames={slide}
          timeout={300}
          unmountOnExit
        >
          <Notification type={type} text={text} />
        </CSSTransition>

        <section className={s.phonebook}>
          <h1 className={s.title}>Phonebook</h1>

          <ContactForm
            stateData={this.state}
            onChange={this.getInputData}
            onCreateContact={this.createContact}
          />

          <h2 className={s.title}>Contacts</h2>

          <CSSTransition
            in={isShowFilter}
            classNames={fade}
            timeout={250}
            unmountOnExit
          >
            <Filter stateData={this.state} onChange={this.getInputData} />
          </CSSTransition>

          <ContactList
            visibleContacts={visibleContacts}
            onRemoveContact={this.removeContact}
          />

          {!isShowContacts && <p className={s.noContacts}>No contact</p>}
        </section>
      </>
    );
  }
}

export default App;
