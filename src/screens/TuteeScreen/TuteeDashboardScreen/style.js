import {Platform, StyleSheet} from 'react-native';
import {color, colorTutor_} from '../../../config/color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingBottom: hp('15'),
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
  classDashBoard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  myClassViewDashBoard: {
    padding: 20,
  },
  picker: {
    width: wp('90'),
    backgroundColor: Platform.OS == 'ios' ? 'transparent' : 'white',
    alignSelf: 'center',
    borderRadius: 20,
    overflow: 'hidden',
  },
  pickerStyle: {
    width: Platform.OS == 'ios' ? wp('95') : wp('90'),
    height: hp(Platform?.OS == 'ios' ? '20' : '6'),
    color: 'black',
    backgroundColor: 'transparent',
    alignSelf: 'center',
    overflow: 'hidden',
    marginTop: Platform.OS == 'ios' ? hp('1') : hp('2'),
    borderRadius: 5,
    borderWidth: Platform.OS == 'ios' ? 0 : 1,
    borderColor: 'black',
    justifyContent: 'center',
  },
  loadingView: {
    // position: 'absolute',
    height: hp('100'),
    width: wp('100'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {color: 'white', fontSize: hp('3'), fontWeight: 'bold'},
  inputView: {
    width: wp('90'),
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    height: hp('8'),
  },
  inputField: {
    width: wp('80'),
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 1,
    height: Platform.OS == 'ios' ? hp('5') : hp('6'),
    paddingLeft: wp('2'),
    textAlignVertical: 'center',
    marginBottom: hp('2'),
    alignSelf: 'center',
  },
  buttonView: {
    backgroundColor: color.bottomBarColor,
    width: wp('50'),
    height: hp('6'),
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: wp('4'),
  },
  buttonText: {color: color.white, fontSize: hp('2'), fontWeight: 'bold'},
  datePicker: {
    width: wp('40'),
    marginLeft: wp('-9'),
  },
  activitiesContainer: {
    width: wp('32'),
    height: hp('6'),
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: hp('2'),
    maxHeight: hp('7'),
  },
  activitiesMainView: {
    flexDirection: 'row',
    width: wp('100'),
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: hp('2'),
    paddingHorizontal: wp('2'),
  },
  dateContainer: {
    backgroundColor: colorTutor_.topNavigationColor,
    height: hp('5.5'),
    width: wp('29'),
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: hp('2'),
  },
  twoPickerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp('95'),
    marginBottom: hp('2'),
    alignItems: 'center',
    alignSelf: 'center',
  },
});
