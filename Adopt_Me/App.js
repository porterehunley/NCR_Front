import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Adopt from './screens/Adopt';

export default function App() {
  return (  
    <View style={styles.container}>
      <Adopt />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
