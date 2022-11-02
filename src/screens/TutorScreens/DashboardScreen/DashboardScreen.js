import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextComponent,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import {styles} from './style';
import {globalStyles} from '../../../config/globalStyles';
import {HeaderComponent} from '../../../components/HeaderComponent/HeaderComponent';
import {color, colorTutor_} from '../../../config/color';
import {ButtonIconComp} from '../../../components/ButtonIconComp/ButtonIconComp';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {ClassesDetailView} from '../../../components/ClassesDetailView/ClassesDetailView';
import {TextComp} from '../../../components/TextComponent';
import {PendingReqComp} from '../../../components/PendingReqComp/PendingReqComp';
import HorizontalDividerComp from '../../../components/HorizontalDividerComp/HorizontalDividerComp';
import InformationTextView from '../../../components/InformationTextView/InformationTextView';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import PickerComponent from '../../../components/PickerComponent/PickerComponent';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment/moment';
import {ButtonThemeComp} from '../../../components/ButtonThemeComp/ButtonThemeComp';
import {CreateClassComp} from '../../../components/CreateClassComp/CreateClassComp';
import {CircleImageComp} from '../../../components/CircleImageComp/CircleImageComp';
import {ThreeViewComp} from '../../../components/ThreeViewComp/ThreeViewComp';
var arrayCalender = [];
const DashboardScreen = ({navigation}) => {
  const [classState, setClassState] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState();

  const date = new Date();
  var time = new Date();
  var getTime = time.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });
  const [timezone, setTimeZone] = useState(getTime);
  const time1 = date.setDate(date.getDate() + 1);
  const [isDate, setIsDate] = useState(false);
  const [isDate2, setIsDate2] = useState(false);
  const [startDate, setStartDate] = useState(time);
  const [endDate, setEndDate] = useState(null);

  const [calenderArray, setCalenderArray] = useState([]);

  const [selectedDate, setSelectedDate] = useState('');
  const [markedDates, setMarkedDates] = useState({});

  const [subject, setSubject] = useState('English');
  const upadateStartDate = e => {
    let d = new Date(e?.nativeEvent?.timestamp);

    setIsDate(false);
    setStartDate(d);
    setEndDate(d);
  };
  const upadateEndDate = e => {
    let d = new Date(e?.nativeEvent?.timestamp);
    setIsDate2(false);

    setEndDate(d);
  };
  const [list, setList] = useState([
    {
      id: 0,
      name: 'Freddy Mercury',
      image: require('../../../image/profile.jpg'),
    },
    {
      id: 1,
      name: 'Freddy Mercury',
      image: require('../../../image/profile.jpg'),
    },
    {
      id: 2,
      name: 'Freddy Mercury',
      image: require('../../../image/profile.jpg'),
    },
    {
      id: 3,
      name: 'Freddy Mercury',
      image: require('../../../image/profile.jpg'),
    },
    {
      id: 4,
      name: 'Freddy Mercury',
      image: require('../../../image/profile.jpg'),
    },
    {
      id: 5,
      name: 'Freddy Mercury',
      image: require('../../../image/profile.jpg'),
    },
  ]);
  const [message, setMessage] = useState([
    {
      id: 0,
      firstText: 'Nadia Salvester',
      image: require('../../../image/profile.jpg'),
      secondText: "Hi, we aren't ready to start our class today...",
    },
    {
      id: 1,
      firstText: 'Nadia Salvester',
      image: require('../../../image/profile.jpg'),
      secondText: "Hi, we aren't ready to start our class today...",
    },
    {
      id: 2,
      firstText: 'Nadia Salvester',
      image: require('../../../image/profile.jpg'),
      secondText: "Hi, we aren't ready to start our class today...",
    },
    {
      id: 3,
      firstText: 'Nadia Salvester',
      image: require('../../../image/profile.jpg'),
      secondText: "Hi, we aren't ready to start our class today...",
    },
    {
      id: 4,
      firstText: 'Nadia Salvester',
      image: require('../../../image/profile.jpg'),
      secondText: "Hi, we aren't ready to start our class today...",
    },
    {
      id: 5,
      firstText: 'Nadia Salvester',
      image: require('../../../image/profile.jpg'),
      secondText: "Hi, we aren't ready to start our class today...",
    },
  ]);
  const pickerRef = useRef('English');

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }

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
        {console.log(startDate)}
        {isDate == true && Platform.OS == 'android' ? (
          <DateTimePicker
            testID="startDatePicker"
            value={startDate}
            mode={'time'}
            is24Hour={false}
            display="default"
            themeVariant="light"
            style={styles.datePicker}
            onChange={e => {
              upadateStartDate(e);
            }}
            onTouchCancel={() => {
              console.log(276), setIsDate(false);
            }}
          />
        ) : Platform.OS == 'android' ? (
          <TouchableOpacity
            onPress={() => setIsDate(true)}
            style={styles.dateContainer}>
            <Text style={styles.dateText}>
              {moment(startDate).format('LT')}
            </Text>
          </TouchableOpacity>
        ) : (
          <DateTimePicker
            testID="startDatePicker"
            mode={'time'}
            value={startDate}
            minimumDate={startDate}
            is24Hour={false}
            display="default"
            themeVariant="light"
            style={styles.datePicker}
            onChange={e => {
              upadateStartDate(e);
            }}
            onTouchCancel={() => {
              console.log(276), setIsDate(false);
            }}
          />
        )}
        <Text
          style={{
            paddingHorizontal: wp('2'),
            color: colorTutor_.TxtColor,
            fontSize: hp('2'),
          }}>
          To
        </Text>
        {endDate != null && isDate2 == true && Platform.OS == 'android' ? (
          <>
            <DateTimePicker
              testID="endDatePicker"
              value={endDate}
              mode={'time'}
              minimumDate={startDate}
              is24Hour={false}
              display="default"
              style={styles.datePicker}
              themeVariant="light"
              onChange={e => {
                upadateEndDate(e);
                // console.log(143, startDate), setIsDate(false);
              }}
              onTouchCancel={() => {
                console.log(276), setIsDate2(false);
              }}
            />
          </>
        ) : endDate != null && Platform.OS == 'ios' ? (
          <DateTimePicker
            testID="endDatePicker"
            mode={'time'}
            value={endDate}
            minimumDate={endDate}
            is24Hour={false}
            display="default"
            style={styles.datePicker}
            themeVariant="light"
            onChange={e => {
              upadateEndDate(e);
              // console.log(143, startDate), setIsDate(false);
            }}
            onTouchCancel={() => {
              console.log(276), setIsDate(false);
            }}
          />
        ) : endDate != null && isDate2 == false && Platform.OS == 'android' ? (
          <TouchableOpacity
            onPress={() => setIsDate2(true)}
            style={styles.dateContainer}>
            <Text style={styles.dateText}>{moment(endDate).format('LT')}</Text>
          </TouchableOpacity>
        ) : (
          <View
            style={{
              backgroundColor: '#E0E0E0',
              height: hp('4.5'),
              width: wp('33'),
              borderRadius: 8,
            }}
          />
        )}
      </View>
    );
  };

  const [topNavigator, setTopNavigator] = useState([
    'HOME',
    'MY CLASSES',
    'MESSAGES',
  ]);
  const [index, setIndex] = useState(0);
  const checkIndexStatus = value => {
    setIndex(value);
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
        color: '#00B0BF',
        textColor: '#FFFFFF',
      };
    });
    let serviceDate = moment(date);
    serviceDate = serviceDate.format('DD.MM.YYYY');
    setSelectedDate(selectedDate);
    setMarkedDates(markedDates);
  };

  return (
    <View
      style={{
        backgroundColor: colorTutor_.ipalBlue,
        flex: 1,
      }}>
      <HeaderComponent
        profileOnPress={() => navigation.navigate('ProfileScreen')}
        navigatorName={topNavigator}
        checkIndexStatus={checkIndexStatus}
      />

      {index == 0 &&
        (list?.length > 0 ? (
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.container}>
            <View style={styles.classDashBoard}>
              <TextComp text={'My Classes'} />
              <ButtonIconComp
                onPress={() => console.log('All Classes')}
                text="View all classes"
                size={hp('3.5')}
                name={'arrow-forward'}
              />
            </View>
            <View>
              {list.length > 0 &&
                list.map(Item => {
                  return (
                    <ClassesDetailView text={Item?.name} image={Item?.image} />
                  );
                })}
            </View>
            <View style={styles.classDashBoard}>
              <TextComp text={'Pending Requests'} />
              <ButtonIconComp
                onPress={() => console.log('All Classes')}
                text="View all classes"
                size={hp('3.5')}
                name={'arrow-forward'}
              />
            </View>
            <View>
              {list.map(Item => {
                return <PendingReqComp text={Item?.name} image={Item?.image} />;
              })}
            </View>
          </ScrollView>
        ) : (
          <View>
            <View style={styles.classDashBoard}>
              <TextComp text="My Classes" />
              <HorizontalDividerComp color={colorTutor_.blue} />
            </View>
            <InformationTextView text={'You don’t have Classes '} />
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: hp('4'),
              }}>
              <ButtonIconComp
                style={{width: wp('90'), height: hp('7')}}
                TextStyle={{fontSize: hp('2.6')}}
                onPress={() => console.log('Create Class')}
                text="Create Class"
                size={hp('5.5')}
                name={'add'}
              />
            </View>
            <View style={{...styles.classDashBoard, marginTop: hp('6')}}>
              <TextComp text="Pending Requests" />
              <HorizontalDividerComp width={'53'} color={colorTutor_.blue} />
            </View>
            <InformationTextView text={'You don’t have pending requests.'} />
          </View>
        ))}

      {index == 1 && (
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.myClassViewDashBoard}>
            <View style={{flexDirection: 'row'}}>
              <Ionicons name={'arrow-back'} size={hp('2')} color="white" />
              <TextComp
                style={{marginLeft: wp('3'), color: colorTutor_.TxtColor}}
                text="My Classes"
              />
            </View>
          </View>
          <Calendar
            markingType={'period'}
            style={{width: wp('90'), alignSelf: 'center', borderRadius: 10}}
            // markedDates={{
            //   '2022-10-28': {marked: true, dotColor: '#50cebb'},
            //   '2022-10-29': {marked: true, dotColor: '#50cebb'},
            //   '2022-10-30': {startingDay: true, color: '#50cebb', textColor: 'white'},
            //   '2012-05-22': {color: '#70d7c7', textColor: 'white'},
            //   '2012-05-23': {color: '#70d7c7', textColor: 'white', marked: true, dotColor: 'white'},
            //   '2012-05-24': {color: '#70d7c7', textColor: 'white'},
            //   '2012-05-25': {endingDay: true, color: '#50cebb', textColor: 'white'}
            // }}
            // markedDates={{
            //   '2017-10-25': {dots: [vacation, massage, workout], selected: true, selectedColor: 'red'},
            //   '2017-10-26': {dots: [massage, workout], disabled: true}
            // }}
          />
          <View style={{marginBottom: hp('3'), marginTop: hp('3')}}>
            <TextComp
              style={{
                marginLeft: wp('7'),
                marginBottom: hp('1.5'),
                color: colorTutor_.TxtColor,
              }}
              text={'Select your subject'}
            />
            <Picker
              style={styles.picker}
              itemStyle={{
                height: hp('10'),
              }}
              // ref={pickerRef2}
              selectedValue={selectedLanguage}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
              }>
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>
          </View>

          <View>
            <TextComp
              style={{
                marginLeft: wp('7'),
                marginBottom: hp('1.5'),
                color: colorTutor_.TxtColor,
              }}
              text={'Select your subject'}
            />
            <DropDownView />
          </View>

          {/* </View> */}
        </ScrollView>
      )}
      {index == 2 && (
        <ScrollView contentContainerStyle={styles.container}>
          {message.length > 0 &&
            message.map(res => {
              return (
                <ThreeViewComp
                  data={res}
                  viewStyle={{marginTop: hp('2'), alignSelf: 'center'}}
                />
              );
            })}
        </ScrollView>
      )}
      <View style={styles.bottomBar}>
        <TouchableOpacity onPress={() => console.log('dont have you acc')}>
          <Text style={globalStyles.globalModuletutor}>Term of use</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('dont have you acc')}>
          <Text style={globalStyles.globalModuletutor}>Privacy Policy</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DashboardScreen;
