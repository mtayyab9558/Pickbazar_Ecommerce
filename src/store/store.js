import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slices/productSlice.js';
import userReducer from './slices/userSlice.js';

export const store = configureStore({
  reducer: {
    products: productReducer,
    users: userReducer,
  },
})