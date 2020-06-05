import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons'

import ContactScreen from './ContactStack';
import FavouriteScreen from './FavouriteStack';
import HangoutScreen from './HangoutStack';
import CallsScreen from './CallsStack';

const tab = createBottomTabNavigator();

const MainBottomTab = () =>{
    return(
        <tab.Navigator initialRouteName='Hangouts' tabBarOptions={{inactiveTintColor:'#949494',showLabel:false,labelStyle:{fontSize:13},activeTintColor:'#0AA321'}} >
            <tab.Screen name='Contacts' component={ContactScreen} options={{tabBarIcon: ({color}) => <Ionicons  name="ios-person" color={color} size={27} /> }} />
            <tab.Screen name='Favourites' component={FavouriteScreen} options={{tabBarIcon: ({color}) => <Ionicons  name="ios-star" color={color} size={27} /> }} />
            <tab.Screen name='Hangouts' component={HangoutScreen} options={{tabBarIcon: ({color}) => <Ionicons  name="md-text" color={color} size={27} /> }} />
            <tab.Screen name='Calls' component={CallsScreen} options={{tabBarIcon: ({color}) => <Ionicons  name="ios-call" color={color} size={27} /> }} />
        </tab.Navigator>
    )
}

export default MainBottomTab;