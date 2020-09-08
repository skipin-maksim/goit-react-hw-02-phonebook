import React from 'react';

import LabelInput from '../LabelInput/LabelInput';

import s from './ContactForm.module.scss';

const ContactForm = ({ onCreateContact, ...otherProps }) => {
  return (
    <form className={s.contactForm} onSubmit={onCreateContact}>
      <div className={s.wrapper}>
        <LabelInput title="Name" name="name" {...otherProps} />
        <LabelInput title="Number" name="number" {...otherProps} />
      </div>

      <button className={s.btnForm} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
