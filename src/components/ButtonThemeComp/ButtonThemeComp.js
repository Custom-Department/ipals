import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {styles} from './styles';
import {SkypeIndicator} from 'react-native-indicators';

export const ButtonThemeComp = props => {
  return (
    <TouchableOpacity
      // disabled={true}
      disabled={props.disabled ? props.disabled : props?.isLoading}
      onPress={() => props?.onPress()}
      style={{...styles.ButtonView, ...props?.style}}>
      {props.isLoading ? (
        <SkypeIndicator
          color={'white'}
          size={hp('4')}
          style={{
            alignSelf: 'center',
            justifyContent: 'center',
          }}
        />
      ) : (
        <Text style={{...styles.ButtonText, ...props?.TextStyle}}>
          {props?.text}
        </Text>
      )}
    </TouchableOpacity>
  );
};
