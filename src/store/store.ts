import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; 

// Import your slices
import postsReducer from "@/store/slices/postsSlice";

/* Root reducer combining all slices */
const rootReducer = combineReducers({
  posts: postsReducer,
});

/* Redux Persist configuration */
const persistConfig = {
  key: "tipost-root",
  storage,
  whitelist: ["posts"],
};

/* Wrap root reducer with persistReducer to enable persistence */
const persistedReducer = persistReducer(persistConfig, rootReducer);

/* Configure Redux store */
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

/* Create persistor for persisting store */
export const persistor = persistStore(store);

/* Types for Redux usage in TypeScript */
export type RootState = ReturnType<typeof store.getState>; 
export type AppDispatch = typeof store.dispatch;

export default store;
