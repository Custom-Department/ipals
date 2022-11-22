import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {SettingIconComp} from '../../../components/SettingIconComp/SettingIconComp';
import {TextComp} from '../../../components/TextComponent';
import {BackHeaderComponent} from '../../../components/BackHeaderComponent/BackHeaderComponent';
import {colorTutor_, MentorColor} from '../../../config/color';
import * as Animatable from 'react-native-animatable';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import style from './style';
import {useDispatch} from 'react-redux';
import types from '../../../Redux/types';
const MentorSettingScreen = ({navigation}) => {
  const dispatch = useDispatch();
  return (
    <View
      style={{
        backgroundColor: colorTutor_.ipalBlue,
        flex: 1,
      }}>
      <BackHeaderComponent
        heading={'Setting'}
        data={true}
        bellOnPress={() => console.log('bell')}
        settingOnPress={() => console.log('hello')}
      />

      <Animatable.View animation="fadeInLeft" style={style.topView}>
        <TextComp
          color={colorTutor_.TxtColor}
          text={'Settings'}
          style={style.settingtxtView}
        />

        <TouchableOpacity
          onPress={() => navigation.navigate('NotificationScreen')}>
          <SettingIconComp
            trackColor={MentorColor.MentorThemeFirst}
            name={'bell-fill'}
            text={'Notifications'}
            switch={true}
          />
        </TouchableOpacity>
        {/* <TouchableOpacity
          onPress={() => navigation.navigate('MentorAccountSettings')}>
          <SettingIconComp
            onPress={() => console.log('hellow')}
            name={'person-fill'}
            text={' Account settings'}
          />
        </TouchableOpacity> */}
        <TouchableOpacity
          onPress={() => navigation.navigate('MentorPaymentMethod')}>
          <SettingIconComp
            text={'Payment Method'}
            changeIcon={
              <FontAwesome5 name={'user-edit'} size={hp('3')} color={'white'} />
            }
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('MentorProfileScreen')}>
          <SettingIconComp
            text={'Edit Profile'}
            changeIcon={
              <MaterialIcons name={'payment'} size={hp('3')} color={'white'} />
            }
          />
        </TouchableOpacity>
        <SettingIconComp
          onPress={() => console.log('hellow')}
          name={'info'}
          text={'Help & Guide'}
        />
        <TouchableOpacity
          onPress={() => {
            dispatch({
              type: types.LogoutType,
            });
          }}>
          <SettingIconComp name={'sign-out'} text={' Log out'} />
        </TouchableOpacity>
      </Animatable.View>

      {/* {isVisible && <SubjectDetailScreen />} */}
    </View>
  );
};

export default MentorSettingScreen;
