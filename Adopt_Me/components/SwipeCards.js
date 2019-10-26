'use strict';
 
import React, { Component } from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
 
import SwipeCards from 'react-native-swipe-cards';
 
class Card extends React.Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <View style={[styles.card, {backgroundColor: this.props.backgroundColor}]}>
        <Text style={styles.cardNameText}>{this.props.text}</Text>
     
      </View>
    )
  }
}
 
class NoMoreCards extends Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <View>
        <Text style={styles.noMoreCardsText}>No more cards</Text>
      </View>
    )
  }
}
 
export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {text: 'Augustus', backgroundColor: 'lightgray', image: require('../pup_pics/sleepyPup1.jpg')},
        {text: 'Leonardo', backgroundColor: 'lightgray', image: require('../pup_pics/adorablePup1.jpg')},
        {text: 'Pip', backgroundColor: 'lightgray', image: require('../pup_pics/unidentifiedPup1.jpg')},
        {text: 'Blueberry', backgroundColor: 'lightgray', image: require('../pup_pics/funnyPup1.jpg')},
      ]
    };
  }
 
  handleYup (card) {
    console.log(`Yup for ${card.text}`)
  }
  handleNope (card) {
    console.log(`Nope for ${card.text}`)
  }
  handleMaybe (card) {
    console.log(`Maybe for ${card.text}`)
  }
  render() {
    // If you want a stack of cards instead of one-per-one view, activate stack mode
    // stack={true}
    return (
      <SwipeCards
        cards={this.state.cards}
        renderCard={(cardData) => <Card {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards />}
 
        handleYup={this.handleYup}
        handleNope={this.handleNope}
        handleMaybe={this.handleMaybe}
        hasMaybeAction
      />
    )
  }
}
 
const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 300,
  },
  cardNameText: {
    fontsize: 20,
  },
  noMoreCardsText: {
    fontSize: 22,
  }
})