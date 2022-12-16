import {StyleSheet} from 'react-native';
import {color, colorTutor_} from '../../config/color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colorTutor_.ipalBlue,
  },
  imageView: {
    height: hp('25'),
    width: wp('35'),
    // backgroundColor: 'red',
    marginBottom: hp('4'),
  },
  signBtn: {
    marginTop: hp('2'),
  },
  forgetView: {
    width: wp('80'),
    marginTop: hp('2'),
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomBar: {
    position: 'absolute',
    backgroundColor: colorTutor_.blue,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    height: hp('9'),
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    bottom: 0,
    width: wp('100'),
    paddingHorizontal: wp('10'),
  },
  divider: {
    marginTop: hp('10'),
    marginBottom: hp('3'),
    height: hp('0.2'),
    backgroundColor: colorTutor_.TxtColor,
    width: wp('70'),
    alignSelf: 'center',
  },
});
