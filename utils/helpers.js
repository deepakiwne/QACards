import { AsyncStorage } from 'react-native'
import { Notifications } from 'expo'
import * as Permissions from 'expo-permissions'

const QA_CARDS_KEY = 'QACards.decks'
const NOTIFICATION_KEY = 'QACards:notifications'

function createFakeData(){

    let data = 
    {
        React: {
          title: 'React',
          cards: [
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
          cards: [
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

export function clearLocalNotification () {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}

function createNotification () {
  return {
    title: 'Quiz Time!',
    body: "👋 Don't forget to complete your quiz for today!",
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    }
  }
}

export function setLocalNotification () {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {

      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync()

              let tomorrow = new Date()
              tomorrow.setDate(tomorrow.getDate() + 1)
              tomorrow.setHours(20)
              tomorrow.setMinutes(0);

              Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                {
                  time: tomorrow,
                  repeat: 'day',
                }
              )

              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
            }
          })
      }
    })
}