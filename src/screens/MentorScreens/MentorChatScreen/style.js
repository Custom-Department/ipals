import {Platform, StyleSheet} from 'react-native';
import {color, colorTutor_} from '../../../config/color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  recView: {
    marginTop: hp('3'),
    padding: 15,
    marginHorizontal: wp('4'),
    backgroundColor: colorTutor_.lightAquaGreen,
    borderRadius: 5,
    textAlign: 'right',
    // backgroundColor: 'green',
  },
  chatButtonView: {
    height: hp('8'),
    backgroundColor: 'white',
    // alignSelf: 'flex-end',
  },
  innerChatView: {
    // backgroundColor: 'red',
    width: wp('100'),
    // height: 'auto',
  },
});
