import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {TouchableWithoutFeedback,View, Text} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

import Invitation from '../Screens/Invitation';
import MainBottomTab from './MainBottomTab';


const stack = createStackNavigator();

const InvitationScreen = ({navigation}) =>{
    return(
        <stack.Navigator headerMode='none' >
            <stack.Screen name='Invitations' component={Invitation}
            options={{headerTitleAlign:'left',title:'Invitations',headerStyle:{backgroundColor:'#267B42',height:70}}}
            />

            <stack.Screen name='tab' component={MainBottomTab} />
        </stack.Navigator>
    )
}

export default InvitationScreen;