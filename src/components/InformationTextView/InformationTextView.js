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
const InformationTextView = props => {
  let name = props?.name ?? 'exclamationcircle';
  return (
    <TouchableOpacity
      onPress={() => console.log('sds')}
      style={styles.container}>
      <AntDesign
        style={{marginHorizontal: wp('2')}}
        name={name}
        size={hp('2.5')}
        color={'white'}
      />
      <TextComp
        style={{marginLeft: wp('3'), fontSize: hp('1.5')}}
        color={'white'}
        text={props?.text}
      />
    </TouchableOpacity>
  );
};

export default InformationTextView;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: wp('95'),
    height: hp('7'),
    borderRadius: 5,
    borderColor: 'black',
    alignItems: 'center',
    padding: 10,
    marginTop: hp('2'),
    alignSelf: 'center',
    backgroundColor: colorTutor_.topNavigationColor,
  },
});
