import {Platform, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colorTutor_} from '../../config/color';

export default styles = StyleSheet.create({
    topView: {
        height: Platform.OS == 'ios' ? hp('12') : hp('10'),
        width: wp('100'),
        justifyContent: 'center',
        paddingTop: Platform.OS == 'ios' ? hp('3') : hp('0'),
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
    
        elevation: 4,
      },
      txt: {
        fontSize: hp('1.5'),
      },
      innerTopView: {
        alignItems: 'center',
        flexDirection: 'row',
        width: wp('98'),
        marginTop: hp('1'),
      },
    headingText: {
    color: 'white',
    fontSize: hp('2.5'),
    marginLeft:wp('5'),
    width: wp('50'),
  },
  iconView: {
    marginLeft:'auto',
    flexDirection: 'row',
    justifyContent:'space-around',
  },
})


