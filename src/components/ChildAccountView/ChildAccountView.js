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
const ChildAccountView = props => {
  return (
    <View style={styles.container}>
      <TextComp text={'Daniel martin'} style={{fontSize: hp('2.4')}} />
      <View
        style={{
          width: wp('20'),
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}>
        <MaterialIcons name={'delete'} size={hp('5')} color={'red'} />

        <MaterialIcons name={'delete'} size={hp('5')} color={'red'} />
      </View>
    </View>
  );
};

export default ChildAccountView;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: wp('90'),
    height: hp('8'),
    borderRadius: 5,
    borderColor: 'black',
    justifyContent: 'space-between',
    // borderWidth: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    paddingHorizontal: wp('5'),
    marginTop: hp('2'),
    alignSelf: 'center',
  },
});
