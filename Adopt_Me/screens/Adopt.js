import React, { Component } from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';
import { Button } from 'react-native-elements';

import SwipeCards from '../components/SwipeCards'

export default class Adopt extends Component {
  state = {  
    switchValue: false  
  };  
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Button
          title="Potential Pups"
          type="outline"
          backgroundColor="orange"
          onPress={() => navigate('Matches')}
        />
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