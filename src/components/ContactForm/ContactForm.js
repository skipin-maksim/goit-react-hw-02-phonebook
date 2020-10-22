import React, { Component } from 'react';
import { connect } from 'react-redux';
import notification from 'toastr';

import contactsActions from '../../redux/contacts/contactsActions';
import LabelInput from '../LabelInput/LabelInput';

import s from './ContactForm.module.scss';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  getInputData = (name, value) => this.setState({ [name]: value });

  addContact = e => {
    e.preventDefault();

    const { name, number } = this.state;

    if (name && number) {
      const isContact = this.props.contactsItems.find(el => {
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
        this.props.onAddContact(this.state.name, this.state.number);

        this.setState({ name: '', number: '' });
      }
    } else {
      notification['error']('You did not enter a Name or Number', 'Error');
    }
  };

  render() {
    return (
      <form className={s.contactForm} onSubmit={this.addContact}>
        <div className={s.wrapper}>
          <LabelInput
            title="Name"
            name="name"
            stateData={this.state}
            onGetInputData={this.getInputData}
          />
          <LabelInput
            title="Number"
            name="number"
            stateData={this.state}
            onGetInputData={this.getInputData}
          />
        </div>

        <button className={s.btnForm} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  contactsItems: state.contacts.items,
});

const mapDispatchToProps = {
  onAddContact: contactsActions.createContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);