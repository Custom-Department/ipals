import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { colorTutor_ } from '../../config/color';

export const styles = StyleSheet.create({
  container: {
    width: wp('94'),
    height: hp('15'),
    backgroundColor: 'white',
    alignSelf: 'center',
    marginBottom:hp('2')
  },
  image:
  {
    borderRadius: 50,
    height: hp('5'), width: wp('10'),
    marginRight: wp('5'),

  },
  topView: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center'
  },
  lasView:{
    backgroundColor:colorTutor_.blue,
    height:hp('6'),
    flexDirection:'row'

  }
});
