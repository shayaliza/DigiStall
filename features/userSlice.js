import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  userData: {},
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      const userData = action.payload;
      state.userData = userData;
    },
    login: state => {
      state.isLoggedIn = true;
    },
    logout: state => {
      state.userData = {};
      state.isLoggedIn = false;
    },
  },
});

export const {setUserData, login, logout} = userSlice.actions;

export default userSlice.reducer;
