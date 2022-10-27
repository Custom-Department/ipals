import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { colorTutor_ } from '../../config/color';

export const styles = StyleSheet.create({
  topView: {
    height: hp('15'),
    width: wp('100'),
    backgroundColor: colorTutor_.lightBlue,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    justifyContent: 'center',
  },
  txt: {
    fontSize: hp('1.5')
  },
  innerTopView: {
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: wp('98'),
    justifyContent: 'space-between'
  },
  iconView: { flexDirection: 'row', justifyContent: 'space-around', width: wp('20') },
  mainBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  homeButtonView: {
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    height: hp('6'),
    width: wp('29'),
    marginTop: hp('1'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  classesButtonView: {
    height: hp('6'),
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
    height: hp('6'),
    width: wp('30'),
    marginTop: hp('1'),
    justifyContent: 'center',
    alignItems: 'center'
  },

});
