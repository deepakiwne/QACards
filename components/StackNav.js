import { purple, white } from '../utils/colors'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Deck from './Deck'
import TabNav from './TabNav'
import AddCard from './AddCard'
import Quiz from './Quiz'

const StackNav = createStackNavigator({
    home: {
    screen: TabNav,
    navigationOptions: {
        header: null,
    },
    },
    Deck: {
    screen: Deck,
    navigationOptions: ({ navigation }) => ({
        headerTintColor: white,
        headerStyle: {
        backgroundColor: purple,
        },
    }),
    },
    AddCard: {
    screen: AddCard,
    navigationOptions: ({ navigation }) => ({
        headerTintColor: white,
        headerStyle: {
        backgroundColor: purple,
        },
    }),
    },
    Quiz: {
    screen: Quiz,
    navigationOptions: ({ navigation }) => ({
        headerTintColor: white,
        headerStyle: {
        backgroundColor: purple,
        },
    }),
    }
});

export default createAppContainer(StackNav);