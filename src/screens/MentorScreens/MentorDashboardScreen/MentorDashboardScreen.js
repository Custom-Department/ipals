import React, {useState} from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {MentorClassComp} from '../../../components/MentorClassComp/MentorClassComp';
import {colorTutor_, MentorColor} from '../../../config/color';
import {styles} from './style';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FrontMentorFlatlist from '../../../components/FrontMentorFlatlist/FrontMentorFlatlist';
import HorizantalDetailComp from '../../../components/HorizantalDetailComp/HorizantalDetailComp';
import SubcriptionPackComp from '../../../components/SubcriptionPackComp/SubcriptionPackComp';
import {SearchbarHeader} from '../../../components/SearchBarHeaderComp/SearchbarHeader';
import {ButtonThemeComp} from '../../../components/ButtonThemeComp/ButtonThemeComp';
import InformationTextView from '../../../components/InformationTextView/InformationTextView';
import {ButtonIconComp} from '../../../components/ButtonIconComp/ButtonIconComp';
const MentorDashboardScreen = ({navigation}) => {
  const [teacherList, setTeacherList] = useState([
    // {
    //   id: 0,
    //   image: require('../../../image/profile.jpg'),
    //   name: 'Sarah Martin',
    //   clock: '9:00PM - 10:00PM',
    //   subject: 'English',
    //   timing: '1 hour',
    // },
    // {
    //   id: 1,
    //   image: require('../../../image/profile.jpg'),
    //   name: 'Sarah Martin',
    //   clock: '9:00PM - 10:00PM',
    //   subject: 'English',
    //   timing: '1 hour',
    // },
    // {
    //   id: 2,
    //   image: require('../../../image/profile.jpg'),
    //   name: 'Sarah Martin',
    //   clock: '9:00PM - 10:00PM',
    //   subject: 'English',
    //   timing: '1 hour',
    // },
    // {
    //   id: 3,
    //   image: require('../../../image/profile.jpg'),
    //   name: 'Sarah Martin',
    //   clock: '9:00PM - 10:00PM',
    //   subject: 'English',
    //   timing: '1 hour',
    // },
    // {
    //   id: 4,
    //   image: require('../../../image/profile.jpg'),
    //   name: 'Sarah Martin',
    //   clock: '9:00PM - 10:00PM',
    //   subject: 'English',
    //   timing: '1 hour',
    // },
    // {
    //   id: 5,
    //   image: require('../../../image/profile.jpg'),
    //   name: 'Sarah Martin',
    //   clock: '9:00PM - 10:00PM',
    //   subject: 'English',
    //   timing: '1 hour',
    // },
    // {
    //   id: 6,
    //   image: require('../../../image/profile.jpg'),
    //   name: 'Sarah Martin',
    //   clock: '9:00PM - 10:00PM',
    //   subject: 'English',
    //   timing: '1 hour',
    // },
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
          {teacherList.length > 0 ? (
            <FrontMentorFlatlist data={teacherList} />
          ) : (
            <View style={styles.createClassView}>
              <InformationTextView
                iconcolor={MentorColor.MentorThemeFirst}
                style={{
                  width: wp('85'),
                  backgroundColor: MentorColor.MentorLightTheme,
                }}
                textColor={MentorColor.MentorThemeFirst}
                text={'You don’t have any class created'}
              />
              <View style={{marginTop: hp('2')}}>
                <ButtonIconComp
                  onPress={() => navigation.navigate('MentorServices')}
                  style={{
                    width: wp('70'),
                    height: hp('7'),
                    backgroundColor: MentorColor.MentorThemeFirst,
                  }}
                  text={'Create class'}
                  name={'add'}
                  size={hp('3')}
                />
              </View>
            </View>
          )}
        </View>
        <View style={styles.MainView}>
          <HorizantalDetailComp
            leftText={`   Pending requests`}
            rightText={` view all classes`}
          />
          {teacherList.length > 0 ? (
            <FrontMentorFlatlist data={teacherList} />
          ) : (
            <View style={styles.createClassView}>
              <InformationTextView
                iconcolor={MentorColor.MentorThemeFirst}
                style={{
                  width: wp('85'),
                  backgroundColor: MentorColor.MentorLightTheme,
                }}
                textColor={MentorColor.MentorThemeFirst}
                text={'You don’t have any pending classes'}
              />
            </View>
          )}
        </View>
        <View style={styles.MainView}>
          <HorizantalDetailComp
            leftText={`   Your Subcription`}
            rightText={` view all plans`}
          />
          <View style={{marginTop: wp('3')}}>
            <SubcriptionPackComp
              iconcolor={MentorColor.MentorlightGrey}
              data={teacherList.length > 0 ? false : true}
              text={
                teacherList.length > 0
                  ? `You are subscribed to our yearly package`
                  : `You are not subscribed to any plans`
              }
            />
          </View>
        </View>
      </ScrollView>
      {/* <Text>MentorDashboardScreen</Text> */}
    </View>
  );
};

export default MentorDashboardScreen;
