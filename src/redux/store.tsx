import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users/userSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    // books:,
    // authors:,
    // clubs:,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
