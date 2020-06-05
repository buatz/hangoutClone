import React from 'react';
import {View,Text,Image} from 'react-native';

const Favourite = () =>{
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'white'}}>
            <Image style={{height:300,width:300}} source={{uri:'https://cdn1.vectorstock.com/i/thumb-large/37/15/little-boy-holding-pencil-vector-7623715.jpg'}} />
            <Text style={{fontSize:14}}>No favourite yet</Text>
        </View>
    )
}

export default Favourite;