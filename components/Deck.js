import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { connect } from 'react-redux'
import { gray, white, purple } from '../utils/colors'

class Deck extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.title
    }
  }

  render() {
    
    const { deck }  = this.props

    return (
      <View style={styles.container}>
        <View style={[styles.content, styles.deckCard]} key={deck.title}>
            <Text style={{ fontSize: 35, fontWeight: 'bold' }}>{deck.title}</Text>
            <Text style={{ fontSize: 20, color: gray }}>{deck.cards.length} {deck.cards.length === 1 ? 'card' : 'cards'}</Text>
        </View>
        <TouchableOpacity
          style={[styles.content, styles.button, {backgroundColor: purple}]}
          onPress={() => this.props.navigation.navigate(
            'AddCard',
            { title: deck.title }
          )}>
          <Text style={{fontSize: 18, color: white}}>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.content, styles.button, {backgroundColor: purple}]}
          onPress={() => this.props.navigation.navigate(
            'Quiz',
            { title: deck.title }
          )}>
          <Text style={{fontSize: 18, color: white}}>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  content: {
    margin: 30
  },
  deckCard: {
    padding: 5,
    width: 300,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    padding: 5,
    borderRadius: 8,
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

function mapStateToProps (decks, { navigation }) {

  const { title } = navigation.state.params

  return {
    title,
    deck: decks[title]
  }
}

export default connect(mapStateToProps)(Deck)
