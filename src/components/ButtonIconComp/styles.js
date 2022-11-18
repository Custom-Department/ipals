import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { colorTutor_ } from '../../config/color';

export const styles = StyleSheet.create({
  ButtonView: {
    width: wp('43'),
    height: hp('4.5'),
    backgroundColor: colorTutor_.ipallightGreen,
    justifyContent: 'space-between',
    paddingHorizontal:wp('7'),
    alignItems: 'center',
    borderRadius: 25,
    flexDirection: 'row',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,

    // elevation: 5,
  },
  ButtonText: {
    color: 'white',
    fontSize: hp('1.7'),
    textAlign: 'center',
    fontWeight: '400',
  },
});
