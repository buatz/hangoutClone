import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

const SnoozeNotification = ({navigation}) =>{
    return(
        <View style={{flex:1}}>
             <View style={{paddingLeft:20,paddingTop:5,shadowColor:'black',shadowOffset:{width:0,height:2},shadowOpacity:0.4,shadowRadius:1,height:70,backgroundColor:'#267B42'}}>
            <TouchableOpacity activeOpacity={0.9} onPress={()=>{
                navigation.goBack('Tab');
                }}>
                <View style={{flexDirection:'row',alignItems:'center',paddingTop:15}}>
                <Ionicons name={'md-close'} size={33} color='white' />
                <Text style={{marginLeft:18,color:'white',fontSize:23}}>Snooze notifications</Text>
                </View>
                </TouchableOpacity>
            </View>

            <TouchableOpacity activeOpacity={0.5} onPress={()=>{navigation.goBack('Tab');}}>
                <View style={{flexDirection:'row',backgroundColor:'white',height:50,alignItems:'center',borderColor:'#E9E9E9',borderBottomWidth:'0.3',justifyContent:'space-between'}}>
                    <Text style={{paddingLeft:20}}>Off</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.5} onPress={()=>{navigation.goBack('Tab');}} >
                <View style={{flexDirection:'row',backgroundColor:'white',height:50,alignItems:'center',borderColor:'#E9E9E9',borderBottomWidth:'0.3',justifyContent:'space-between'}}>
                    <Text style={{paddingLeft:20}}>1 hour</Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.5} onPress={()=>{navigation.goBack('Tab');}} >
                <View style={{flexDirection:'row',backgroundColor:'white',height:50,alignItems:'center',borderColor:'#E9E9E9',borderBottomWidth:'0.3',justifyContent:'space-between'}}>
                    <Text style={{paddingLeft:20}}>2 hours</Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.5} onPress={()=>{navigation.goBack('Tab');}} >
                <View style={{flexDirection:'row',backgroundColor:'white',height:50,alignItems:'center',borderColor:'#E9E9E9',borderBottomWidth:'0.3',justifyContent:'space-between'}}>
                    <Text style={{paddingLeft:20}}>4 hours</Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.5} onPress={()=>{navigation.goBack('Tab');}} >
                <View style={{flexDirection:'row',backgroundColor:'white',height:50,alignItems:'center',borderColor:'#E9E9E9',borderBottomWidth:'0.3',justifyContent:'space-between'}}>
                    <Text style={{paddingLeft:20}}>8 hours</Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.5} onPress={()=>{navigation.goBack('Tab');}} >
                <View style={{flexDirection:'row',backgroundColor:'white',height:50,alignItems:'center',borderColor:'#E9E9E9',borderBottomWidth:'0.3',justifyContent:'space-between'}}>
                    <Text style={{paddingLeft:20}}>12 hours</Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.5} onPress={()=>{navigation.goBack('Tab');}} >
                <View style={{flexDirection:'row',backgroundColor:'white',height:50,alignItems:'center',borderColor:'#E9E9E9',borderBottomWidth:'0.3',justifyContent:'space-between'}}>
                    <Text style={{paddingLeft:20}}>1 day</Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.5} onPress={()=>{navigation.goBack('Tab');}} >
                <View style={{flexDirection:'row',backgroundColor:'white',height:50,alignItems:'center',borderColor:'#E9E9E9',borderBottomWidth:'0.3',justifyContent:'space-between'}}>
                    <Text style={{paddingLeft:20}}>3 days</Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.5} onPress={()=>{navigation.goBack('Tab');}} >
                <View style={{flexDirection:'row',backgroundColor:'white',height:50,alignItems:'center',borderColor:'#E9E9E9',borderBottomWidth:'0.3',justifyContent:'space-between'}}>
                    <Text style={{paddingLeft:20}}>1 week</Text>
                </View>
                </TouchableOpacity>
            
        </View>
    )
}

export default SnoozeNotification;