import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {color, colorTutor_, MentorColor} from '../../../config/color';
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
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {LoginInputComp} from '../../../components/LoginInputComp/LoginInputComp';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {ButtonThemeComp} from '../../../components/ButtonThemeComp/ButtonThemeComp';

var arrayCalender = [];
const MentorServices = ({navigation}) => {
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
  const [selectedDate, setSelectedDate] = useState('');
  const [markedDates, setMarkedDates] = useState({});
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
                height: hp('3.5'),
                width: wp('29'),
                borderRadius: 8,
              }}
            />
          )}
        </>
      </View>
    );
  };

  const getSelectedDayEvents = (date, index) => {
    let markedDates = {};
    if (arrayCalender.includes(date)) {
      const a = arrayCalender.indexOf(date);
      arrayCalender.splice(a, 1);
    } else {
      arrayCalender.push(date);
    }
    arrayCalender.map(item => {
      markedDates[item] = {
        selected: true,
        color: MentorColor.MentorThemeFirst,
        textColor: '#FFFFFF',
        borderRadius: 20,
        fontWeight: 'bold',
      };
    });
    let serviceDate = moment(date);
    serviceDate = serviceDate.format('DD.MM.YYYY');
    setSelectedDate(selectedDate);
    setMarkedDates(markedDates);
  };
  const updateState = data => setPickerState(prev => ({...prev, ...data}));
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: MentorColor.MentorThemeBackGround,
      }}>
      <SearchbarHeader
        onPressSetting={() => navigation.navigate('MentorSettingScreen')}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollStyle}>
        <KeyboardAvoidingView
          behavior={Platform.OS == 'ios' ? 'position' : 'position'}
          style={{flexGrow: 1}}>
          <View style={styles.classDashBoard}>
            <TextComp
              style={{color: MentorColor.MentorThemeFirst}}
              text="Create your class"
            />
            <HorizontalDividerComp
              style={{
                marginHorizontal: wp('0'),
              }}
              width={'55'}
              color={MentorColor.MentorThemeFirst}
            />
          </View>
          <PickerComponent
            style={styles.pickerStyle}
            text={'Select your subject'}
            headingStyle={styles.headingStyle}
            data={languageData}
            setSelectedValue={(val, state) => getTutorValue(val, state)}
            h={h.languageData}
            selectedValue={tutorValue.languageData}
          />
          <PickerComponent
            style={{
              ...styles.pickerStyle,
              marginTop: Platform.OS == 'android' ? hp('1') : hp('0'),
            }}
            text={'Select your subject'}
            data={languageData}
            headingStyle={{
              ...styles.headingStyle,
              marginTop: Platform.OS == 'android' ? hp('3') : hp('0'),
            }}
            setSelectedValue={(val, state) => getTutorValue(val, state)}
            h={h.languageData}
            selectedValue={tutorValue.languageData}
          />
          <TextComp
            style={{
              ...styles.headingStyle,
              marginTop: Platform.OS == 'android' ? hp('3') : hp('2'),
            }}
            text="Create time schdule"
          />
          <DropDownView />
          <TextComp
            style={{
              ...styles.headingStyle,
              marginTop: Platform.OS == 'android' ? hp('3') : hp('2'),
            }}
            text="Select days schedule"
          />
          <Calendar
            minDate={new Date()}
            style={styles.calenderStyle}
            markingType={'period'}
            onDayPress={(day, index) => {
              getSelectedDayEvents(day.dateString, index);
            }}
            markedDates={markedDates}
          />
          <TextComp
            style={{
              ...styles.headingStyle,
              marginTop: Platform.OS == 'android' ? hp('3') : hp('2'),
            }}
            text="Pricing"
          />
          <LoginInputComp
            style={{
              alignSelf: 'center',
              width: wp('90'),
            }}
            keyboardType={'number-pad'}
            placeholder="Price"
            changeFirstIcon={
              <FontAwesome
                name={'dollar'}
                color={colorTutor_.bookColor}
                style={{
                  marginRight: wp('3'),
                  marginLeft: wp('1'),
                }}
                size={hp('2')}
              />
            }
            leftDivider={<View style={styles.verDivider} />}
          />
          <ButtonThemeComp
            onPress={() => console.log('dkvksdnk')}
            text="Create class"
            style={styles.buttonStyle}
          />
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

export default MentorServices;
