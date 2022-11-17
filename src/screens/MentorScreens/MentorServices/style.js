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
    alignSelf: 'center',
    // backgroundColor: 'red',
  },
  inputView: {
    width: wp('90'),
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    height: hp('6'),
    borderRadius: 10,
    marginTop: hp('2'),
  },
  dateContainer: {
    backgroundColor: MentorColor.MentorThemeFirst,
    height: hp('3.5'),
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
  calenderStyle: {
    width: wp('90'),
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: hp('2'),
  },
  verDivider: {
    height: '60%',
    width: 1,
    backgroundColor: '#909090',
    marginRight: wp('2'),
  },
  scrollStyle: {
    paddingTop: hp('2'),
    paddingBottom: hp('20'),
  },
  pickerStyle: {
    width: wp('90'),
    marginRigh: wp('2'),
    alignSelf: 'center',
    marginTop: Platform.OS == 'android' ? hp('2') : hp('0'),
  },
  headingStyle: {
    marginLeft: wp('7'),
    marginTop: hp('2'),
    color: MentorColor.MentorThemeFirst,
  },
  buttonStyle: {
    backgroundColor: MentorColor.MentorThemeFirst,
    alignSelf: 'center',
    marginTop: hp('2'),
    borderRadius: 30,
  },
});
