import { v4 as uuidv4 } from 'uuid';

import actionTypes from './contactsActionsTypes';

const createContact = (name, number) => ({
  type: actionTypes.CREATE_CONTACT,
  payload: { contact: { id: uuidv4(), name, number } },
});

const removeContact = contactId => ({
  type: actionTypes.REMOVE_CONTACT,
  payload: { contactId },
});

const changeFilter = filter => ({
  type: actionTypes.CHANGE_FILTER,
  payload: { filter },
});

const getVisibleContacts = () => ({
  //
});

export default {
  createContact,
  removeContact,
  getVisibleContacts,
  changeFilter,
};
