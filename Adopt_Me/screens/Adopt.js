import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import SwipeCards from '../components/SwipeCards'

export default class Adopt extends Component {
 render() {
   return (
     <View style={styles.container}>
       <Text>AdoptMe - Home screen</Text>
       <SwipeCards style={{flex: 1}} />
     </View>
   );
 }
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: '#fff',
   alignItems: 'center',
   justifyContent: 'center',
 },
});