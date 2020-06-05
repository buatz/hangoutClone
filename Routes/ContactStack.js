import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {TouchableWithoutFeedback,View, Text} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

import Contact from '../Screens/Contact';

const stack = createStackNavigator();

const ContactScreen = ({navigation}) =>{
    return(
        <stack.Navigator >
            <stack.Screen name=' ' component={Contact}
            options={{headerTitleAlign:'left',title:'Contacts',headerStyle:{backgroundColor:'#267B42',height:70},headerStyle:{backgroungColor:'#bebebe'},headerLeft:()=> {
                return (<TouchableWithoutFeedback onPress={()=>navigation.toggleDrawer()}><View style={{marginLeft:15,flexDirection:'row'}}><Ionicons name='ios-menu' size={30}/></View></TouchableWithoutFeedback >)}}}
            />
        </stack.Navigator>
    )
}

export default ContactScreen;