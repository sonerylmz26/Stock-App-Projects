import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import stockReducer from "../features/stockSlice"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, authReducer)


const store = configureStore({
  reducer: {
    auth: persistedReducer,
    stock: stockReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  //! persist hatayı sıfırladık.
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export const persistor = persistStore(store)
export default store;
