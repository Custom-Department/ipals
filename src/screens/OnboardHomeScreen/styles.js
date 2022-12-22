import {Platform, StyleSheet, Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {color, colorTutor_, MentorColor} from '../../config/color';
export const styles = StyleSheet.create({
  phoneContainer: {
    backgroundColor: '#C7C7C7',
    borderRadius: 10,
  },
  circle: {
    borderRadius: Math.round(
      Dimensions.get('window').width + Dimensions.get('window').height,
    ),
    width: Dimensions.get('window').width * 0.02,
    height: Dimensions.get('window').width * 0.02,
    marginTop: hp('1'),
  },
  topCircle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: wp('100'),
  },
  textInput: {
    backgroundColor: color.textfieldcolor,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    paddingVertical: hp('1'),
  },
  SecondView: {
    width: wp('100'),
    backgroundColor: colorTutor_.ipallightGreen,
  },
  scrollView: {
    flexDirection: 'column',
    // justifyContent: 'space-evenly',
    // paddingBottom: hp('40'),
    flexGrow: 1,
  },
  textarea: {
    width: wp('85'),
    alignSelf: 'center',
    margin: 20,
  },
  normalImage: {
    color: colorTutor_.ipalforgetTxtColor,
    marginVertical: hp('2'),
  },
  textheading: {
    fontSize: hp('3'),
    color: colorTutor_.ipalforgetTxtColor,
    fontWeight: 'bold',
  },
  backgroundImage: {
    alignSelf: 'stretch',
    width: wp('100'),
    height: hp('70'),
  },
  imagetext: {
    color: 'white',
    fontSize: hp('2.75'),
    marginHorizontal: wp('4.5'),
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: hp('2'),
    marginTop: hp('10'),
  },
  formView: {
    width: wp('90'),
    backgroundColor: MentorColor.DividerGrey,
    marginHorizontal: wp('5'),
    borderRadius: 20,
    alignItems: 'center',
    paddingVertical: hp('3'),
  },
  countrystyle: {
    backgroundColor: color.coutrypickerbackgroundcolor,
    width: wp('20'),
    height: hp('5'),
    borderTopLeftRadius: 7,
    borderBottomLeftRadius: 7,
  },
  sendbutton: {
    backgroundColor: colorTutor_.ipallightGreen,
    width: wp('75'),
    height: hp('6'),
    borderRadius: 20,
    marginTop: hp('2'),
    justifyContent: 'center',
  },
});
