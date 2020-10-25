import axios from 'axios';

import contactsActions from './contactsActions';

// axios.defaults.baseURL = 'http://localhost:2000';

const fetchContacts = () => dispatch => {
  dispatch(contactsActions.fetchRequest());

  axios('http://localhost:2000/contacts')
    .then(({ data }) => {
      dispatch(contactsActions.fetchSuccess(data));
    })
    .catch(error => {
      console.log(error);

      dispatch(contactsActions.createContactError(error));
      return [];
    });
};

const createContact = (name, number) => dispatch => {
  dispatch(contactsActions.createContactRequest());

  axios
    .post('http://localhost:2000/contacts', { name, number })
    .then(({ data }) => {
      dispatch(contactsActions.createContactSuccess(data));
    })
    .catch(error => {
      console.log(error);

      dispatch(contactsActions.createContactError(error));
    });
};

const removeContact = contactId => dispatch => {
  dispatch(contactsActions.removeContactRequest());

  axios
    .delete(`http://localhost:2000/contacts/${contactId}`)
    .then(() => {
      dispatch(contactsActions.removeContactSuccess(contactId));
    })
    .catch(error => {
      console.log(error);

      dispatch(contactsActions.removeContactError(error));
    });
};

export default {
  fetchContacts,
  createContact,
  removeContact,
};
