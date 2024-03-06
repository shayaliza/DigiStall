import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getStoreData = createAsyncThunk('getShop', async shopId => {
  const url = 'https://backend.digistall.in/shop';
  // const url = "http://localhost:5000/shop"; // Use your local URL if needed
  const body = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({shopId: shopId}),
  };

  try {
    const resp = await fetch(url, body);
    return resp.json();
  } catch (error) {
    console.log(error);
    throw error; // Rethrow the error to be handled by the caller
  }
});

const defaultState = {
  storeData: {},
  loadingStatus: 'LOADING',
};

const loadState = async () => {
  try {
    const serialisedState = await AsyncStorage.getItem('local_store');
    if (!serialisedState) {
      await AsyncStorage.setItem('local_store', JSON.stringify(defaultState));
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

const storeSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    setStoreData: (state, action) => {
      state.storeData = action.payload;
    },
    resetStoreData: state => {
      state.storeData = {};
      state.loadingStatus = 'LOADING';
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getStoreData.pending, state => {
        if (initialState.loadingStatus === 'SUCCESS') {
          state.loadingStatus = 'SUCCESS';
        }
      })
      .addCase(getStoreData.fulfilled, (state, action) => {
        state.loadingStatus = 'SUCCESS';
        state.storeData = action.payload.response;
      })
      .addCase(getStoreData.rejected, state => {
        state.loadingStatus = 'FAILED';
        state.storeData = {};
      });
  },
});

export const {setStoreData, resetStoreData} = storeSlice.actions;

export default storeSlice.reducer;
