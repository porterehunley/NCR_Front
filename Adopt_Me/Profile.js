import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Card, ListItem, Icon } from 'react-native-elements';

const style = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "red"
  }
});

const users = [
 {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
 },
 // more users here TODO CAll API
]
// implemented without image with header
export default class Profile extends Component {
  render() {
    return (
    <Card title="CURRENT MATCHES">
      {
        users.map((u, i) => {
          return (
            <View key={i}>
              <Image
                style={style.image}
                resizeMode="cover"
                source={{ uri: u.avatar }}
              />
              <Text>{u.name}</Text>
            </View>
          );
        })
      }
    </Card>
    );
  }
}
