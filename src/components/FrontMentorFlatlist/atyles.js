import {Dimensions, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colorTutor_, MentorColor} from '../../config/color';

export const styles = StyleSheet.create({
  mainView: {
    width: wp('55'),
    height: hp('23'),
    backgroundColor: 'white',
    borderRadius: 10,
    marginRight: wp('2'),
  },
  topView: {
    flexDirection: 'row',
    width: wp('50'),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('1'),
  },
  circleImage: {
    width: Dimensions.get('window').width * 0.11,
    height: Dimensions.get('window').width * 0.11,
    marginRight: wp('6'),
    marginLeft: wp('-5'),
  },
  centerView: {
    width: wp('55'),
    backgroundColor: colorTutor_.lightAquaGreen,
    height: hp('4'),
    marginTop: hp('1'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomView: {
    width: wp('48'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp('2'),
    alignSelf: 'center',
  },
  verDivider: {
    height: '100%',
    width: 1,
    backgroundColor: '#909090',
  },
});
