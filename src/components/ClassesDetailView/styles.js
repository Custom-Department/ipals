import {Dimensions, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colorTutor_} from '../../config/color';

export const styles = StyleSheet.create({
  container: {
    width: wp('94'),
    // height: hp('15'),
    backgroundColor: 'white',
    alignSelf: 'center',
    marginBottom: hp('2'),
    borderRadius: 10,
  },
  image: {
    borderRadius: Math.round(
      Dimensions.get('window').width + Dimensions.get('window').height,
    ),
    width: Dimensions.get('window').width * 0.12,
    height: Dimensions.get('window').width * 0.12,
    // height: hp(
    marginRight: wp('5'),
  },
  topView: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  lasView: {
    backgroundColor: colorTutor_.blue,
    height: hp('6'),
    flexDirection: 'row',
  },
});
