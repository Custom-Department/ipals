import {Dimensions, StyleSheet} from 'react-native';
import {color, colorTutor_, MentorColor} from '../../config/color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  classDashBoard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  subMainView: {
    flexWrap: 'wrap',
    display: 'flex',
    alignSelf: 'center',
  },
  mainView: {
    width: wp('47'),
    backgroundColor: 'white',
    alignItems: 'center',
    marginRight: wp('1'),
    marginTop: hp('3'),
    borderRadius: 10,
  },
  divider: {
    width: wp('40'),
    marginTop: hp('1'),
    marginBottom: hp('1'),
    color: colorTutor_.TxtColor,
  },
  bottomView: {
    flexDirection: 'row',
    display: 'flex',
    flexWrap: 'wrap',
    width: wp('45'),
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: hp('1'),
  },
  subView: {
    backgroundColor: colorTutor_.ipallightGreen,
    borderRadius: 10,
    paddingTop: hp('0.5'),
    paddingBottom: hp('0.5'),
    paddingLeft: hp('1'),
    paddingRight: hp('1'),
    alignSelf: 'center',
  },
  bioView: {
    backgroundColor: 'white',
    borderRadius: 10,
    height: hp('10'),
    width: hp('10'),
  },
  flatlistmain: {
    width: wp('47'),
    height: hp('23'),
    marginRight: wp('1'),
    borderRadius: 10,
    justifyContent: 'space-evenly',
    backgroundColor: color.white,
    marginTop: wp('4'),
  },
  flupperView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  flimagecrop: {
    borderRadius: Math.round(
      Dimensions.get('window').width + Dimensions.get('window').height,
    ),
    width: Dimensions.get('window').width * 0.1,
    height: Dimensions.get('window').width * 0.1,
  },
  lineView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: colorTutor_.lightAquaGreen,
  },
  timeText: {
    color: colorTutor_.ipallightGreen,
    fontSize: hp('2'),
  },
  bottomView: {
    height: hp('5'),
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  bottombutton: {
    height: hp('4'),
    borderRadius: 5,
    padding: 6,
    backgroundColor: colorTutor_.ipalBlue,
  },
  price: {
    color: color.white,
    fontSize: hp('2.2'),
  },
  verticaldivider: {
    width: wp('0.4'),
    height: hp('4'),
    backgroundColor: MentorColor.DividerGrey,
  },
  centerView: {
    width: wp('45'),
    backgroundColor: colorTutor_.lightAquaGreen,
    height: hp('4'),
    marginTop: hp('1'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
