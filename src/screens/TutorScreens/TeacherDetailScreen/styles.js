import {Dimensions, StyleSheet} from 'react-native';
import {colorTutor_} from '../../../config/color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  detailsView: {
    width: wp('95'),
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: hp('2'),
  },
  innerTopView: {
    flexDirection: 'row',
    marginTop: hp('2'),
    justifyContent: 'center',
  },
  circleImage: {
    width: Dimensions.get('window').width * 0.23,
    height: Dimensions.get('window').width * 0.23,
  },
  topLine: {
    marginTop: hp('1'),
    marginHorizontal: wp('0'),
    marginBottom: hp('1'),
    borderBottomWidth: 2,
  },
  desText: {
    textAlign: 'center',
    width: wp('85'),
    marginTop: hp('2'),
    alignSelf: 'center',
    lineHeight: hp('2.5'),
    fontSize: hp('1.5'),
  },
  bottomLine: {
    marginTop: hp('1'),
    marginHorizontal: wp('0'),
    marginBottom: hp('1'),
    borderBottomWidth: 2,
    alignSelf: 'center',
  },
  buttonView: {
    alignSelf: 'center',
    width: wp('40'),
    marginBottom: hp('2'),
    height: hp('5'),
    marginTop: hp('1'),
  },
  subView: {
    backgroundColor: colorTutor_.ipallightGreen,
    borderRadius: 10,
    paddingTop: hp('0.5'),
    paddingBottom: hp('0.5'),
    paddingLeft: hp('1'),
    paddingRight: hp('1'),
    alignSelf: 'flex-start',
    marginTop: hp('1'),
  },
  subjectView: {
    flexDirection: 'row',
    width: wp('50'),
    justifyContent: 'space-between',
  },
  innerView: {
    width: wp('45.5'),
    backgroundColor: 'white',
    borderRadius: 10,
    marginLeft: wp('1'),
    marginRight: wp('1'),
    marginBottom: hp('2'),
    overflow: 'hidden',
  },
  timeView: {
    flexDirection: 'row',
    height: hp('4'),
    justifyContent: 'space-around',
    alignItems: 'center',
    width: wp('45.5'),
    marginTop: hp('0.5'),
  },
  centerView: {
    flexDirection: 'row',
    width: wp('41'),
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: hp('1'),
  },
  verDivider: {
    height: hp('7'),
    width: 1,
    backgroundColor: '#909090',
  },
  bottomButton: {
    width: wp('45.5'),
    borderRadius: 0,
    height: hp('4'),
    marginTop: hp('1'),
  },
});
