import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

const Invitation = ({navigation}) =>{
    return(
        <View style={{flex:1}}>
            
            <View style={{paddingLeft:20,paddingTop:5,shadowColor:'black',shadowOffset:{width:0,height:2},shadowOpacity:0.4,shadowRadius:1,height:70,backgroundColor:'#267B42'}}>
            <TouchableOpacity activeOpacity={0.9} onPress={()=>{
                navigation.goBack('Tab');
                navigation.toggleDrawer();
                }}>
                <View style={{flexDirection:'row',alignItems:'center',paddingTop:15}}>
                <Ionicons name={'ios-arrow-back'} size={33} color='white' />
                <Text style={{marginLeft:18,color:'white',fontSize:23}}>Invitations</Text>
                </View>
                </TouchableOpacity>
            </View>
            
            
            <View style={{backgroundColor:'#F2F2F2'}}>
                <TouchableOpacity activeOpacity={0.5}>
                <View style={{flexDirection:'row',backgroundColor:'white',height:50,alignItems:'center',borderColor:'#E9E9E9',borderBottomWidth:'0.3',justifyContent:'space-between'}}>
                    <Text style={{paddingLeft:20}}> Invitation prefernces</Text>
                    <Ionicons name={'ios-arrow-forward'} size={22} color='grey' style={{paddingRight:8}} />
                </View>
                </TouchableOpacity>

                <View style={{flexDirection:'row',backgroundColor:'#F2F2F2',height:60,alignItems:'center',borderColor:'#E9E9E9',borderBottomWidth:'0.3',justifyContent:'space-between'}}>
                    <Text style={{paddingLeft:20}}>New invitations</Text>
                   
                </View>

                <View style={{flexDirection:'row',height:45,backgroundColor:'white',alignItems:'center',borderColor:'#E9E9E9',borderBottomWidth:'0.3',justifyContent:'space-between'}}>
                    <Text style={{paddingLeft:20}}>No invitaions</Text>
            
                </View>
            </View>
        </View>
    )
}

export default Invitation;