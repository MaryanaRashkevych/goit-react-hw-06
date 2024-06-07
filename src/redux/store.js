
import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contactsSlice";
import filtersReducer from './filtersSlice'
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

const contactsPersistConfig={
  key: 'contactsValue',
  storage,
  whitelist:  ['items'],
}
const persistContactsReducer = persistReducer(contactsPersistConfig, contactsReducer);

export const store = configureStore({
  reducer: {
    contacts: persistContactsReducer,
    filters: filtersReducer,
  },
});

export const persistor = persistStore(store);