// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
// } from 'react-native';
// import {useDispatch} from 'react-redux';
// import {getUser} from '../../../features/userSlice';
// import {auth} from '../../private/firebase.config';
import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setUserData} from '../../../features/userSlice';

const Login = () => {
  const dispatch = useDispatch();
  const data2 = useSelector(state => state.user.userData);
  const data = 'jdf';
  const handleClick = () => {
    console.log(data, 'data');
    dispatch(setUserData(data));
    console.log(data2, 'data2');
  };
  // const [password, setPassword] = useState('');
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState('');

  // const dispatch = useDispatch();

  // const onClickLogin = async () => {
  //   if (!email || !password) {
  //     setError('Please enter email and password');
  //   } else {
  //     setLoading(true);
  //     try {
  //       setError('');
  //       // const email = 'example@example.com';
  //       // const password = 'yourPassword';
  //       console.log(email, password);
  //       // const response = await auth.signInWithEmailAndPassword('jkfd', 'kjf');
  //       console.log('here');

  //       await dispatch(email);
  //       console.log(dispatch);
  //       console.log('here2');

  //       setLoading(false);
  //       console.log('here3');
  //     } catch (err) {
  //       setError(err.message);
  //       setLoading(false);
  //     }
  //   }
  // };

  return (
    // <View style={styles.container}>
    //   <View style={styles.emailContainer}>
    //     <Text style={styles.loginHeader}>Welcome</Text>
    //     <Text style={styles.loginDescription}>
    //       Join our family today {'\n'}
    //       We look forward to having you with us at Digistall.in
    //     </Text>
    //     <View style={styles.formContainer}>
    //       <Text style={styles.formHeader}>Login</Text>
    //       <TextInput
    //         placeholder="Email Address"
    //         autoCompleteType="email"
    //         value={email}
    //         onChangeText={setEmail}
    //         style={styles.input}
    //       />
    //       <View style={styles.passwordContainer}>
    //         <TextInput
    //           secureTextEntry={true}
    //           autoCompleteType="password"
    //           placeholder="Password"
    //           onChangeText={setPassword}
    //           value={password}
    //           style={styles.input}
    //         />
    //       </View>
    //       {loading ? (
    //         <TouchableOpacity style={styles.button}>
    //           <Text style={styles.buttonText}>Please Wait..</Text>
    //         </TouchableOpacity>
    //       ) : (
    //         <TouchableOpacity style={styles.button} onPress={onClickLogin}>
    //           <Text style={styles.buttonText}>Login</Text>
    //         </TouchableOpacity>
    //       )}
    //       <Text style={styles.errorMsg}>{error}</Text>
    //     </View>
    //   </View>
    // </View>
    <View>
      <Button title="Press" onPress={handleClick} />
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
//   emailContainer: {
//     alignItems: 'center',
//   },
//   loginHeader: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   loginDescription: {
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   formContainer: {
//     width: '80%',
//   },
//   formHeader: {
//     fontSize: 20,
//     marginBottom: 10,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     padding: 10,
//     marginBottom: 10,
//   },
//   passwordContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   button: {
//     backgroundColor: 'blue',
//     padding: 10,
//     borderRadius: 5,
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   errorMsg: {
//     color: 'red',
//     textAlign: 'center',
//   },
// });

export default Login;
