import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {color, colorTutor_} from '../../config/color';
import {TextComp} from '../TextComponent';
import {styles} from './styles';
import moment from 'moment/moment';

export const CreateClassComp = props => {
  const {data} = props;
  const from = moment(data?.from, 'hh:mm').format('LT');
  const to = moment(data?.to, 'hh:mm').format('LT');
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require('../../image/greybook.png')}
      />
      <TextComp
        text={data?.course?.title}
        style={{marginLeft: wp('1')}}
        color={colorTutor_.TxtColor}
      />
      <Image
        resizeMode="contain"
        style={{...styles.image, marginLeft: wp('1')}}
        source={require('../../image/greyclock.png')}
      />
      <TextComp
        numberOfLines={2}
        text={from + ' - ' + to}
        style={{marginLeft: wp('1'), width: wp('40')}}
        color={colorTutor_.TxtColor}
      />
      <View style={styles.editView}>
        <TouchableOpacity onPress={() => props?.onPress(data)}>
          <Image
            resizeMode="contain"
            style={{
              ...styles.edit,
            }}
            source={require('../../image/edit.png')}
          />
        </TouchableOpacity>
        <View
          style={{
            height: hp('5'),
            borderWidth: 0.3,
            marginHorizontal: wp('4'),
            borderColor: color.themeColorDark,
          }}
        />
        <TouchableOpacity onPress={() => props?.onDelete(data)}>
          <Image
            resizeMode="contain"
            style={{...styles.edit}}
            source={require('../../image/cancel.png')}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};
