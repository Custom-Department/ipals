import { StyleSheet } from "react-native";
import { colorTutor_ } from "../../../config/color";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    midView:{
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        width:wp('90'),
        marginTop:hp('3')
    },
    bottomBar: {
        position: "absolute",
        backgroundColor: colorTutor_.blue,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        height: hp('9'),
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        bottom: 0,
        width: wp('100'),
        paddingHorizontal: wp('10'),

    },
    image:{
        zIndex:1,
        height:hp('12'),
        width:wp('25'),
        borderRadius:70,
    },
    cameraStyle:{
        alignSelf:'center',
    },
    textharMatin:{
        fontSize:hp('3.2'),
        marginTop:hp('4')
    },
    subView: {
       

        backgroundColor: colorTutor_.ipalforgetTxtColor,
        borderRadius: 10,  
        paddingTop: hp('0.5'),
        paddingBottom: hp('0.5'),
        paddingLeft: hp('1.5'),
        paddingRight: hp('1.5'),
        alignSelf: 'center',
        marginTop: hp('1'),
      },
      desView:{
        marginTop:hp('3'),
        backgroundColor:'white',
        padding:10,
        borderRadius:10
      },
      textdes:{
        paddingTop:hp('2'),
        paddingBottom:hp('1'),
        textAlign:'center',
        letterSpacing:0.5
      }
})