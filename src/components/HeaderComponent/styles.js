import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { colorTutor_ } from '../../config/color';

export const styles = StyleSheet.create({
  topView: {
    height: hp('12'),
    width: wp('100'),
    backgroundColor: colorTutor_.lightBlue,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    justifyContent: 'center',
  },
  txt: {
    fontSize: hp('1.5')
  }
});
