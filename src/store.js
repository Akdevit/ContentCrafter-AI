// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './redux/Dataslice';

const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});

export default store;
