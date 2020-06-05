import React from 'react';
import {View,Text,TouchableOpacity,Image,ScrollView} from 'react-native';

const Hangout = ({navigation}) =>{
    return(
        <ScrollView>
        <View style={{flex:1}}>
            <View style={{margin:10}}>
                <TouchableOpacity onPress={()=>navigation.navigate('HangoutChat') } >
                    <View style={{flexDirection:'row',alignItems:'center',height:50}}>
                        <Image style={{height:40,width:40,borderRadius:50}} source={{uri:'https://i.skyrock.net/6484/8026484/pics/141563843_small.jpg'}} />
                        <View style={{flexDirection:'row',flex:1,justifyContent:'space-between'}}>
                        <View style={{marginLeft:12}} >
                            <Text style={{color:'#7E7F7E',marginBottom:3,fontWeight:'300'}}>josh@gmail.com</Text>
                            <Text style={{color:'#627E8D',fontWeight:'400'}}>No one has joined your call</Text>
                        </View>
                        <Text style={{color:'#627E8D',fontWeight:'400'}} >7 Feb</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
            
        </View>
        </ScrollView>
    )
}

export default Hangout;