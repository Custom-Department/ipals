import {Platform, StyleSheet, Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {MentorColor, color, colorTutor_} from '../../../config/color';
export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: colorTutor_.ipalBlue,
      },
      classDashBoard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
      },
      textheading:{
        alignItems:'center',
        marginTop:hp('3')
      },
      modalbottamView: {
        width: wp('100'),
        height: hp('50'),
        paddingVertical: hp('0.5'),
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: Platform.OS == 'ios' ? 'visible' : 'hidden',
        zIndex: 1,
      },
      stripecardnumber: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: wp('3'),
        marginTop:hp('2'),
       
      },
      continue: {
        backgroundColor: MentorColor.MentorThemeFirst,
        height: hp('6'),
        margin: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 22,
        width: wp('80'),
        alignSelf: 'center',
      },
      childcardname: {
        fontSize: hp('2.2'),
        backgroundColor: 'white',
        flex: 1,
        height: hp('6'),
        borderRadius: 10,
        marginTop: hp('3'),
        paddingLeft: wp('2'),
        color:color.black
      },
      childcard: {
        borderRadius: 10,
        marginLeft: wp('3'),
        width: wp('20'),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        height: hp('6'),
      },
      childcvc: {
        borderRadius: 10,
        marginLeft: wp('3'),
        width: wp('35'),
        fontSize: hp('2.2'),
        backgroundColor: 'white',
        alignItems: 'center',
        height: hp('6'),
        marginLeft: wp('10'),
      },
})
