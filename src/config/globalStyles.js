import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import React from 'react';
import {StyleSheet} from 'react-native';
import {color} from '../config/color';

export const globalStyles = StyleSheet.create({
  globalTextStyles: {
    fontWeight: 'bold',

    color: color.black,
    marginVertical: hp('1.2'),
  },
  globalTextStyles2: {
    color: 'black',
  },
  globalTextStyles3: {
    fontFamily: 'Poppins',
  },
  globalModuletutor: {
    color: 'white',
    fontSize: hp('1.5'),
  },
  globalModuletutor2: {
    color: 'black',
  },
});
