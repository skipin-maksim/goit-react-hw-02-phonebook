import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import contactsActions from './contactsActions';

const onCreateReducer = (state, { payload }) => [...state, payload];
const onRemoveContact = (state, { payload }) =>
  state.filter(contact => contact.id !== payload);

const items = createReducer([], {
  [contactsActions.fetchSuccess]: (state, action) => action.payload,
  [contactsActions.createContactSuccess]: onCreateReducer,
  [contactsActions.removeContactSuccess]: onRemoveContact,
});

const filter = createReducer('', {
  [contactsActions.changeFilter]: (state, { payload }) => payload,
});

const loading = createReducer(false, {
  [contactsActions.fetchRequest]: () => true,
  [contactsActions.fetchSuccess]: () => false,
  [contactsActions.fetchError]: () => false,

  [contactsActions.createContactRequest]: () => true,
  [contactsActions.createContactSuccess]: () => false,
  [contactsActions.createContactError]: () => false,

  [contactsActions.removeContactRequest]: () => true,
  [contactsActions.removeContactSuccess]: () => false,
  [contactsActions.removeContactError]: () => false,
});

export default combineReducers({
  items,
  filter,
  loading,
});
