import {Platform, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {MentorColor, color, colorTutor_} from '../../../config/color';
export const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: colorTutor_.topNavigationColor,
  },
  scrollView: {
    marginTop: hp('1'),
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    paddingBottom: hp('20'),
  },
  Emptydivider: {
    width: wp('100'),
    height: hp('0.3'),
    margin: 5,
  },
});
