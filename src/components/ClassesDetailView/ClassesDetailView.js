import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Entypo
  from 'react-native-vector-icons/Entypo';
import FontAwesome
  from 'react-native-vector-icons/FontAwesome';
import { color, colorTutor_ } from '../../config/color';
import { styles } from './styles';
import { Divider } from 'react-native-paper';

export const ClassesDetailView = props => {
  return (
    <View style={styles.container} >
      <View style={styles.topView}>
        <Image resizeMode='contain' style={styles.image} source={props.image} />
        <Text>{props.text}</Text>
        <View style={{flexDirection:'row', marginLeft:wp('10'),marginBottom:hp('1.5'),alignItems:'center'}}>

        <FontAwesome name='video-camera' style={{textAlign:'center'}} size={hp('3.6')} color={colorTutor_.badgeColor} />
      <View
 style={{height:hp('5'),borderWidth:0.3,marginHorizontal:wp('4'),borderColor:color.themeColorDark}} />
        <FontAwesome name='phone' size={hp('3.6')} color={colorTutor_.badgeColor} />
        <View
 style={{height:hp('5'),borderWidth:0.3,marginHorizontal:wp('3'),borderColor:color.themeColorDark}} />
        <Entypo name='mail' size={hp('3.8')} color={colorTutor_.lightGreen} />
        </View>
      </View>
      <View style={{flexDirection:'row',backgroundColor:'#1167b1',justifyContent:'space-between',flex:1,}}>
          <View style={{flexDirection:'row',marginVertical:5}}>
          <Image
               style={{height:20,width:20,margin:5,tintColor:'white'}}
               source={require('../../image/book.png')} 
              />
              <Text style={{margin:5,color:'white'}}>English</Text>
          </View>
          <View style={{flexDirection:'row',marginVertical:5}}>
          <Image
               style={{height:20,width:20,margin:5,tintColor:'white'}}
               source={require('../../image/alarm.png')} 
              />
              <Text style={{margin:5,color:'white'}}>1 hour</Text>
          </View>
          <View style={{flexDirection:'row',marginVertical:5}}>
          <Image
               style={{height:20,width:20,margin:5,tintColor:'white'}}
               source={require('../../image/alarm.png')} 
              />
              <Text style={{margin:5,color:'white'}}>9:00PM - 10:00PM</Text>
          </View>

          </View>
      {/* <View style={styles.lasView}>
          <Text>asdf</Text>
        </View> */}
    </View>
  );
};
