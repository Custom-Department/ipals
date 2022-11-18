import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {color, colorTutor_, MentorColor} from '../../config/color';
import {TextComp} from '../TextComponent';
const SocialComp = props => {
  const backgroundColor = props?.backgroundColor ?? MentorColor.MentorSubsPlan1;
  return (
    <View style={{...styles.container, backgroundColor: backgroundColor}}>
      <View style={{...styles.innerContainer}}>
        <Ionicons name={props?.name} size={hp('3.9')} color="white" />
        <TextComp color={'white'} text={props.text} />
      </View>
    </View>
  );
};

export default SocialComp;

const styles = StyleSheet.create({
  container: {
    height: hp('6'),
    borderRadius: 5,
    width: wp('43'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp('34'),
  },
});
