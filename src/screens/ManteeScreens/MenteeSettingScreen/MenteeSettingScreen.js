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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useDispatch} from 'react-redux';
import types from '../../../Redux/types';
import styles from './style';
const MenteeSettingScreen = ({navigation}) => {
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

      <Animatable.View animation="fadeInLeft" style={styles.topView}>
        <TextComp
          color={colorTutor_.TxtColor}
          text={'Settings'}
          style={styles.settingtxtView}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('MentorProfileScreen')}>
          <SettingIconComp
            trackColor={MentorColor.MentorThemeFirst}
            name={'person-fill'}
            text={'View Profile'}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('MenteeAccountSettings')}>
          <SettingIconComp
            onPress={() => console.log('hellow')}
            name={'person-fill'}
            text={' Account settings'}
          />
        </TouchableOpacity>
        {/* <TouchableOpacity>
          <SettingIconComp
            onPress={() => console.log('hellow')}
            changeIcon={
              <MaterialCommunityIcons
                name={'folder-multiple-image'}
                size={hp('3')}
                color={'white'}
              />
            }
            text={'Media/files'}
          />
        </TouchableOpacity> */}
        {/* <TouchableOpacity
          onPress={() => navigation.navigate('MentorPaymentMethod')}>
          <SettingIconComp
            text={'Block user'}
            changeIcon={
              <MaterialCommunityIcons
                name={'block-helper'}
                size={hp('3')}
                color={'white'}
              />
            }
          />
        </TouchableOpacity>
        <SettingIconComp
          onPress={() => console.log('hellow')}
          name={'info'}
          text={'Report user'}
        /> */}
        <TouchableOpacity
          onPress={() => {
            dispatch({
              type: types.LogoutType,
            });
          }}>
          <SettingIconComp name={'sign-out'} text={' Log out'} />
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

export default MenteeSettingScreen;
