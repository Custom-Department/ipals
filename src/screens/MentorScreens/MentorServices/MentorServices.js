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
import {SearchbarHeader} from '../../../components/SearchBarHeaderComp/SearchbarHeader';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {LoginInputComp} from '../../../components/LoginInputComp/LoginInputComp';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {ButtonThemeComp} from '../../../components/ButtonThemeComp/ButtonThemeComp';
import {GetCategoriesUrl, MentorCreateClass} from '../../../config/Urls';
import {useEffect} from 'react';
import {ApiGet, errorHandler} from '../../../config/helperFunction';
import {
  errorMessage,
  successMessage,
} from '../../../config/NotificationMessage';
import {useSelector} from 'react-redux';

var arrayCalender = [];
const MentorServices = ({navigation}) => {
  const {userData, token} = useSelector(state => state.userData);
  const [tutorValue, setTutorValue] = useState({
    CategoriesData: null,
    price: '',
  });
  const updateFinalState = data => setTutorValue(prev => ({...prev, ...data}));
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
  const [isloading, setIsloading] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [markedDates, setMarkedDates] = useState({});
  const h = {
    CategoriesData: 'CategoriesData',
  };
  const {price} = tutorValue;
  const [pickerState, setPickerState] = useState({
    CategoriesData: [],
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
  const {languageData, CategoriesData} = pickerState;
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
  const CreateClass = () => {
    // MentorCreateClass
    setIsloading(true);
    const {CategoriesData} = tutorValue;
    if (
      CategoriesData != null &&
      price != '' &&
      arrayCalender.length > 0 &&
      endDate != null &&
      endDate != ''
    ) {
      let body = {
        user_id: userData.id,
        category_id: CategoriesData,
        price: price,
        from: moment(startDate, 'h:mm:ss A').format('HH:mm:ss'),
        to: moment(endDate, 'h:mm:ss A').format('HH:mm:ss'),
        schedule: arrayCalender,
      };
      axios
        .post(MentorCreateClass, body, {
          headers: {Authorization: `Bearer ${token}`},
        })
        .then(function (res) {
          getTutorValue(null, 'CategoriesData');
          arrayCalender = [];
          updateFinalState({price: ''});
          setStartDate(time);
          setEndDate(null);
          setMarkedDates({});
          navigation.navigate('MentorDashboardScreen');
          setIsloading(false);
          successMessage('Your Class Has been created');
        })
        .catch(function (error) {
          setIsloading(false);
          errorMessage(errorHandler(error));
        });
    } else {
      setIsloading(false);
      errorMessage('Please complete all fields');
    }
  };
  const updateState = data => setPickerState(prev => ({...prev, ...data}));
  const getPickerData = (state, url) => {
    ApiGet(url).then(res => {
      if (res.status == 200) {
        updateState({[state]: res.json.data});
      } else {
        errorMessage('Network Request Failed');
      }
    });
  };
  useEffect(() => {
    getPickerData('CategoriesData', GetCategoriesUrl);
  }, []);
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
            text={'Select your Category'}
            headingStyle={styles.headingStyle}
            data={CategoriesData}
            setSelectedValue={(val, state) => getTutorValue(val, state)}
            h={h.CategoriesData}
            selectedValue={tutorValue.CategoriesData}
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
            value={price}
            onChangeText={e => updateFinalState({price: e})}
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
            isLoading={isloading}
            onPress={() => CreateClass()}
            text="Create class"
            style={styles.buttonStyle}
          />
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

export default MentorServices;
