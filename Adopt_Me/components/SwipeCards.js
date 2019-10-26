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
      <View style={[styles.card, {backgroundColor: '#b19cd9'}]}>
        <View style={{alignItems: 'center', paddingTop: 15}}>
            <Image source={{uri:this.props.image}} style={{width: 300, height: 300, borderRadius: 280/10}} />
        </View>
        <Text style={styles.cardName}>{this.props.name}</Text>
        <Text style={styles.cardInfo}>{this.props.info}</Text>
        <Text style={styles.cardBio}>{this.props.bio}</Text>
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
        <Text style={styles.noMoreCardsText}>Finding some more pups...</Text>
      </View>
    )
  }
}
 
export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {name: 'Augustus', info: 'Golden Retriever, 2', bio: 'He\'s a sleepy-head but LOVES to play!!', image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sleeping-dog-royalty-free-image-1568102656.jpg?crop=0.668xw:1.00xh;0.0238xw,0&resize=640:*'},
        {name: 'Old Yeller', info: 'Lab, <1', bio: 'Likes to snuggle', image: 'https://www.dfwdogquest.com/wp-content/uploads/2019/06/best-dog-food-for-sensitive-stomach.jpg'},
        {name: 'Pip', info: 'Terrier, 6', bio: 'Lot\'s of energy... must play with him every day', image: 'https://puppyupwalk.org/fredericksburg/wp-content/uploads/sites/39/2016/02/ernie-original_edited-2-640x640.jpg'},
        {name: 'Leonardo', info: 'Chihuahua, 3', bio: 'He\'s mentally handicapped :(', image: 'https://www.peta.org/wp-content/uploads/2014/06/Baxter-the-Chihuahua-Dog-Eating-a-Treat.jpg'},
      ]
    };
  }
 
  handleYup (card) {
    console.log(`Yup for ${card.name}`)
  }
  handleNope (card) {
    console.log(`Nope for ${card.name}`)
  }
  handleMaybe (card) {
    console.log(`Maybe for ${card.name}`)
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
  cardName: {
    paddingLeft: 15,
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 24
  },
  cardInfo: {
    paddingLeft: 18,
    textAlign: 'left',
    fontSize: 16,
    fontStyle: "italic",
  },
  cardBio: {
    paddingTop: 6,
    paddingLeft: 18,
    textAlign: 'left',
    fontSize: 14
  },
  card: {
    textAlign: 'left',
    width: 330,
    height: 560,
    borderRadius: 300/10
  },
  noMoreCardsText: {
    fontSize: 22,
  }
})