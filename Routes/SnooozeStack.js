import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {TouchableWithoutFeedback,View, Text} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

import SnoozeNotification from '../Screens/SnoozeNotification';

const stack = createStackNavigator();

const SnoozeStack = ({navigation}) =>{
    return(
        <stack.Navigator mode='modal' headerMode='none' >
            <stack.Screen name='Snooze notification' component={SnoozeNotification} />
        </stack.Navigator>
    )
}

export default SnoozeStack;