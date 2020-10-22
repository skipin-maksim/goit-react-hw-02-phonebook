import { createStore, combineReducers } from 'redux';

import contactsReduser from './contacts/contactsReduser';

const rootReduser = combineReducers({
  contacts: contactsReduser,
});

const store = createStore(
  rootReduser,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
