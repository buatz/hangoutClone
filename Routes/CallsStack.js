import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {TouchableWithoutFeedback,View, Text} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

import Calls from '../Screens/Calls';

const stack = createStackNavigator();

const CallsScreen = ({navigation}) =>{
    return(
        <stack.Navigator>
            <stack.Screen name='Calls' component={Calls} 
                options={{headerTitleAlign:'left',headerStyle:{backgroundColor:'#267B42',height:70},headerLeft:()=>{return(<TouchableWithoutFeedback></TouchableWithoutFeedback>)} ,headerLeft:()=> {
                    return (<TouchableWithoutFeedback onPress={()=>navigation.toggleDrawer()}><View style={{marginLeft:15,flexDirection:'row'}}><Ionicons name='ios-menu' size={30}/></View></TouchableWithoutFeedback >)}}}
            />
        </stack.Navigator>
    )
}

export default CallsScreen;