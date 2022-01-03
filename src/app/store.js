import { configureStore } from "@reduxjs/toolkit";
import countrylReducer from "../features/Country/CountrySlice";

export const store = configureStore(
  {
    reducer: {
      country: countrylReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
