import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getEmitraUser = createAsyncThunk(
  'getEmitraUser',
  async KIOSKCODE => {
    const url = 'https://backend.digistall.in/emitra/get-user';
    // const url = "http://localhost:5000/emitra/get-user"; // Use your local URL if needed

    // Replace window.location.href with appropriate logic for React Native
    const SSOID = ''; // Logic to extract SSOID from URL
    const body = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({KIOSKCODE, SSOID}),
    };

    try {
      const resp = await fetch(url, body);
      return resp.json();
    } catch (error) {
      console.log(error);
      throw error; // Rethrow the error to be handled by the caller
    }
  },
);

const defaultState = {
  loadingStatus: 'LOADING',
  emitraData: {},
  logged: false,
};

const loadState = async () => {
  try {
    const serialisedState = await AsyncStorage.getItem('local_emitra');
    if (!serialisedState) {
      await AsyncStorage.setItem('local_emitra', JSON.stringify(defaultState));
      return defaultState;
    } else {
      return JSON.parse(serialisedState);
    }
  } catch (err) {
    console.log('error', err);
    return defaultState; // Return default state if error occurs
  }
};

const initialState = loadState();

const emitraSlice = createSlice({
  name: 'emitra',
  initialState,
  reducers: {
    logoutEmitra: state => {
      state.loadingStatus = 'LOADING';
      state.emitraData = {};
      state.logged = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getEmitraUser.pending, state => {
        if (initialState.loadingStatus !== 'SUCCESS') {
          state.loadingStatus = 'LOADING';
        }
      })
      .addCase(getEmitraUser.fulfilled, (state, action) => {
        state.loadingStatus = 'SUCCESS';
        state.emitraData = action.payload.user;
        state.logged = true;
      })
      .addCase(getEmitraUser.rejected, state => {
        state.loadingStatus = 'FAILED';
        state.logged = false;
        state.emitraData = {};
      });
  },
});

export const {logoutEmitra} = emitraSlice.actions;

export default emitraSlice.reducer;
