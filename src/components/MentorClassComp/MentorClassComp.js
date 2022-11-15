import React from 'react';
import {View, Text, Dimensions} from 'react-native';
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

export const MentorClassComp = () => {
  return (
    <View style={styles.mainView}>
      <View style={styles.topView}>
        <CircleImageComp
          styles={styles.circleImage}
          image={require('../../image/profile.jpg')}
        />
        <TextComp
          text={'Sarah Martin'}
          style={{color: MentorColor.MentorThemeFirst}}
        />
      </View>
      <View style={styles.centerView}>
        <AntDesign
          name="clockcircle"
          size={hp('2.5')}
          style={{marginRight: wp('4')}}
          color={colorTutor_.ipallightGreen}
        />
        <TextComp
          text={'9:00PM - 10:00PM'}
          style={{color: colorTutor_.ipallightGreen}}
        />
      </View>
      <View style={styles.centerView}>
        <AntDesign
          name="clockcircle"
          size={hp('2.5')}
          style={{marginRight: wp('4')}}
          color={colorTutor_.ipallightGreen}
        />
        <TextComp
          text={'9:00PM - 10:00PM'}
          style={{color: colorTutor_.ipallightGreen}}
        />
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
