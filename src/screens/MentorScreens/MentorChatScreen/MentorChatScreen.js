import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {BackHeaderComponent} from '../../../components/BackHeaderComponent/BackHeaderComponent';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colorTutor_, MentorColor} from '../../../config/color';
import {TextComp} from '../../../components/TextComponent';
import {LoginInputComp} from '../../../components/LoginInputComp/LoginInputComp';
import {styles} from './style';
import InformationTextView from '../../../components/InformationTextView/InformationTextView';
const MentorChatScreen = ({route}) => {
  const items = route.params;
  return (
    <View style={{flex: 1}}>
      <BackHeaderComponent
        // style={{backgroundColor: MentorColor.MentorThemeFirst}}
        heading={items?.firstText}
        changeIcon3={
          <Entypo
            // onPress={() => props?.settingOnPress()}
            name={'dots-three-vertical'}
            size={hp('3')}
            color={colorTutor_.blue}
          />
        }
        changeIcon2={
          <FontAwesome5
            // onPress={() => props?.settingOnPress()}
            name={'video'}
            size={hp('3')}
            color={colorTutor_.blue}
          />
        }
        changeIcon1={
          <FontAwesome
            // onPress={() => props?.settingOnPress()}
            name={'phone'}
            size={hp('3')}
            color={colorTutor_.blue}
          />
        }
        bellOnPress={() => console.log('bell')}
      />
      <InformationTextView
        iconcolor={MentorColor.MentorThemeFirst}
        textStyle={{
          marginLeft: wp('1'),
        }}
        style={styles.exclView}
        textColor={MentorColor.MentorThemeFirst}
        text={'Your messages will be deleted in 3 days before payment process'}
      />
      <ScrollView>
        <View style={{...styles.recView, alignSelf: 'flex-start'}}>
          <TextComp
            text={`Hi, we aren't ready to start our class today, so  you  schedule another time. Thanks.`}
          />
        </View>
        <View
          style={{
            ...styles.recView,
            alignSelf: 'flex-end',
            backgroundColor: colorTutor_.sendColor,
          }}>
          <TextComp
            text={`Alright, I’ll schedule other time for the class.. `}
          />
        </View>
      </ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'position' : 'height'}>
        <View style={styles.chatButtonView}>
          <LoginInputComp
            eyeIconSize={hp('3')}
            inputStyle={styles.innerChatView}
            placeholder={'Type your message'}
            eyeIconName={'send'}
          />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default MentorChatScreen;
