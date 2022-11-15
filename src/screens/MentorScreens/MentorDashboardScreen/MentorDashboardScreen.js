import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {MentorClassComp} from '../../../components/MentorClassComp/MentorClassComp';
import {colorTutor_} from '../../../config/color';

const MentorDashboardScreen = () => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: colorTutor_.topNavigationColor,
      }}>
      <MentorClassComp />
      {/* <Text>MentorDashboardScreen</Text> */}
    </View>
  );
};

export default MentorDashboardScreen;
