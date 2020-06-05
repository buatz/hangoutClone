import React from 'react';
import {View,Text,Image,ScrollView,TextInput,TouchableWithoutFeedback,Keyboard} from 'react-native';
import {Ionicons} from '@expo/vector-icons'

const Devotion = () =>{

    return(
        <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
        <View style={{flex:1}}>
            <View style={{height:50,alignItems:'center',justifyContent:'center',flexDirection:'row',marginTop:10,padding:10,borderBottomWidth:0.5,paddingBottom:10,borderBottomColor:'black'}}>
                 <Ionicons name='ios-search' size={25} color='#737373' />
                <View style={{marginLeft:20,paddingRight:10}}>
                    <TextInput  clearButtonMode='while-editing' placeholder='Enter name,phone no. or email address' style={{height:40,fontSize:18,width:280}} />
                </View>
            </View>
<View>
            <ScrollView>
            <View style={{margin:20,flex:1}}>
            
                        <Text>On Hangouts</Text>
                        <View style={{flexDirection:'row',marginTop:25,justifyContent:'space-between',alignItems:'center'}}>
                                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                    <Image style={{height:40,width:40,borderRadius:50}} source={{uri:'https://blogs.forbes.com/zackomalleygreenburg/files/2017/06/0606_celeb-the-weekend-4_1200x675-1200x675.jpg'}} />
                                    <Text style={{marginLeft:20}}>Adrew</Text>
                                </View>

                                <View>
                                </View>

                        </View>

                        <View style={{flexDirection:'row',marginTop:25,justifyContent:'space-between',alignItems:'center'}}>
                                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                    <Image style={{height:40,width:40,borderRadius:50}} source={{uri:'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/slideshows/celebrities_with_coronavirus_slideshow/1800x1200_celebrities_with_coronavirus_slideshow.jpg'}} />
                                    <Text style={{marginLeft:20}}>josh@gmail.com</Text>
                                </View>

                                <View>
                                </View>

                        </View>

                        <View style={{flexDirection:'row',marginTop:25,justifyContent:'space-between',alignItems:'center'}}>
                                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                    <Image style={{height:40,width:40,borderRadius:50}} source={{uri:'https://img.jakpost.net/c/2018/07/07/2018_07_07_48925_1530972022._medium.jpg'}} />
                                    <Text style={{marginLeft:20}}>josh@gmail.com</Text>
                                </View>

                                <View>
                                </View>
                        </View>

                        <Text style={{marginTop:30}}>Not on Hangouts</Text>

                        <View style={{flexDirection:'row',marginTop:25,justifyContent:'space-between',alignItems:'center'}}>
                                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                    <Image style={{height:40,width:40,borderRadius:50}} source={{uri:'https://assets.teenvogue.com/photos/5bbe5bedd068f952d0912c35/1:1/w_3240,h_3240,c_limit/GettyImages-624839222.jpg'}} />
                                   <View>
                                        <Text style={{marginLeft:20,fontSize:16}}>0245242554</Text>
                                        <Text style={{marginLeft:20}}>Mobile. 0245242554</Text>
                                    </View> 
                                </View>

                                <View>
                                </View>

                        </View>

                        <View style={{flexDirection:'row',marginTop:25,justifyContent:'space-between',alignItems:'center'}}>
                                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                    <Image style={{height:40,width:40,borderRadius:50}} source={{uri:'https://cdn.newsday.com/polopoly_fs/1.13227204.1489003886!/httpImage/image.jpg_gen/derivatives/display_960/image.jpg'}} />
                                    <View>
                                        <Text style={{marginLeft:20,fontSize:16}}>0245242554</Text>
                                        <Text style={{marginLeft:20}}>Mobile. 0245242554</Text>
                                    </View>
                                </View>

                                <View>
                                </View>

                        </View>

                        <View style={{flexDirection:'row',marginTop:25,justifyContent:'space-between',alignItems:'center'}}>
                                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                    <Image style={{height:40,width:40,borderRadius:50}} source={{uri:'https://api.time.com/wp-content/uploads/2020/06/gregory-Boyce.jpg?w=412&h=229&quality=85'}} />
                                    <View>
                                        <Text style={{marginLeft:20,fontSize:16}}>0245242554</Text>
                                        <Text style={{marginLeft:20}}>Mobile. 0245242554</Text>
                                    </View>
                                </View>

                                <View>
                                </View>

                        </View>

                        <View style={{flexDirection:'row',marginTop:25,justifyContent:'space-between',alignItems:'center'}}>
                                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                    <Image style={{height:40,width:40,borderRadius:50}} source={{uri:'https://www.click2houston.com/resizer/agaypUfE_0KZ4P6u65n4GAtcV10=/1280x720/smart/filters:format(jpeg):strip_exif(true):strip_icc(true):no_upscale(true):quality(65)/arc-anglerfish-arc2-prod-gmg.s3.amazonaws.com/public/5ZVSQ2KACJGKHLHVPG6I2CHC7E.jpg'}} />
                                    <View>
                                        <Text style={{marginLeft:20,fontSize:16}}>0245242554</Text>
                                        <Text style={{marginLeft:20}}>Mobile. 0245242554</Text>
                                    </View>
                                </View>

                                <View>
                                </View>

                        </View>

                        <View style={{flexDirection:'row',marginTop:25,justifyContent:'space-between',alignItems:'center'}}>
                                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                    <Image style={{height:40,width:40,borderRadius:50}} source={{uri:'https://images.everydayhealth.com/images/celebrities-who-surprisingly-dont-drink-alcohol-rm-kelly-ripa-722x406.jpg?w=720'}} />
                                    <View>
                                        <Text style={{marginLeft:20,fontSize:16}}>0245959043</Text>
                                        <Text style={{marginLeft:20}}>Mobile. 0245959043</Text>
                                    </View>
                                </View>

                                <View>
                                </View>

                        </View>

                        <View style={{flexDirection:'row',marginTop:25,justifyContent:'space-between',alignItems:'center'}}>
                                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                    <Image style={{height:40,width:40,borderRadius:50}} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQeBePxgY5bRn5YPWP5muxTW8gVpa4Cjb681gb8SnU6m-xMcGIk&usqp=CAU'}} />
                                    <View>
                                        <Text style={{marginLeft:20,fontSize:16}}>0245693053</Text>
                                        <Text style={{marginLeft:20}}>Mobile. 0245693053</Text>
                                    </View>
                                </View>

                                <View>
                                </View>

                        </View>

                        <View style={{flexDirection:'row',marginTop:25,justifyContent:'space-between',alignItems:'center'}}>
                                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                    <Image style={{height:40,width:40,borderRadius:50}} source={{uri:'https://i.insider.com/5d97a1004e140f1b3b22a9b6?width=1100&format=jpeg&auto=webp'}} />
                                    <View>
                                        <Text style={{marginLeft:20,fontSize:16}}>0263950485</Text>
                                        <Text style={{marginLeft:20}}>Mobile. 0263950485</Text>
                                    </View>
                                </View>

                                <View>
                                </View>

                        </View>

                        <View style={{flexDirection:'row',marginTop:25,justifyContent:'space-between',alignItems:'center'}}>
                                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                    <Image style={{height:40,width:40,borderRadius:50}} source={{uri:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/demi-lovato-attends-the-demi-lovato-visits-fabletics-at-the-news-photo-1580747066.jpg?crop=0.681xw:0.682xh;0.179xw,0&resize=480:*'}} />
                                    <View>
                                        <Text style={{marginLeft:20,fontSize:16}}>0244255343</Text>
                                        <Text style={{marginLeft:20}}>Mobile.0244255343</Text>
                                    </View>
                                </View>

                                <View>
                                </View>

                        </View>

                        <View style={{flexDirection:'row',marginTop:25,justifyContent:'space-between',alignItems:'center'}}>
                                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                    <Image style={{height:40,width:40,borderRadius:50}} source={{uri:'https://images.everydayhealth.com/images/celebrities-who-surprisingly-dont-drink-alcohol-rm-brad-pitt-722x406.jpg?w=720'}} />
                                    <View>
                                        <Text style={{marginLeft:20,fontSize:16}}>023485934</Text>
                                        <Text style={{marginLeft:20}}>Mobile. 023485934</Text>
                                    </View>
                                </View>

                                <View>
                                </View>

                        </View>

                        
                </View>
                </ScrollView>
                </View>

        </View>
        </TouchableWithoutFeedback>
    )
}

export default Devotion;