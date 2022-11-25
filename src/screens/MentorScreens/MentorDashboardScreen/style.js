import {Platform, StyleSheet} from 'react-native';
import {color, colorTutor_, MentorColor} from '../../../config/color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingBottom: hp('15'),
  },
  myclassesView: {
    flexDirection: 'row',
    marginRight: wp('6'),
  },
  MainView: {
    marginTop: hp('1'),
  },
  inforView: {
    width: wp('80'),
    alignSelf: 'center',
    backgroundColor: MentorColor.MentorLightTheme,
  },
  createClassView: {
    alignItems: 'center',
    marginBottom: hp('3'),
  },
  createButton: {
    width: wp('70'),
    height: hp('5'),
    backgroundColor: MentorColor.MentorThemeFirst,
  },
  MainScroll: {
    // flex: 1,
    backgroundColor: colorTutor_.topNavigationColor,
    paddingBottom: hp('5'),
    marginTop: hp('2'),
  },
});
