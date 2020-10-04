import React from 'react';

import LabelInput from '../LabelInput/LabelInput';

import s from './ContactForm.module.scss';

const ContactForm = ({ stateData, onCreateContact, ...otherProps }) => {
  const { status } = stateData.notification;

  return (
    <form className={s.contactForm} onSubmit={onCreateContact}>
      <div className={s.wrapper}>
        <LabelInput
          title="Name"
          name="name"
          stateData={stateData}
          {...otherProps}
        />
        <LabelInput
          title="Number"
          name="number"
          stateData={stateData}
          {...otherProps}
        />
      </div>

      <button className={s.btnForm} type="submit" disabled={status}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
