import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import HorizontalDividerComp from '../../../components/HorizontalDividerComp/HorizontalDividerComp';
import {MentorClassComp} from '../../../components/MentorClassComp/MentorClassComp';
import {TextComp} from '../../../components/TextComponent';
import {colorTutor_, MentorColor} from '../../../config/color';
import {styles} from './style';

const MentorDashboardScreen = () => {
  return (
    <View style={styles.mainView}>
      <View style={styles.classDashBoard}>
        <TextComp
          style={{color: MentorColor.MentorThemeFirst}}
          text="Create your class"
        />
        <HorizontalDividerComp
          width={'55'}
          color={MentorColor.MentorThemeFirst}
        />
      </View>
      <MentorClassComp />
      {/* <Text>MentorDashboardScreen</Text> */}
    </View>
  );
};

export default MentorDashboardScreen;
