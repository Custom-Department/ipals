import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {styles} from './styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {color} from '../../config/color';

export const LoginInputComp = props => {
  return (
    <View
      style={{
        ...styles.inputView,
        ...props?.style,
        borderColor:
          props?.isFocused == true
            ? color.textSecondaryColor
            : props?.value != ''
            ? color.white
            : color.borderThirdColor,
        borderWidth: props?.isFocused == true ? 2 : 1,
        backgroundColor: props?.isFocused == true ? 'white' : color.white,
      }}>
      {props.firstIcon && (
        <Ionicons
          onPress={props?.firstIconPress}
          name={props?.firstIcon}
          color={props?.firstIconColor}
          style={{
            marginRight: wp('2'),
            // marginLeft: wp('3'),
          }}
          size={hp('2')}
        />
      )}

      <TextInput
        style={{
          color: 'black',
          fontSize: hp('2'),
          // width: wp('65'),
          flex: 1,

          // alignSelf: 'flex-start',
          ...props.inputStyle,

        }}
        onSubmitEditing={props?.onSubmitEditing}
        {...props.otherProps}
        onChange={props?.onChange}
        onEndEditing={props?.onEndEditing}
        onSelectionChange={props?.onSelectionChange}
        onPressOut={props?.onPressOut}
        ref={props?.ref}
        placeholder={props?.placeholder}
        placeholderTextColor={color.themeColorDark}
        // keyboardType={"number-pad"}
        multiline={props?.multiline}
        keyboardType={props?.keyboardType}
        secureTextEntry={props?.secureTextEntry}
        editable={props?.editable}
        onChangeText={props?.onChangeText}
        value={props?.value}
        onFocus={props?.onFocus}
        onBlur={props?.onBlur}
        autoCapitalize={props?.autoCapitalize}
      />
      <MaterialIcons
        onPress={props?.eyeIconPress}
        name={props?.eyeIconName}
        color={
          props?.isFocused == true
            ? color.textSecondaryColor
            : color.themeColorDark
        }
        style={{marginLeft: 'auto', marginRight: wp('3')}}
        size={props?.eyeIconSize??hp('2')}
      />
    </View>
  );
};
