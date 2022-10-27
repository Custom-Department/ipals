import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const HorizontalDividerComp = props => {
  let width=props?.width??'65';
  let color=props?.color??'black';
  return (
<View
  style={{
    borderBottomColor: color,
    width:wp(width),
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginHorizontal:wp('5'),
    ...props?.style
  }}
/>
  );
};

export default HorizontalDividerComp;

const styles = StyleSheet.create({
 
});
