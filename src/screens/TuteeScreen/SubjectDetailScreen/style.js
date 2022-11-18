import {Dimensions, Platform, StyleSheet} from 'react-native';
import {color, colorTutor_} from '../../../config/color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingBottom: hp('15'),
    backgroundColor:colorTutor_.ipalBlue
  },
  profileView:{
    backgroundColor:'white',
    borderRadius:5,
  },
  image:{
    borderRadius: Math.round(
      Dimensions.get('window').width + Dimensions.get('window').height,
    ),
    width: Dimensions.get('window').width * 0.25,
    height: Dimensions.get('window').width * 0.25,
  },
  circleImageView:{
    flexDirection:'row',
    
  }
});
