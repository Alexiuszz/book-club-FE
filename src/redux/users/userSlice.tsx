import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface UserState {
  userName: string;
  email: string;
  token: string;
  id: string;
}

const initialState: UserState = {
  userName: "",
  email: "",
  token: "",
  id: "",
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    update: (state, action: PayloadAction<UserState>) => {
      state.userName = action.payload.userName;
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
    reset: (state) => {
      state.userName = "";
      state.email = "";
      state.token = "";
      state.id = "";
    },
    updateToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
  },
});

export const { update, reset, updateToken } = usersSlice.actions;
export const selectUser = (state: RootState) => state.users;

export default usersSlice.reducer;
