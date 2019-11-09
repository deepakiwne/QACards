import { purple, white } from '../utils/colors'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Deck from './Deck'
import TabNav from './TabNav'

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
});

export default createAppContainer(StackNav);