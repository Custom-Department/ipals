import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {color, colorTutor_} from '../../../config/color';

export const styles = StyleSheet.create({
  twoPickerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp('95'),
    marginBottom: hp('2'),
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: hp('2'),
  },
});
