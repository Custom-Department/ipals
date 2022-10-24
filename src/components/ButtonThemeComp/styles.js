import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { colorTutor_ } from '../../config/color';

export const styles = StyleSheet.create({
  ButtonView: {
    width: wp('80'),
    height: hp('6'),
    backgroundColor: colorTutor_.ipallightGreen,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
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
    fontSize: hp('1.5'),
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
