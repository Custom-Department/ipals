import {Platform, StyleSheet, Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {MentorColor, color, colorTutor_} from '../../../config/color';
export const styles = StyleSheet.create({
    mainView:{
       flex:1,
       backgroundColor:colorTutor_.ipalBlue
    },
    secondmainView:{
        width:wp('100'),
        alignItems:'center',
    },
    roundedview:{
        width:wp('95'),
        // height:hp('45'),
        marginTop:hp('2'),
        borderRadius:15,
        // justifyContent:'space-around',
        backgroundColor:color.white,
    },
    imagecrop:{
        borderRadius: Math.round(
        Dimensions.get('window').width + Dimensions.get('window').height,),
        width: Dimensions.get('window').width * 0.23,
        height: Dimensions.get('window').width * 0.23,
    },
    ImagerowView:{
        flexDirection:'row',
        marginTop:hp('2'),
        marginBottom:hp('2'),
        justifyContent:'space-evenly'
    },
    usernamestyle:{
        fontSize:hp('2.8'),
        color:color.black,
    },
    HeadingText:{
        flexDirection:'column',
        justifyContent:'space-evenly',
    },
    divider:{
        width:wp('40'),
        height:hp('0.2'),
        backgroundColor:MentorColor.MentorThemeBackGround
    },
    textfinance:{
        color:color.white,
        fontSize:hp('1.7')
    },
    category:{
        fontSize:hp('1.6'),
        color:colorTutor_.ipalforgetTxtColor
    },
    paragraphtext:{
        textAlign:'left',
        marginLeft:wp('4'),
        marginBottom:hp('2'),
        marginHorizontal:wp('2'),
        color:color.black,
        fontSize:hp('1.8')
    },
    view:{
        flex:1,
        marginBottom:hp('2'),
        justifyContent:'flex-end',
    },
    buttonView:{
      
        flexDirection:'row',
        justifyContent:'space-around'
    },
    whatsaap:{
        width:wp('30'),
        height:hp('5'),
        borderRadius:10,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        backgroundColor:MentorColor.Whatsaapbutton 
    },
    whatsaapicon:{
        width:wp('6'),
        height:hp('3'),
        tintColor:color.white
    },
    financeview:{
        borderRadius:20,
        alignItems:'center',
        backgroundColor:colorTutor_.ipalforgetTxtColor
    },
    linkedin:{
        width:wp('30'),
        height:hp('5'),
        borderRadius:10,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        backgroundColor:MentorColor.Linkedinbutton,
    },
    buttonText:{
        color:color.white,
        fontSize:hp('1.9')
    },
    categoryheading:{
        alignItems:'center',
        flexDirection:'row',
        width:wp('90')
    },
    innerView: {
        width: wp('45.5'),
        backgroundColor: 'white',
        borderRadius: 10,
        marginLeft: wp('1'),
        marginRight: wp('1'),
        marginBottom: hp('2'),
        overflow: 'hidden',
      },
      timeView: {
        flexDirection: 'row',
        height: hp('4'),
        justifyContent: 'space-around',
        alignItems: 'center',
        width: wp('45.5'),
        marginTop: hp('0.5'),
      },
      centerView: {
        flexDirection: 'row',
        width: wp('41'),
        alignItems: 'center',
        justifyContent: 'space-between',
        alignSelf: 'center',
        marginTop: hp('1'),
        // backgroundColor: 'red',
      },
      innerBottomView: {
        flexDirection: 'row',
        width: wp('18'),
        justifyContent: 'center',
        // backgroundColor: 'yellow',
      },
      verDivider: {
        height: hp('7'),
        width: 1,
        backgroundColor: '#909090',
      },
      bottomButton: {
        width: wp('45.5'),
        borderRadius: 0,
        height: hp('4'),
        marginTop: hp('1'),
      },
      subMainView: {
        flexWrap: 'wrap',
        display: 'flex',
        flexDirection:'row'

      },
      subView: {
        backgroundColor: colorTutor_.ipallightGreen,
        borderRadius: 25,
        padding: 5,
        alignItems: 'center',
        width: wp('18'),
        marginBottom: hp('1'),
        marginTop: hp('1'),
        marginRight: wp('0.8'),
        // marginLeft: wp('1.5'),
      },
})
