import {Platform, StyleSheet} from 'react-native';
import {color, colorTutor_} from '../../../config/color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingBottom: hp('15'),
  },
  classDashBoard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // padding: 20,
    width: wp('95'),
  },
  mainView: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: colorTutor_.topNavigationColor,
  },
});
