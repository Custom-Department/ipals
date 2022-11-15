import {Platform, StyleSheet} from 'react-native';
import {color, colorTutor_, MentorColor} from '../../../config/color';
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
  inputView: {
    width: wp('90'),
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    height: hp('8'),
    borderRadius: 10,
  },
  dateContainer: {
    backgroundColor: MentorColor.MentorThemeFirst,
    height: hp('4.5'),
    width: wp('29'),
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: hp('2'),
  },
});
