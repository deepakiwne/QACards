import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import Button from './Button'
import { connect } from 'react-redux'
import { addDeck } from '../actions'
import { saveDeckTitle } from '../utils/api'

class AddDeck extends Component {
  state = {
      deckName: ''
  }

  // componentDidMount - Make this a connected component - Redux
  // Styling

  onChangeName(userTyped){
      this.setState({
          deckName: userTyped
      })
  }

  onSubmit = () => {

    const { dispatch } = this.props
    const { deckName } = this.state

    // Add to Redux
    dispatch(
      addDeck({
        [deckName]: { title: deckName, cards: [] }
      })
    )

    // Add to API
    saveDeckTitle(deckName)

    // Clear state
    this.setState({
      deckName: ''
    })
  }

  render() {

    const { deckName }  = this.state

    return (
      <View>
        <Text>AddDeck</Text>
        <Text> What is the title of your new Deck?</Text>
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={userTyped => this.onChangeName(userTyped)}
            value={deckName}
        />
        <Button name={'Submit'} onPress={this.onSubmit} />
      </View>
    )
  }
}

export default connect()(AddDeck)
