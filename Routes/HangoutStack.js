import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {TouchableWithoutFeedback,View, Text} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

import Hangout from '../Screens/Hangout';
import HangoutChat from '../Screens/HangoutChat';

const stack = createStackNavigator();

const HangoutScreen = ({navigation}) =>{
    return(
        <stack.Navigator >
            <stack.Screen name='Hangouts' component={Hangout} 
                options={{headerTitleAlign:'left',title:'Hangouts',headerStyle:{backgroundColor:'#267B42',height:70},headerLeft:()=> {
                    return (<TouchableWithoutFeedback onPress={()=>navigation.toggleDrawer()}><View style={{marginLeft:15,flexDirection:'row'}}><Ionicons name='ios-menu' size={30}/></View></TouchableWithoutFeedback >)}}}
            />
            <stack.Screen name='HangoutChat' component={HangoutChat} 
                options={{title:'',headerStyle:{backgroundColor:'#267B42',height:70}}}
            />
        </stack.Navigator>
    )
}

export default HangoutScreen;