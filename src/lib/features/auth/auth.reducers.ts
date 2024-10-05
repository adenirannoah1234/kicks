import { Auth } from "@/app/type/types";
import { createSlice } from "@reduxjs/toolkit";


const initialState : Auth = {
  isLoggedIn: false,

};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.isLoggedIn = false;
    },
    setuserList: (state) => {
      state.isLoggedIn = false;
        
    },
  },
});

export const { logoutUser, setuserList } = authSlice.actions;
export default authSlice.reducer;
