import React, { Component } from 'react';
import { StyleSheet, Text, View, Switch, Button } from 'react-native';

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
          title="See Matches"
          onPress={() => navigate('Matches')}
        />
        <View style={{paddingTop: 20}}>  
          <Switch  
            value={this.state.switchValue}  
            onValueChange ={(switchValue) => this.setState({switchValue})}/>  
        </View>
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