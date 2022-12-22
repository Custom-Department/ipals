import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colorTutor_} from '../../config/color';

export const styles = StyleSheet.create({
  container: {
    height: hp('8'),
    width: wp('95'),
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    borderRadius: 5,
    marginBottom: hp('2'),
  },
  image: {
    width: wp('6'),
    marginLeft: wp('2'),
  },
  edit: {
    width: wp('6'),
  },
  editView: {
    marginLeft: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: wp('3'),
  },
});
