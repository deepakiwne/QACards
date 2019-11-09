import { AsyncStorage } from 'react-native'

const QA_CARDS_KEY = 'QACards.decks'

function createFakeData(){

    let data = 
    {
        React: {
          title: 'React',
          questions: [
            {
              question: 'Does react use Virtual DOM?',
              answer: true
            },
            {
              question: 'Can you develop mobile apps using React?',
              answer: true
            }
          ]
        },
        JavaScript: {
          title: 'JavaScript',
          questions: [
            {
              question: 'Can you develop for server side using JavaScript?',
              answer: true
            }
          ]
        }
    }

    AsyncStorage.setItem(QA_CARDS_KEY, JSON.stringify(data))

    return data
}

export function processData (results) {
    
    return results === null
      ? createFakeData()
      : createFakeData()
  }