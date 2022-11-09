import {Platform, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Picker} from '@react-native-picker/picker';
import {color} from '../../config/color';

const PickerComponent = props => {
  return (
    <View>
      <Text style={styles.accView}>{props.text}</Text>
      <Picker
        dropdownIconColor={'black'}
        mode="dialog"
        itemStyle={{
          height: hp('6'),
          borderRadius: 10,
          overflow: 'hidden',
          backgroundColor: 'transparent',
          fontSize: hp('1.5'),
          margin: hp('0'),
          color: 'black',
        }}
        collapsable={true}
        selectedValue={props.selectedValue}
        style={{...styles.pickerStyle, ...props.style}}
        onValueChange={(itemValue, itemIndex) => {
          if (itemValue != null) {
            props.setSelectedValue(itemValue, props.h);
          } else {
            props.setSelectedValue(null, props.h);
          }
        }}>
        <Picker.Item label={'Select Options'} value={null} />
        {props.data != String &&
          props?.data.length > 0 &&
          props?.data?.map(item => {
            return (
              <Picker.Item label={item?.title || item?.name} value={item.id} />
            );
          })}
      </Picker>
    </View>
  );
};

export default PickerComponent;

const styles = StyleSheet.create({
  pickerStyle: {
    // width: Platform.OS == 'ios' ? wp('60') : wp('60'),
    // height: hp(Platform?.OS == 'ios' ? '17' : '6'),
    color: 'black',
    width: wp('60'),
    height: hp('6'),
    backgroundColor: Platform.OS == 'ios' ? 'transparent' : 'white',
  },
  accView: {
    marginLeft: wp('2'),
    marginBottom: hp('0.5'),
    color: 'black',
  },
});
