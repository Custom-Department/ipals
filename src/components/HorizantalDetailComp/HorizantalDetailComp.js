import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TextComp} from '../TextComponent';
import {MentorColor} from '../../config/color';
import HorizontalDividerComp from '../HorizontalDividerComp/HorizontalDividerComp';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const HorizantalDetailComp = props => {
  return (
    <View style={styles.topView}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{color: MentorColor.MentorThemeFirst, fontSize: hp('1.2')}}>
          {'\u2B24'}
        </Text>
        <TextComp style={styles.text} text={props?.leftText} />
      </View>
      <View
        style={{
          alignItems: 'flex-end',
          paddingRight: wp('5'),
        }}>
        <TextComp style={styles.text} text={props?.rightText} />
        <HorizontalDividerComp
          style={{
            marginTop: hp('0.5'),
            marginHorizontal: wp('0'),
            color: MentorColor.MentorLightTheme,
          }}
          color={MentorColor.MentorThemeFirst}
          width={'33'}
        />
      </View>
    </View>
  );
};

export default HorizantalDetailComp;

const styles = StyleSheet.create({
  topView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: hp('1.9'),
    color: MentorColor.MentorThemeFirst,
    fontWeight: 'bold',
  },
});
