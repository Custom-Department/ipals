import {Platform, StyleSheet,Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {MentorColor,color,colorTutor_} from '../../config/color';
export const styles = StyleSheet.create({
    
    flatlistmain:{
        width:wp('45'),
        height:hp('23'),
        marginRight:wp('1.5'),
        borderRadius:10,
        justifyContent:'space-evenly',
        backgroundColor:color.white
    },
    flupperView:{
        flexDirection:'row',
        justifyContent:'space-evenly'
    },
    flimagecrop:{
        borderRadius: Math.round(
        Dimensions.get('window').width + Dimensions.get('window').height,),
        width: Dimensions.get('window').width * 0.10,
        height: Dimensions.get('window').width * 0.10,
    },
    lineView:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        backgroundColor:colorTutor_.lightAquaGreen
    },
    timeText:{
        color:colorTutor_.ipallightGreen,
        fontSize:hp('2')
    },
    bottomView:{
        height:hp('5'), 
        justifyContent:'space-evenly',
        flexDirection:'row'
    },
    bottombutton:{
        height:hp('4'),
        borderRadius:5, 
        padding:6,
        backgroundColor:colorTutor_.ipalBlue,
    },
    price:{
        color:color.white,
        fontSize:hp('2.2')
    },
    verticaldivider:{
        width:wp('0.4'),
        height:hp('4'),
        backgroundColor:MentorColor.DividerGrey
    }
})