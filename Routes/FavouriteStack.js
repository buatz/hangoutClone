import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {TouchableWithoutFeedback,View, Text} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

import Favourite from '../Screens/Favourite';

const stack = createStackNavigator();

const FavouriteScreen = ({navigation}) =>{
    return(
        <stack.Navigator>
            <stack.Screen name='Favourites' component={Favourite}
            options={{headerTitleAlign:'left',headerRight:()=>{<TouchableWithoutFeedback> <View ><Ionicons name='md-add' size={30} /> </View></TouchableWithoutFeedback>},title:'Favourite',headerStyle:{backgroundColor:'#267B42',height:70},headerLeft:()=> {
                return (<TouchableWithoutFeedback onPress={()=>navigation.toggleDrawer()}><View style={{marginLeft:15,flexDirection:'row'}}><Ionicons name='ios-menu' size={30}/></View></TouchableWithoutFeedback >)}}}
            />
        </stack.Navigator>
    )
}

export default FavouriteScreen;