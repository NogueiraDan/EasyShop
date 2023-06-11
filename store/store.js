import { configureStore } from '@reduxjs/toolkit';
import minicartReducer from "./minicartSlice"

const store = configureStore({
  reducer: {
    cart: minicartReducer,
    // Adicione outros reducers aqui
  },
});

export default store;
