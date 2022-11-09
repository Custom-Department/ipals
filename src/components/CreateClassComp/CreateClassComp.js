import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {Divider} from 'react-native-paper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Feather from 'react-native-vector-icons/Feather';
import {color, colorTutor_} from '../../config/color';
import {TextComp} from '../TextComponent';
import {styles} from './styles';
import moment from 'moment/moment';

export const CreateClassComp = props => {
  const {data} = props;
  const from = moment(data?.from, 'hh').format('LT');
  const to = moment(data?.to, 'hh').format('LT');
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require('../../image/greybook.png')}
      />
      <TextComp
        text={data?.course?.title}
        style={{marginLeft: wp('2')}}
        color={colorTutor_.TxtColor}
      />
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require('../../image/greyclock.png')}
      />
      <TextComp
        numberOfLines={2}
        text={from + ' - ' + to}
        style={{marginLeft: wp('2'), width: wp('40')}}
        color={colorTutor_.TxtColor}
      />
      {/* {data.class_schedules.length > 0 &&
        data.class_schedules.map(res => {
          return (
            <TextComp
              text={res.schedule}
              style={{marginLeft: wp('2')}}
              color={colorTutor_.TxtColor}
            />
          );
        })} */}
      <View
        style={{
          marginLeft: 'auto',
          flexDirection: 'row',
          alignItems: 'center',
          marginRight: wp('3'),
        }}>
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
