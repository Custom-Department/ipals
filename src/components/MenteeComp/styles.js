import {Platform, StyleSheet, Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {MentorColor, color, colorTutor_} from '../../config/color';
export const styles = StyleSheet.create({
  flatlistmain: {
    width: wp('46'),
    height: hp('23'),
    marginRight: wp('1'),
    marginBottom: hp('1.5'),
    borderRadius: 10,
    justifyContent: 'space-evenly',
    backgroundColor: color.white,
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
    // height: hp('5'),
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  bottombutton: {
    // height: hp('4'),
    borderRadius: 5,
    justifyContent: 'center',
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
  subMainView: {
    flexWrap: 'wrap',
    display: 'flex',
    alignSelf: 'center',
  },
  subView: {
    borderRadius: 25,
    padding: 5,
    alignItems: 'center',
    width: wp('18'),
    marginBottom: hp('1'),
    marginTop: hp('1'),
    marginRight: wp('0.8'),
    // marginLeft: wp('1.5'),
  },
});
