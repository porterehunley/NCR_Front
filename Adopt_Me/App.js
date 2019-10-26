import React from 'react';
import SignUpForm from './From';
import DogSignUpForm from './DogForm'
import { StyleSheet, View } from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const MainNavigator = createStackNavigator({
  SignUp: {screen: SignUpForm},
  DogSignUp: {screen: DogSignUpForm}
});

const App = createAppContainer(MainNavigator);

export default App;
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <SignUpForm />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
