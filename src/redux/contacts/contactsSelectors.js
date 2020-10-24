import { createSelector } from '@reduxjs/toolkit';

const getContacts = state => state.contacts.items;

const getFilter = state => state.contacts.filter;

const getIsLoading = state => state.contacts.loading;

const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (items, filter) => {
    return items.filter(({ name }) => name.toLowerCase().includes(filter));
  },
);

const f = createSelector([getContacts], (items, contactId) => {
  return items.find(item => item.id === contactId);
});

const getTaskById = (state, contactId) => {
  const items = getContacts(state);

  return items.find(item => item.id === contactId);
};

export default {
  getContacts,
  getFilter,
  getIsLoading,
  getVisibleContacts,
  getTaskById,
};
