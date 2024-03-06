import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import userReducer from './features/userSlice';
// import storeReducer from './features/storeSlice';
// import emitraSlice from './features/emitraSlice';

// Combine your reducers
const rootReducer = combineReducers({
  user: userReducer,
});

// Create your Redux store
const store = configureStore({
  reducer: rootReducer,
});

const saveState = async state => {
  try {
    const serialisedUser = JSON.stringify(state.user);

    await AsyncStorage.setItem('hri_local_Rider', serialisedUser);
  } catch (error) {
    console.error('Error saving state:', error);
  }
};

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
