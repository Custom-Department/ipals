import React, {useState} from 'react';
import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import {MentorClassComp} from '../../../components/MentorClassComp/MentorClassComp';
import {colorTutor_} from '../../../config/color';
import {styles} from './style';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FrontMentorFlatlist from '../../../components/FrontMentorFlatlist/FrontMentorFlatlist';
import HorizantalDetailComp from '../../../components/HorizantalDetailComp/HorizantalDetailComp';
import {SearchbarHeader} from '../../../components/SearchBarHeaderComp/SearchbarHeader';
import SubcriptionPackComp from '../../../components/SubcriptionPackComp/SubcriptionPackComp';
const MentorDashboardScreen = () => {
  const [teacherList, setTeacherList] = useState([
    {
      id: 0,
      image: require('../../../image/profile.jpg'),
      name: 'Sarah Martin',
      clock: '9:00PM - 10:00PM',
      subject: 'English',
      timing: '1 hour',
    },
    {
      id: 1,
      image: require('../../../image/profile.jpg'),
      name: 'Sarah Martin',
      clock: '9:00PM - 10:00PM',
      subject: 'English',
      timing: '1 hour',
    },
    {
      id: 2,
      image: require('../../../image/profile.jpg'),

      name: 'Sarah Martin',
      clock: '9:00PM - 10:00PM',
      subject: 'English',
      timing: '1 hour',
    },
    {
      id: 3,
      image: require('../../../image/profile.jpg'),

      name: 'Sarah Martin',
      clock: '9:00PM - 10:00PM',
      subject: 'English',
      timing: '1 hour',
    },
    {
      id: 4,

      image: require('../../../image/profile.jpg'),
      name: 'Sarah Martin',
      clock: '9:00PM - 10:00PM',
      subject: 'English',
      timing: '1 hour',
    },
    {
      id: 5,
      image: require('../../../image/profile.jpg'),

      name: 'Sarah Martin',
      clock: '9:00PM - 10:00PM',
      subject: 'English',
      timing: '1 hour',
    },
    {
      id: 6,

      image: require('../../../image/profile.jpg'),
      name: 'Sarah Martin',
      clock: '9:00PM - 10:00PM',
      subject: 'English',
      timing: '1 hour',
    },
  ]);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colorTutor_.topNavigationColor,
      }}>
      <SearchbarHeader heart={true} />

      <ScrollView
        scrollEnabled
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          // flex: 1,
          backgroundColor: colorTutor_.topNavigationColor,
          paddingBottom: hp('20'),
        }}>
        <View style={styles.MainView}>
          <HorizantalDetailComp
            leftText={`   My classes`}
            rightText={` view all classes`}
          />
          <FrontMentorFlatlist data={teacherList} />
        </View>
        <View style={styles.MainView}>
          <HorizantalDetailComp
            leftText={`   Pending requests`}
            rightText={` view all classes`}
          />
          <FrontMentorFlatlist data={teacherList} />
        </View>
        <View style={styles.MainView}>
          <HorizantalDetailComp
            leftText={`   Your Subcription`}
            rightText={` view all plans`}
          />
          <View style={{marginTop: wp('3')}}>
            <SubcriptionPackComp />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default MentorDashboardScreen;
