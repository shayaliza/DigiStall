// import {initializeApp} from 'firebase/app';
// import {getAuth} from 'firebase/auth';
// import {initializeAuth, getReactNativePersistence} from 'firebase/auth';
// import {ReactNativeAsyncStorage} from 'firebase/auth';
// const firebaseConfig = {
//   apiKey: 'AIzaSyC16EtzjYF0oKMkrH8IZ6zx4ZiED-scozY',
//   authDomain: 'humans-of-rural-india-d2b22.firebaseapp.com',
//   projectId: 'humans-of-rural-india-d2b22',
//   storageBucket: 'humans-of-rural-india-d2b22.appspot.com',
//   messagingSenderId: '43638107391',
//   appId: '1:43638107391:web:aaf9916a04958ef90bf0ca',
//   measurementId: 'G-SKBC8H5EH4',
// };

// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app, {
//   persistence: getReactNativePersistence(ReactNativeAsyncStorage),
// });
// // const auth = initializeAuth(app, {
// //   persistence: getReactNativePersistence(ReactNativeAsyncStorage),
// // });

import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {initializeAuth, getReactNativePersistence} from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: 'AIzaSyC16EtzjYF0oKMkrH8IZ6zx4ZiED-scozY',
  authDomain: 'humans-of-rural-india-d2b22.firebaseapp.com',
  projectId: 'humans-of-rural-india-d2b22',
  storageBucket: 'humans-of-rural-india-d2b22.appspot.com',
  messagingSenderId: '43638107391',
  appId: '1:43638107391:web:aaf9916a04958ef90bf0ca',
  measurementId: 'G-SKBC8H5EH4',
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth with AsyncStorage persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export {auth};
