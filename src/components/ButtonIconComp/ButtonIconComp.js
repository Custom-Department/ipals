import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {styles} from './styles';

export const ButtonIconComp = props => {
  return (
    <TouchableOpacity
      onPress={() => props?.onPress()}
      style={{...styles.ButtonView, ...props?.style}}>
      <Text style={{...styles.ButtonText, ...props?.TextStyle}}>
        {props?.text}
      </Text>
      <Ionicons name={props?.name} size={props?.size} color="white" />
    </TouchableOpacity>
  );
};
