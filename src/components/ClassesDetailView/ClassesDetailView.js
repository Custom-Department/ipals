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
import {Divider} from 'react-native-paper';
import {CircleImageComp} from '../CircleImageComp/CircleImageComp';
import moment from 'moment/moment';

export const ClassesDetailView = props => {
  const {data} = props;
  const from = moment(data.from, 'hh').format('LT');
  const to = moment(data.to, 'hh').format('LT');
  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <CircleImageComp
          image={require('../../image/profile.jpg')}
          styles={styles.image}
        />
        {/* <Image
          // resizeMode="contain"
          style={styles.image}
          source={require('../../image/profile.jpg')}
        /> */}
        <Text style={{color: 'black', fontSize: hp('2')}}>Freddy Mercury</Text>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: wp('4'),
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
              marginHorizontal: wp('4'),
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
              borderColor: color.themeColorDark,
            }}
          />
          <Entypo name="mail" size={hp('3.8')} color={colorTutor_.lightGreen} />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#1167b1',
          justifyContent: 'space-between',
          // flex: 1,
          alignItems: 'center',
          // borderRadius: 10,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
        }}>
        <View style={{flexDirection: 'row', marginVertical: 5}}>
          <Image
            style={{height: 20, width: 20, margin: 5, tintColor: 'white'}}
            source={require('../../image/book.png')}
          />
          <Text style={{margin: 5, color: 'white'}}>{data?.course?.title}</Text>
        </View>
        <View style={{flexDirection: 'row', marginVertical: 5}}>
          <Image
            style={{height: 20, width: 20, margin: 5, tintColor: 'white'}}
            source={require('../../image/alarm.png')}
          />
          <Text style={{margin: 5, color: 'white'}}>{data?.total_hours}</Text>
        </View>
        <View style={{flexDirection: 'row', marginVertical: 5}}>
          <Image
            style={{height: 20, width: 20, margin: 5, tintColor: 'white'}}
            source={require('../../image/alarm.png')}
          />
          <Text style={{margin: 5, color: 'white'}}>{from + ' - ' + to}</Text>
        </View>
      </View>
      {/* <View style={styles.lasView}>
          <Text>asdf</Text>
        </View> */}
    </View>
  );
};
