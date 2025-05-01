import { createSlice } from "@reduxjs/toolkit";

type AuthSliceType = {
  accessToken?: string;
  user?: {
    id: number;
    name: string;
  };
};

function isServerSide() {
  return typeof window === 'undefined'
}

const authLocalString = isServerSide() ? undefined : localStorage.getItem("auth")

const initialState: AuthSliceType = authLocalString ? JSON.parse(authLocalString) : {}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      localStorage.setItem("auth", JSON.stringify(payload))
      state.accessToken = payload.accessToken;
      state.user = payload.user;
    },
  },
});

export const { login } = authSlice.actions;
export default authSlice.reducer;