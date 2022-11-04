import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {color, colorTutor_} from '../../config/color';
import {TextComp} from '../TextComponent';
const VerticalDividerComp = props => {
  let name = props?.name ?? 'exclamationcircle';
  return (
    <View
      style={{
        height: hp('5'),
        borderWidth: 0.3,
        marginHorizontal: wp('3'),
        borderColor: color.themeColorDark,
      }}
    />
  );
};

export default VerticalDividerComp;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: wp('95'),
    height: hp('7'),
    borderRadius: 5,
    borderColor: 'black',
    // borderWidth: 1,
    alignItems: 'center',
    padding: 10,
    marginTop: hp('2'),
    alignSelf: 'center',
    backgroundColor: colorTutor_.topNavigationColor,
  },
});
