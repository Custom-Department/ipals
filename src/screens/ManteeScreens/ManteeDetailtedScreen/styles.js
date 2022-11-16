import {Platform, StyleSheet,Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {MentorColor,color,colorTutor_} from '../../config/color';
export const styles = StyleSheet.create({
    mainView:{
       flex:1},
    secondmainView:{
        width:wp('100'),
        height:hp('100'),
        alignItems:'center',
        backgroundColor:colorTutor_.ipalBlue
    },
    roundedview:{
        width:wp('90'),
        height:hp('45'),
        marginTop:hp('2'),
        justifyContent:'space-around',
        borderRadius:15,
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
        textAlign:'center',
        marginHorizontal:wp('2'),
        fontSize:hp('1.8')
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
})