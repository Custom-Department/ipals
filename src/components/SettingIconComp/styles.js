import {Platform, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colorTutor_} from '../../config/color';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: wp('85'),
    alignSelf: 'center',
    marginTop: hp('2'),
    marginBottom: hp('3'),
    justifyContent: 'space-between',
  },
  icon1: {},
});
