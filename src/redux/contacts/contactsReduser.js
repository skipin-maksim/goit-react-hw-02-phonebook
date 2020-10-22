import { combineReducers } from 'redux';

import actionTypes from './contactsActionsTypes';

const INITIAL_STATE = [
  {
    id: '0e1211b7-aef7-480e-bc14-f532a1e4c9af',
    name: 'Alex',
    number: '0662025390',
  },
  {
    id: 'e7f6bcff-a54e-4e09-ac49-b05647dca4a6',
    name: 'Maks',
    number: '0662025390',
  },
  {
    id: '59a438bf-edd0-4d3d-a6c5-c3b755e4d37c',
    name: 'Den',
    number: '0662025390',
  },
];

const items = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case actionTypes.CREATE_CONTACT:
      return [...state, payload.contact];

    case actionTypes.REMOVE_CONTACT:
      return state.filter(contact => contact.id !== payload.contactId);

    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case actionTypes.CHANGE_FILTER:
      return payload.filter;

    default:
      return state;
  }
};

export default combineReducers({
  items,
  filter,
});
