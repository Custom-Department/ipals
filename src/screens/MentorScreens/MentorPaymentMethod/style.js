import {Platform, StyleSheet} from 'react-native';
import {color, colorTutor_, MentorColor} from '../../../config/color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  loaderStyle: {
    alignSelf: 'center',
    marginTop: hp('8'),
  },
  recView: {
    alignSelf: 'center',
  },
  chatButtonView: {
    height: hp('10'),
    backgroundColor: 'white',
  },
  innerChatView: {
    backgroundColor: 'red',
    width: wp('95'),
    height: 'auto',
  },
  settingtxtView: {
    marginTop: hp('2'),
    marginLeft: wp('6'),
    marginBottom: hp('2'),
    fontSize: hp('2'),
  },
  buttonView: {
    backgroundColor: MentorColor.MentorThemeFirst,
  },
  classDashBoard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
});
