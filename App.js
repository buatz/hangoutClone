import React,{useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer'
import DrawerContent from './Screens/DrawerContent';

import MainBottomTab from './Routes/MainBottomTab'
import InvitationStack from './Routes/InvitationStack';
import SnoozeStack from './Routes/SnooozeStack';


const drawer = createDrawerNavigator();


export default function App() {
  
  return (
    <NavigationContainer >

      <drawer.Navigator drawerContent={props => <DrawerContent {...props} /> } >
          <drawer.Screen name='Tab' component={MainBottomTab} />
          <drawer.Screen name='Invitations' component={InvitationStack} />
          <drawer.Screen name='Snooze' component={SnoozeStack} />
      
      </drawer.Navigator>

    </NavigationContainer>
  );
}


