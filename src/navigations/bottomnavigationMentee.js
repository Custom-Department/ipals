import React, {useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Platform, Dimensions, StyleSheet, View} from 'react-native';
import {color, MentorColor} from '../config/color';
import {ManteeScreen} from '../screens/ManteeScreens';
const Tab = createBottomTabNavigator();
function MenteebottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="MenteeDashboardScreen"
      screenOptions={({route}) => ({
        tabBarActiveTintColor: color.black,
        // tabBarInactiveTintColor: 'transparent',
        tabBarInactiveTintColor: MentorColor.MentorThemeFirst,
        headerShown: false,
        // tabBarActiveBackgroundColor: MentorColor.MentorThemeFirst,
        // tabBarInactiveBackgroundColor: MentorColor.MentorThemeFirst,
        tabBarHideOnKeyboard: true,
        swipeEnabled: true,
        animationEnabled: true,
        tabBarStyle: {
          position: 'absolute',
          elevation: 0,
          height: Platform.OS == 'android' ? hp('10') : hp('12'),
          backgroundColor: MentorColor.MentorThemeFirst,
          borderTopLeftRadius: wp('10'),
          borderTopRightRadius: wp('10'),
          // height: hp('10'),
          // width: wp('100'),
          // alignSelf: 'center',
          // borderTopLeftRadius: Platform.OS == 'android' ? 40 : 20,
          // overflow: 'hidden',
        },
      })}>
      <Tab.Screen
        name="MenteeMyClasses"
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <View
              style={{
                backgroundColor: focused
                  ? MentorColor.MentorLightTheme
                  : 'white',
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: hp('5'),
                marginLeft: wp('13'),
                borderRadius: Math.round(
                  Dimensions.get('window').width +
                    Dimensions.get('window').height,
                ),
                width: Dimensions.get('window').width * 0.16,
                height: Dimensions.get('window').width * 0.16,
              }}>
              <FontAwesome
                name={'graduation-cap'}
                color={focused ? 'white' : 'black'}
                size={hp('3')}
              />
            </View>
          ),
          title: 'My Classes',
          tabBarLabelStyle: {
            fontSize: hp('2'),
            marginBottom: Platform.OS == 'android' ? hp('1.5') : hp('0'),
            color: 'white',
            borderRadius: 50,
            marginLeft: wp('13'),
            // ...globalStyles.globalTextStyles3,
          },
        }}
        component={ManteeScreen.MenteeMyClassesScreen}
      />
      <Tab.Screen
        name="MenteeDashboardScreen"
        options={{
          tabBarIcon: ({focused, color, size}) => (
            // <Ionicons
            //   name={color == '#ffff' ? 'person' : 'person-outline'}
            //   color={'white'}
            //   size={hp('3')}
            // />
            <View
              style={{
                backgroundColor: focused
                  ? MentorColor.MentorLightTheme
                  : 'white',
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: hp('5'),

                borderRadius: Math.round(
                  Dimensions.get('window').width +
                    Dimensions.get('window').height,
                ),
                width: Dimensions.get('window').width * 0.2,
                height: Dimensions.get('window').width * 0.2,
              }}>
              <AntDesign
                name={'home'}
                color={focused ? 'white' : 'black'}
                size={hp('5')}
              />
            </View>
          ),
          title: 'Home',
          tabBarLabelStyle: {
            fontSize: hp('2'),
            marginBottom: Platform.OS == 'android' ? hp('1.5') : hp('0'),
            color: 'white',

            // ...globalStyles.globalTextStyles3,
          },
        }}
        component={ManteeScreen.MenteeDashboardScreen}
      />

      <Tab.Screen
        name="MenteeMessagesScreen"
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <View
              style={{
                backgroundColor: focused
                  ? MentorColor.MentorLightTheme
                  : 'white',
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: hp('5'),
                marginRight: wp('13'),
                borderRadius: Math.round(
                  Dimensions.get('window').width +
                    Dimensions.get('window').height,
                ),
                width: Dimensions.get('window').width * 0.16,
                height: Dimensions.get('window').width * 0.16,
              }}>
              <AntDesign
                name={'message1'}
                color={focused ? 'white' : 'black'}
                size={hp('3')}
              />
            </View>
          ),
          title: 'Messages',
          tabBarLabelStyle: {
            fontSize: hp('2'),
            marginBottom: Platform.OS == 'android' ? hp('1.5') : hp('0'),
            marginRight: wp('12'),
            color: 'white',
            // ...globalStyles.globalTextStyles3,
          },
        }}
        component={ManteeScreen.MenteeMessagesScreen}
      />
    </Tab.Navigator>
  );
}
export default MenteebottomTabs;

const styles = StyleSheet.create({
  cartCircle: {
    backgroundColor: color.textSecondaryColor,
    position: 'absolute',
    bottom: hp('-2'),
    borderRadius: Math.round(
      Dimensions.get('window').width + Dimensions.get('window').height,
    ),
    alignSelf: 'center',
    width: Dimensions.get('screen').width * 0.18,
    height: Dimensions.get('screen').width * 0.18,
    alignContent: 'center',
    justifyContent: 'center',
  },
  cartInsideCircle: {
    backgroundColor: color.textSecondaryColor,
    position: 'absolute',
    borderRadius: Math.round(
      Dimensions.get('window').width + Dimensions.get('window').height,
    ),
    alignSelf: 'center',
    width: Dimensions.get('screen').width * 0.15,
    height: Dimensions.get('screen').width * 0.15,
    alignContent: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'white',
  },
  badgeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    fontSize: hp('1.5'),
    backgroundColor: color.badgeColor,
  },
});
