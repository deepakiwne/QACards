import { AsyncStorage } from 'react-native'
import { processData } from './helpers'

export const QA_CARDS_KEY = 'QACards.decks'

// getDecks: return all of the decks along with their titles, questions, and answers
export function getDecks () {
    return AsyncStorage.getItem(QA_CARDS_KEY)
    .then(processData)
}

// getDeck: take in a single id argument and return the deck associated with that id
export function getDeck (title) {
    return AsyncStorage.getItem(QA_CARDS_KEY)
    .then((results) => {
        const data = JSON.parse(results)
        return data[title]
    })
}

// saveDeckTitle: take in a single title argument and add it to the decks
export function saveDeckTitle (title) {
    return AsyncStorage.mergeItem(QA_CARDS_KEY, JSON.stringify({
        [title]: { 'title': title, cards: [] }
    }))
}

// addCardToDeck: take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title
export function addCardToDeck (title, card) {
    return AsyncStorage.getItem(QA_CARDS_KEY)
    .then((results) => {
      const data = JSON.parse(results)
      data[title].cards.push(card)
      AsyncStorage.setItem(QA_CARDS_KEY, JSON.stringify(data))
    })
} 