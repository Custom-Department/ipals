import {Platform, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {MentorColor, color} from '../../config/color';

export const styles = StyleSheet.create({
  mainView: {
    width: wp('100'),
    paddingTop: Platform.OS == 'ios' ? hp('-1') : hp('1'),
    backgroundColor: MentorColor.MentorThemeFirst,
    paddingBottom: Platform.OS == 'ios' ? hp('-3') : hp('2'),
  },
  secondView: {
    width: wp('98'),
    height: hp('7'),
    flexDirection: 'row',
    paddingLeft: wp('2'),
    alignItems: 'center',
  },
  TextHeadingView: {
    marginLeft: wp('3'),
    marginRight: 'auto',
    flexDirection: 'column',
  },
  username: {
    color: color.white,
    fontSize: hp('2.5'),
  },
  WellcomeText: {
    color: color.white,
    fontSize: hp('1.7'),
  },
  iconView: {
    marginRight: wp('2'),
    flexDirection: 'row',
  },
  bellIcon: {
    marginRight: hp('1.5'),
  },
  searchIcon: {
    marginLeft: wp('2'),
    // marginTop: hp('1'),
    marginRight: wp('2'),
  },
  searchText: {
    color: MentorColor.MentorThemeFirst,
    fontSize: hp('2'),
  },
  searchView: {
    width: wp('95'),
    height: hp('5'),
    borderRadius: 22,
    flexDirection: 'row',
    backgroundColor: color.white,
    alignSelf: 'center',
    alignItems: 'center',
  },
});
