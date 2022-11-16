import React from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import {TuteeHomeComp} from '../TuteeHomeComp/TuteeHomeComp';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {MentorColor} from '../../config/color';

const SubcriptionPackComp = () => {
  return (
    <View style={styles.MainView}>
      <Text>SubcriptionPackComp</Text>
    </View>
  );
};

export default SubcriptionPackComp;

const styles = StyleSheet.create({
  MainView: {
    height: hp('15'),
    alignSelf: 'center',
    width: wp('90'),
    backgroundColor: MentorColor.MentorThemeFirst,
    borderRadius: 10,
  },
});
