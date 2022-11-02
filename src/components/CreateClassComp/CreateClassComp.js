import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Divider } from 'react-native-paper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Feather
  from 'react-native-vector-icons/Feather';
import { color, colorTutor_ } from '../../config/color';
import { TextComp } from '../TextComponent';
import { styles } from './styles';

export const CreateClassComp = props => {
  return (
    <View style={styles.container}>
       <Image resizeMode='contain' style={styles.image} source={require('../../image/greybook.png')}/>
       <TextComp text={'English'} style={{marginLeft:wp('2')}} color={colorTutor_.TxtColor}/>
       <Image resizeMode='contain' style={styles.image} source={require('../../image/greyclock.png')}/>
       <TextComp text={'9:00PM - 10:00PM '} style={{marginLeft:wp('2')}} color={colorTutor_.TxtColor}/>
  <Image resizeMode='contain' style={{
    ...styles.edit,
    marginLeft:wp('3')
    
    }} source={require('../../image/edit.png')}/>
       <View
 style={{height:hp('5'),borderWidth:0.3,marginHorizontal:wp('4'),borderColor:color.themeColorDark}} />    
    <Image resizeMode='contain' style={{...styles.edit, 
    }}  source={require('../../image/cancel.png')}/>
       
    </View>
  );
};
