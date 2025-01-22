import {creatSlice} from "@reduxjs/toolkit"

const initialState = {
  user: null,
  isAuth: false,
  loading: false,
};
const authSlice = creatSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
    },
    loginsSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.isAuth = true;
    },
    loginFail: (state) => {
      state.loading = false;
      state.isAuth = false;
    },
    registerStart: (state) => {
      state.loading = true;
    },
    registerSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.isAuth = true;
    },
    registerFail: (state) => {
      state.loading = false;
      state.isAuth = false;
    },
  },
});

//Actions
export const  {
    loginStart,
    loginsSuccess,
    loginFail,
    registerFail,
    registerStart,
    registerSuccess
} = authSlice.action
