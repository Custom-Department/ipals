import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { color, colorTutor_ } from "../../config/color";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import styles from "./styles";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
export const OnboardBackHeadeerComponent = props =>{
return(
    <View style={{...styles.topView,
        backgroundColor: colorTutor_.ipallightGreen,
    }}>
          <View style={styles.innerTopView}>
          <View
          style={{
            flexDirection: 'row',
            marginLeft: wp('3'),
            alignItems: 'center',
          }}>

          <Ionicons
            onPress={() => navigation.goBack()}
            style={styles.cameraStyle}
            name="arrow-back"
            size={hp('3')}
            color="white"
          />
        </View>
        <Text style={styles.headingText}>{props?.headingtext}</Text>    
        <View style={styles.iconView}>
       
        {props.share&&(
          <TouchableOpacity style={{marginHorizontal:wp('2')}}>
          <AntDesign
              onPress={() => console.log("menu press")}
              name={"sharealt"}
              size={hp('3')}
              color={color.white}
            />
            </TouchableOpacity>
            )}
        {props.list&&(
        <TouchableOpacity style={{marginHorizontal:wp('2')}}>
        <FontAwesome5
              onPress={() => console.log("menu press")}
              name={"clipboard-list"}
              size={hp('3')}
              color={color.white}
            />
            </TouchableOpacity>
            )}
        {props.heart&&(
        <TouchableOpacity style={{marginHorizontal:wp('2')}}>
        <AntDesign
              onPress={() => console.log("menu press")}
              name={"hearto"}
              size={hp('3')}
              color={color.white}
            />
            </TouchableOpacity>
            )}
        {props.threedots&&(
         <TouchableOpacity style={{marginHorizontal:wp('2')}}>
        <Entypo
              onPress={() => console.log("menu press")}
              name={"dots-three-vertical"}
              size={hp('3')}
              color={color.white}
            />
            </TouchableOpacity>
            )}
        </View>
          </View>
    </View>
)
}