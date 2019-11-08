import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import SubmitBtn from './SubmitBtn'

class AddDeck extends Component {
  state = {
      deckName: 'Enter deck name'
  }

  // componentDidMount - Make this a connected component - Redux
  // Styling

  onChangeName(userTyped){
      this.setState({
          deckName: text
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
        <SubmitBtn onPress={this.submit} />
      </View>
    )
  }
}

export default AddDeck
