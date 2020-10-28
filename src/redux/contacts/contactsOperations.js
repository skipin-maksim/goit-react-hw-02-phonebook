import axios from 'axios';

import contactsActions from './contactsActions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const fetchContacts = () => async dispatch => {
  dispatch(contactsActions.fetchRequest());

  try {
    const { data } = await axios('/contacts');

    dispatch(contactsActions.fetchSuccess(data));
  } catch (error) {
    console.log(error);

    dispatch(contactsActions.fetchError(error));
  }
};

const createContact = (name, number) => async dispatch => {
  dispatch(contactsActions.createContactRequest());

  try {
    const { data } = await axios.post('/contacts', { name, number });

    dispatch(contactsActions.createContactSuccess(data));
  } catch (error) {
    console.log(error);

    dispatch(contactsActions.createContactError(error));
  }
};

const removeContact = contactId => async dispatch => {
  dispatch(contactsActions.removeContactRequest());

  try {
    await axios.delete(`/contacts/${contactId}`);

    dispatch(contactsActions.removeContactSuccess(contactId));
  } catch (error) {
    console.log(error);

    dispatch(contactsActions.removeContactError(error));
  }
};

export default {
  fetchContacts,
  createContact,
  removeContact,
};
