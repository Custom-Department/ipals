import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BackHeaderComponent } from '../../../components/BackHeaderComponent/BackHeaderComponent'
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { colorTutor_ } from '../../../config/color';
import { TextComp } from '../../../components/TextComponent';
import { styles } from './style';
import { LoginInputComp } from '../../../components/LoginInputComp/LoginInputComp';
const MessageScreen = ({route}) => {
  const items=route.params
  console.log(17,items)
  return (
    <View style={{flex:1}}>
      <BackHeaderComponent heading={items?.firstText} changeIcon3={
        <Entypo
        onPress={() => props?.settingOnPress()}
        name={'dots-three-vertical'}
        size={hp('3')}
        color={colorTutor_.blue}
      />}
      changeIcon2={
        <FontAwesome5
        onPress={() => props?.settingOnPress()}
        name={'video'}
        size={hp('3')}
        color={colorTutor_.blue}
      />
      }
      changeIcon1={
        <FontAwesome
        onPress={() => props?.settingOnPress()}
        name={'phone'}
        size={hp('3')}
        color={colorTutor_.blue}
      />
      }
      bellOnPress={()=>console.log('bell')} />
      <ScrollView >
        <View style={{...styles.recView,alignSelf: 'flex-start'}}>
        <TextComp text={`Hi, we aren't ready to start our class today, so  you  schedule another time. Thanks.`}/>
        </View>
        <View style={{...styles.recView,alignSelf: 'flex-end',backgroundColor:colorTutor_.sendColor}}>
        <TextComp text={`Alright, I’ll schedule other time for the class.. `}/>
        </View>
      </ScrollView>
      <View style={styles.chatButtonView}>
          <LoginInputComp eyeIconSize={hp('3')} style={styles.innerChatView} placeholder={'Type your message'} eyeIconName={'send'}/>
      </View>
    </View>
  )
}

export default MessageScreen

