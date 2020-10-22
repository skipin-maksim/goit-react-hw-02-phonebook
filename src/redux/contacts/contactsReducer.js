import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import INITIAL_STATE from '../../services/INITIAL_STATE';
import contactsActions from './contactsActions';

const onCreateReducer = (state, { payload }) => [...state, payload.contact];
const onRemoveContact = (state, { payload }) =>
  state.filter(contact => contact.id !== payload);

const items = createReducer(INITIAL_STATE, {
  [contactsActions.createContact]: onCreateReducer,
  [contactsActions.removeContact]: onRemoveContact,
});

const filter = createReducer('', {
  [contactsActions.changeFilter]: (state, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
