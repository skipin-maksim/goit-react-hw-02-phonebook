import { createAction } from '@reduxjs/toolkit';

const fetchRequest = createAction('contacts/fetchRequest');
const fetchSuccess = createAction('contacts/fetchSuccess');
const fetchError = createAction('contacts/fetchError');

const createContactRequest = createAction('contacts/createRequest');
const createContactSuccess = createAction('contacts/createSuccess');
const createContactError = createAction('contacts/createError');

const removeContactRequest = createAction('contacts/removeRequest');
const removeContactSuccess = createAction('contacts/removeSuccess');
const removeContactError = createAction('contacts/removeError');

const changeFilter = createAction('contacts/changeFilter');

export default {
  fetchRequest,
  fetchSuccess,
  fetchError,
  createContactRequest,
  createContactSuccess,
  createContactError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
  changeFilter,
};
