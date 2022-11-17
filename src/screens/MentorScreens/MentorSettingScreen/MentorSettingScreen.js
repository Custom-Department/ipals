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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import style from './style';
const MentorSettingScreen = ({navigation}) => {
  return (
    <View
      style={{
        backgroundColor: colorTutor_.ipalBlue,
        flex: 1,
      }}>
      <BackHeaderComponent
        style={{backgroundColor: MentorColor.MentorThemeFirst}}
        heading={'S E T T I N G'}
        data={true}
        bellOnPress={() => console.log('bell')}
        settingOnPress={() => console.log('hello')}
      />
      {/* {editState ? (
         <ProfileScreen />
       ) : accState ? (
         childAccState ? (
           <CreateChildAccount />
         ) : deleteAccState ? (
           <DeleteAccount />
         ) : (
           <AccountSettings />
         )
       ) : ( */}
      <Animatable.View animation="fadeInLeft" style={style.topView}>
        <TextComp
          color={colorTutor_.TxtColor}
          text={'Settings'}
          style={style.settingtxtView}
        />

        <TouchableOpacity
          onPress={() => navigation.navigate('NotificationScreen')}>
          <SettingIconComp
            name={'bell-fill'}
            text={'Notifications'}
            switch={true}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => updateState({accState: true})}>
          <SettingIconComp
            onPress={() => console.log('hellow')}
            name={'person-fill'}
            text={' Account settings'}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('MentorPaymentMethod')}>
          <SettingIconComp
            text={'Payment Method'}
            changeIcon={
              <FontAwesome5 name={'user-edit'} size={hp('3')} color={'white'} />
            }
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
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
        <TouchableOpacity>
          <SettingIconComp name={'sign-out'} text={' Log out'} />
        </TouchableOpacity>
      </Animatable.View>
      {/* )} */}
      {/* <View style={styles.bottomBar}>
      <TouchableOpacity onPress={() => console.log('dont have you acc')}>
        <Text style={globalStyles.globalModuletutor}>Term of use</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('dont have you acc')}>
        <Text style={globalStyles.globalModuletutor}>Privacy Policy</Text>
      </TouchableOpacity>
    </View> */}
      {/* {isVisible && <SubjectDetailScreen />} */}
    </View>
  );
};

export default MentorSettingScreen;
