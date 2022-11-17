import React from 'react';
import {View, Text, Dimensions, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colorTutor_, MentorColor} from '../../config/color';
import {CircleImageComp} from '../CircleImageComp/CircleImageComp';
import TextButtonComp from '../TextButtonComp/TextButtonComp';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import {TextComp} from '../TextComponent';
import HorizontalDividerComp from '../HorizontalDividerComp/HorizontalDividerComp';
import {Divider} from 'react-native-paper';
import {styles} from './atyles';

export const MentorClassComp = props => {
  const item = props?.data;
  return (
    <View style={styles.mainView}>
      <View style={styles.topView}>
        <CircleImageComp styles={styles.circleImage} image={item?.image} />
        <TextComp
          text={item?.name}
          style={{color: MentorColor.MentorThemeFirst}}
        />
      </View>
      <View style={styles.centerView}>
        <AntDesign
          name="clockcircle"
          size={hp('2.5')}
          style={{marginRight: wp('1')}}
          color={colorTutor_.ipallightGreen}
        />
        <TextComp
          text={item?.clock}
          style={{color: colorTutor_.ipallightGreen}}
        />
      </View>
      <View style={styles.centerView}>
        <View
          style={{
            flexDirection: 'row',
            width: wp('45'),
            justifyContent: 'space-around',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              style={{
                height: 20,
                width: 20,
                tintColor: colorTutor_.ipallightGreen,
              }}
              source={require('../../image/book.png')}
            />
            <TextComp
              text={item?.subject}
              style={{color: colorTutor_.ipallightGreen}}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <AntDesign
              name="clockcircle"
              size={hp('2.5')}
              style={{marginRight: wp('1')}}
              color={colorTutor_.ipallightGreen}
            />
            <TextComp
              text={item?.timing}
              style={{color: colorTutor_.ipallightGreen, marginRight: wp('1')}}
            />
          </View>
        </View>
      </View>
      <View style={styles.bottomView}>
        <FontAwesome
          name="video-camera"
          color={colorTutor_.badgeColor}
          size={hp('3.5')}
        />
        <View style={styles.verDivider} />
        <Ionicons name="mail" color={colorTutor_.lightGreen} size={hp('3.5')} />
        <View style={styles.verDivider} />
        <Entypo
          name="dots-three-horizontal"
          color={MentorColor.MentorThemeFirst}
          size={hp('3.5')}
        />
      </View>
    </View>
  );
};
