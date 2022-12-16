import {Platform, StyleSheet, Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { color, colorTutor_, MentorColor } from '../../config/color';
export const styles = StyleSheet.create({

  SecondView:{
    width:wp('100'),
    backgroundColor:colorTutor_.ipallightGreen
  },
  scrollView:{
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    paddingBottom: hp('20'),
  },
  textarea:{
    width:wp('85'),
    alignSelf:'center',
    margin:20,
  },
  normalImage:{
    color:colorTutor_.ipalforgetTxtColor,
    marginVertical:hp('2') 
  },
  textheading:{
    fontSize:hp('3'),
    color:colorTutor_.ipalforgetTxtColor,
    fontWeight:'bold'
  },
  backgroundImage:{
    alignSelf: 'stretch',
    width: wp('100'),
    height:hp('70')
  },
  imagetext:{
    color:'white', 
    fontSize:hp('2.75'),
    marginHorizontal:wp('4.5'),
    textAlign:'center',
    fontWeight:'bold',
    marginVertical:hp('2'),
    marginTop:hp('10')
  },
  formView:{
    width:wp('90'),
    height:hp('78'),
    backgroundColor:MentorColor.DividerGrey,
    marginHorizontal:wp('5'),
    borderRadius:20,
    alignItems:'center',
    paddingVertical:hp('3')
  },
  countrystyle:{
    backgroundColor:color.coutrypickerbackgroundcolor,
    width:wp('20'),
    height:hp('5'),
    borderTopLeftRadius:7,
    borderBottomLeftRadius:7
  },
  sendbutton:{
    backgroundColor:colorTutor_.ipallightGreen,
    width:wp('75'),
    height:hp('6'),
    borderRadius:20,
    marginTop:hp('2'),
    justifyContent:'center'
  }

})