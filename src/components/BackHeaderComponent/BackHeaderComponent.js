import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {color, colorTutor_} from '../../config/color';
import {globalStyles} from '../../config/globalStyles';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
export const BackHeaderComponent = props => {
  const navigation = useNavigation();
  return (
    <View style={styles.topView}>
      <View style={styles.innerTopView}>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: wp('3'),
            alignItems: 'center',
          }}>
          <Ionicons
            onPress={() => navigation.goBack()}
            style={styles.cameraStyle}
            name="arrow-back"
            size={hp('3')}
            color="white"
          />
        </View>
        <Text style={styles.headingText}>{props?.heading}</Text>
        <View style={styles.iconView}>
          {props?.changeIcon1 ? (
            props?.changeIcon1
          ) : (
            <Octicons
              onPress={() => props?.bellOnPress()}
              name={props?.name1}
              size={hp('3')}
              color={colorTutor_.blue}
            />
          )}
          {props?.changeIcon2 ? (
            props?.changeIcon2
          ) : (
            <Ionicons
              onPress={() => console.log('Setting')}
              name={props?.name2}
              size={hp('3')}
              color={colorTutor_.blue}
            />
          )}
          {props?.changeIcon3 ? (
            props?.changeIcon3
          ) : (
            <Ionicons
              onPress={() => props?.settingOnPress()}
              name={props?.name3}
              size={hp('3')}
              color={colorTutor_.blue}
            />
          )}
        </View>
      </View>
    </View>
  );
};
