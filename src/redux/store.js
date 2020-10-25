import { configureStore } from '@reduxjs/toolkit';

import authReducer from './auth/authReducer';
import contactsReducer from './contacts/contactsReducer';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: authReducer,
  },
});

export default store;
