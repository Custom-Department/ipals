import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colorTutor_, MentorColor} from '../../../config/color';
import {TextComp} from '../../../components/TextComponent';
import HorizontalDividerComp from '../../../components/HorizontalDividerComp/HorizontalDividerComp';
import {styles} from './style';
import PickerComponent from '../../../components/PickerComponent/PickerComponent';
import {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import axios from 'react-native-axios';
import moment from 'moment/moment';
import {HeaderComponent} from '../../../components/HeaderComponent/HeaderComponent';
import {SearchbarHeader} from '../../../components/SearchBarHeaderComp/SearchbarHeader';

const MentorServices = () => {
  const [tutorValue, setTutorValue] = useState({
    languageData: null,
  });
  const date = new Date();
  var time = new Date();
  var getTime = time.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });
  const [isVisibleTime, setIsVisibleTime] = useState(false);
  const [isVisibleEndTime, setIsVisibleEndTime] = useState(false);
  const [isDate2, setIsDate2] = useState(false);
  const [startDate, setStartDate] = useState(time);
  const [isDate, setIsDate] = useState(false);
  const [endDate, setEndDate] = useState(null);
  const h = {
    languageData: 'languageData',
  };
  const {
    PhoneNumber,
    BioData,
    Password,
    ConfirmPassword,
    linkedin_id,
    linkedin_token,
    linkedin_avatar,
    linkedin_expires,
    linkedin_refresh_token,
    // EducationData,
    FirstName,
    LastName,
    ZipCodeData,
    AcademicYearData,
    Email,
  } = tutorValue;
  const [pickerState, setPickerState] = useState({
    tutorData: [
      {
        id: 'teacher',
        title: 'Tutor',
        value: 'tutorData',
        type: 'tutorData',
      },
      {
        id: 'student',
        title: 'Tweety',
        value: 'tweetyData',
        type: 'tweetyData',
      },
    ],
    languageData: [
      {
        id: 0,
        title: 'English',
        value: 'English',
        type: 'languageData',
      },
      {
        id: 1,
        title: 'French',
        value: 'French',
        type: 'languageData',
      },
    ],
  });
  const {languageData} = pickerState;
  const getTutorValue = (value, State) => {
    setTutorValue(pre => ({
      ...tutorValue,
      [State]: value,
    }));
  };
  const upadateStartDate = (e, ios) => {
    let d = e;
    // let d = ios ? e : new Date(e?.nativeEvent?.timestamp);

    setIsDate(false);
    setStartDate(d);
    setEndDate(d);
  };
  const upadateEndDate = (e, ios) => {
    let d = e;
    // let d = ios ? e : new Date(e?.nativeEvent?.timestamp);
    setIsDate2(false);

    setEndDate(d);
  };
  const DropDownView = () => {
    return (
      <View style={styles.inputView}>
        <Text
          style={{
            paddingHorizontal: wp('2'),
            color: colorTutor_.TxtColor,
            fontSize: hp('2'),
          }}>
          From
        </Text>
        <>
          <TouchableOpacity
            onPress={() => setIsVisibleTime(true)}
            style={styles.dateContainer}>
            <Text style={styles.dateText}>
              {moment(startDate, 'hh').format('LT')}
            </Text>
          </TouchableOpacity>
          <DateTimePickerModal
            mode={'time'}
            isVisible={isVisibleTime}
            onConfirm={e => {
              upadateStartDate(e, true);
              setIsVisibleTime(false);
            }}
            onCancel={() => {
              setIsVisibleTime(false);
            }}
          />
        </>
        <Text
          style={{
            paddingHorizontal: wp('2'),
            color: colorTutor_.TxtColor,
            fontSize: hp('2'),
          }}>
          To
        </Text>
        <>
          {endDate != null ? (
            <>
              <TouchableOpacity
                onPress={() => setIsVisibleEndTime(true)}
                style={styles.dateContainer}>
                <Text style={styles.dateText}>
                  {moment(endDate, 'hh').format('LT')}
                </Text>
              </TouchableOpacity>
              <DateTimePickerModal
                mode={'time'}
                is24Hour={true}
                isVisible={isVisibleEndTime}
                onConfirm={e => {
                  upadateEndDate(e, true);
                  setIsVisibleEndTime(false);
                }}
                onCancel={() => {
                  setIsVisibleEndTime(false);
                }}
              />
            </>
          ) : (
            <View
              style={{
                backgroundColor: MentorColor.MentorThemeFirst,
                height: hp('4.5'),
                width: wp('29'),
                borderRadius: 8,
              }}
            />
          )}
        </>
      </View>
    );
  };
  const updateState = data => setPickerState(prev => ({...prev, ...data}));
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: MentorColor.MentorThemeBackGround,
        // paddingTop: hp('6'),
        // justifyContent: 'center',
      }}>
      <SearchbarHeader />
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
      <PickerComponent
        style={{width: wp('90'), marginRigh: wp('2'), alignSelf: 'center'}}
        text={'Select your subject'}
        headingStyle={{
          marginLeft: wp('7'),
          color: MentorColor.MentorThemeFirst,
        }}
        data={languageData}
        setSelectedValue={(val, state) => getTutorValue(val, state)}
        h={h.languageData}
        selectedValue={tutorValue.languageData}
      />
      <PickerComponent
        style={{width: wp('90'), marginRigh: wp('2'), alignSelf: 'center'}}
        text={'Select your subject'}
        data={languageData}
        headingStyle={{
          marginLeft: wp('7'),
          color: MentorColor.MentorThemeFirst,
        }}
        setSelectedValue={(val, state) => getTutorValue(val, state)}
        h={h.languageData}
        selectedValue={tutorValue.languageData}
      />
      <TextComp
        style={{
          marginLeft: wp('7'),
          color: MentorColor.MentorThemeFirst,
          maginTop: hp('2'),
        }}
        text="Create time schdule"
      />

      <DropDownView />
    </View>
  );
};

export default MentorServices;
