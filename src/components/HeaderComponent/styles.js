import {Platform, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colorTutor_} from '../../config/color';

export const styles = StyleSheet.create({
  topView: {
    height: Platform.OS == 'ios' ? hp('18') : hp('15'),
    width: wp('100'),
    backgroundColor: colorTutor_.lightBlue,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    justifyContent: 'center',
    paddingTop: Platform.OS == 'ios' ? hp('3') : hp('0'),
  },
  txt: {
    fontSize: hp('1.5'),
  },
  innerTopView: {
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: wp('98'),
    justifyContent: 'space-between',
  },
  iconView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: wp('24'),
  },
  mainBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  homeButtonView: {
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    height: Platform.OS == 'ios' ? hp('5') : hp('6'),

    width: wp('29'),
    marginTop: hp('1'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  classesButtonView: {
    height: Platform.OS == 'ios' ? hp('5') : hp('6'),
    width: wp('35'),
    marginTop: hp('1'),
    marginRight: wp('1'),
    marginLeft: wp('1'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  msgButtonView: {
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    height: Platform.OS == 'ios' ? hp('5') : hp('6'),

    width: wp('30'),
    marginTop: hp('1'),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
