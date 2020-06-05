import React,{useState} from 'react';
import {View,ImageBackground,Alert,TouchableWithoutFeedback} from 'react-native';
import {DrawerContentScrollView,DrawerItem} from '@react-navigation/drawer';
import {Avatar,Title,Caption,Drawer,TouchableRipple,Switch,Text,Paragraph} from 'react-native-paper';
import {Ionicons} from '@expo/vector-icons';

const DrawerContent = (props,{navigation}) => {
    const [more,setMore] = useState(false);

    const openSettings = ()=>{
        setMore(true);
    }

    return (
        <View style={{flex:1}}>
            <DrawerContentScrollView  {...props}>
                <View style={{flex:1}}>

                    <View style={{height:170,borderBottomColor:'black',borderBottomWidth:1}}>
                        <ImageBackground source={{uri:'https://cdn57.androidauthority.net/wp-content/uploads/2018/11/google-hangouts-icon-840x473.jpg'}} style={{height:170,width:280}}>
                            <View style={{paddingLeft:20,paddingTop:20}}>
                                <Avatar.Image size={70} source={{uri:'https://i.pinimg.com/originals/67/56/e9/6756e9cc5c060638473681b19c22c5fc.jpg'}} />
                                <View style={{marginTop:18}}>
                                <Title style={{color:'white'}}>Johnny Depp</Title>
                                    <View style={{flexDirection:'row',paddingRight:10,justifyContent:'space-between'}}>
                                        <Text style={{color:'white'}}>johnnydepp@gmail.com</Text>
                                        <TouchableWithoutFeedback onPress={openSettings}>
                                            <Ionicons name={'md-arrow-dropdown'} color='white' size ={20} />
                                        </TouchableWithoutFeedback>
                                    </View>
                                </View>   
                            </View>  
                         </ImageBackground>
                    </View>
                    

                    <Drawer.Section  style={{marginTop:20}}>
                        <DrawerItem onPress={()=>props.navigation.navigate('Invitations')} inactiveTintColor='#2A3A59' icon={({color})=> <Ionicons name={'md-mail-open'} color={color} size={21} /> } label='Invitations' />
                        <DrawerItem onPress={()=>props.navigation.navigate('Snooze')} inactiveTintColor='#2A3A59' icon={({color})=> <Ionicons name={'md-notifications'} color={color} size={21} /> } label='Snooze notifications' />
                        <DrawerItem onPress={()=>props.navigation.navigate('Status')} inactiveTintColor='#2A3A59'icon={({color})=> <Ionicons name={'md-happy'} color={color} size={21} /> } label='Status' />
                    </Drawer.Section>

                    <Drawer.Section  >
                        <DrawerItem inactiveTintColor='#2A3A59' icon={({color})=> <Ionicons name={'md-cog'} color={color} size={21} /> } label='Settings' onPress={()=>{}} />
                        <DrawerItem inactiveTintColor='#2A3A59' icon={({color})=> <Ionicons name={'ios-help-circle'} color={color} size={21} /> } label='Help' />
                        <DrawerItem inactiveTintColor='#2A3A59'icon={({color})=> <Ionicons name={'md-text'} color={color} size={21} /> } label='Feedback' />
                    </Drawer.Section>

                    <Drawer.Section  >
                        <DrawerItem inactiveTintColor='#2A3A59' label='Privacy Policy' />
                        <DrawerItem inactiveTintColor='#2A3A59' label='Program Policy' />
                        <DrawerItem inactiveTintColor='#2A3A59' label='Terms of Service' />
                    </Drawer.Section>


                </View>

            </DrawerContentScrollView>
        </View>
    )
}

export default DrawerContent;
