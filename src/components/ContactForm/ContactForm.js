import React, { Component } from 'react';

import LabelInput from '../LabelInput/LabelInput';

import s from './ContactForm.module.scss';

class ContactForm extends Component {
  render() {
    const { onCreateContact } = this.props;

    return (
      <form className={s.contactForm} onSubmit={onCreateContact}>
        <div className={s.wrapper}>
          <LabelInput title="Name" name="name" {...this.props} />
          <LabelInput title="Number" name="number" {...this.props} />
        </div>
        <button className={s.btnForm} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
