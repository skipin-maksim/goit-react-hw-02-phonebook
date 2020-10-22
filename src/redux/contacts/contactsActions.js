import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

// const CREATE_CONTACT = 'contacts/createContact';
// const REMOVE_CONTACT = 'contacts/removeContact';
// const CHANGE_FILTER = 'contacts/changeFilter';

// import actionTypes from './contactsActionsTypes';

const createContact = createAction(
  'contacts/createContact',
  (name, number) => ({
    payload: {
      contact: { id: uuidv4(), name, number },
    },
  }),
);
const removeContact = createAction('contacts/removeContact');
const changeFilter = createAction('contacts/changeFilter');

// const createContact = (name, number) => ({
//   type: actionTypes.CREATE_CONTACT,
//   payload: { contact: { id: uuidv4(), name, number } },
// });

// const removeContact = contactId => ({
//   type: actionTypes.REMOVE_CONTACT,
//   payload: { contactId },
// });

// const changeFilter = filter => ({
//   type: actionTypes.CHANGE_FILTER,
//   payload: { filter },
// });

// const getVisibleContacts = () => ({
//   //
// });

export default {
  createContact,
  removeContact,
  changeFilter,
};
