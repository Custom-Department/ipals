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

    backgroundColor: colorTutor_.ipalBlue,
  },
  imageView: {
    marginTop: hp('5'),
    marginBottom: hp('2'),
    height: hp('20'),
    width: wp('36'),
  },
  topText: {
    color: colorTutor_.TxtColor,
    fontSize: hp('3.8'),
  },
  midView: {
    backgroundColor: 'white',
    width: wp('85'),
    alignSelf: 'center',
    marginTop: hp('12'),
    alignItems: 'center',
    marginRight: wp('8'),
    marginLeft: wp('8'),
    marginBottom: hp('3'),
  },
  midViewTopView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: hp('5'),
    paddingLeft: wp('2'),
    paddingRight: wp('2'),
  },
  desc: {
    color: colorTutor_.TxtColor,
    fontSize: hp('1.8'),
    width: wp('65'),
    marginTop: hp('3'),
    textAlign: 'center',
    fontStyle: 'italic',
    letterSpacing: 1,
  },
  midLastView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: hp('3'),
    marginBottom: hp('8'),
  },
  arrowView: {
    borderRadius: 25,
    backgroundColor: colorTutor_.lightAquaGreen,
    padding: 5,
    alignItems: 'center',
    width: wp('20'),
  },
  skipBtn: {
    borderRadius: 30,
    backgroundColor: colorTutor_.ipallightGreen,
    alignItems: 'center',
    width: wp('35'),
    marginHorizontal: wp('3'),
    justifyContent: 'center',
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
});
