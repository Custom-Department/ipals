import {Platform, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colorTutor_} from '../../config/color';

export default styles = StyleSheet.create({
  topView: {
    height: Platform.OS == 'ios' ? hp('12') : hp('10'),
    width: wp('100'),
    backgroundColor: colorTutor_.lightBlue,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    justifyContent: 'center',
    paddingTop: Platform.OS == 'ios' ? hp('3') : hp('0'),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
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
    marginTop: hp('1'),
  },
  iconView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: wp('35'),
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
  cameraStyle: {
    marginRight: wp('3'),
    width: wp('18'),
  },
  headingText: {
    color: 'white',
    fontSize: hp('2'),
    textAlign: 'center',
    fontWeight: 'bold',
    width: wp('50'),
  },
});
