import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {color, colorTutor_} from '../../config/color';
import {styles} from './styles';
import {CircleImageComp} from '../CircleImageComp/CircleImageComp';
import moment from 'moment/moment';

export const ClassesDetailView = props => {
  const {data} = props;
  const from = moment(data.from, 'hh').format('LT');
  const to = moment(data.to, 'hh').format('LT');
  const {user} = props?.data?.my_class ?? props.data;

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <CircleImageComp
          image={{uri: user?.profileImageLink}}
          styles={styles.image}
        />

        <Text style={{color: 'black', fontSize: hp('2')}}>
          {user?.f_name + ' ' + user?.l_name}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: 'auto',
            alignItems: 'center',
          }}>
          <FontAwesome
            name="video-camera"
            style={{textAlign: 'center'}}
            size={hp('3.6')}
            color={colorTutor_.badgeColor}
          />
          <View
            style={{
              height: hp('5'),
              borderWidth: 0.3,
              marginHorizontal: wp('3'),
              borderColor: color.themeColorDark,
            }}
          />
          <FontAwesome
            name="phone"
            size={hp('3.6')}
            color={colorTutor_.badgeColor}
          />
          <View
            style={{
              height: hp('5'),
              borderWidth: 0.3,
              marginHorizontal: wp('3'),
              backgroundColor: color.themeColorDark,
            }}
          />
          <Entypo name="mail" size={hp('3.8')} color={colorTutor_.lightGreen} />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: props.myclass ? 'white' : '#1167b1',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderTopColor: colorTutor_.bookColor,
          borderTopWidth: wp('0.2'),
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
        }}>
        {data?.course?.title && (
          <View style={{flexDirection: 'row', marginVertical: 5}}>
            <Image
              style={{
                height: 20,
                width: 20,
                margin: 5,
                tintColor: props.myclass ? colorTutor_.bookColor : 'white',
              }}
              source={require('../../image/book.png')}
            />
            <Text
              style={{
                margin: 5,
                color: props.myclass ? colorTutor_.bookColor : 'white',
              }}>
              {data?.course?.title}
            </Text>
          </View>
        )}
        {data?.category?.title && (
          <View style={{flexDirection: 'row', marginVertical: 5}}>
            <Image
              style={{
                height: 20,
                width: 20,
                margin: 5,
                tintColor: props.myclass ? colorTutor_.bookColor : 'white',
              }}
              source={require('../../image/book.png')}
            />
            <Text
              style={{
                margin: 5,
                color: props.myclass ? colorTutor_.bookColor : 'white',
              }}>
              {data?.category?.title}
            </Text>
          </View>
        )}
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 5,
            alignItems: 'center',
          }}>
          <Image
            style={{
              height: 20,
              width: 20,
              margin: 5,
              tintColor: props.myclass ? colorTutor_.bookColor : 'white',
            }}
            source={require('../../image/alarm.png')}
          />
          <Text
            style={{
              margin: 5,
              color: props.myclass ? colorTutor_.bookColor : 'white',
            }}>
            {data?.total_hours}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 5,
            alignItems: 'center',
          }}>
          <Image
            style={{
              height: 20,
              width: 20,
              margin: 5,
              tintColor: props.myclass ? colorTutor_.bookColor : 'white',
            }}
            source={require('../../image/alarm.png')}
          />
          <Text
            style={{
              margin: 5,
              color: props.myclass ? colorTutor_.bookColor : 'white',
              fontSize: hp('1.5'),
            }}>
            {from + ' - ' + to}
          </Text>
        </View>
      </View>
    </View>
  );
};
