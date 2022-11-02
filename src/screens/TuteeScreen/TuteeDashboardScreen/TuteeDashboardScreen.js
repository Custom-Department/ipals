import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextComponent,
  ScrollView,
  FlatList,
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
import {CircleImageComp} from '../../../components/CircleImageComp/CircleImageComp';
import {ThreeViewComp} from '../../../components/ThreeViewComp/ThreeViewComp';
import {TuteeHomeComp} from '../../../components/TuteeHomeComp/TuteeHomeComp';

const TuteeDashboardScreen = () => {
  const date = new Date();
  // var d = new Date(); // for now
  // d.getHours(); // => 9
  // d.getMinutes(); // =>  30
  // d.getSeconds(); // => 51
  // console.log(d.getHours())
  // setHour(d.getHours);
  var time = new Date();
  var getTime = time.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });
  const [timezone, setTimeZone] = useState(getTime);
  const time1 = date.setDate(date.getDate() + 1);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [isDate, setIsDate] = useState(false);
  const [isDate2, setIsDate2] = useState(false);
  const [startDate, setStartDate] = useState(time);
  const [endDate, setEndDate] = useState(null);

  const upadateStartDate = e => {
    let d = new Date(e?.nativeEvent?.timestamp);

    setIsDate(false);
    setStartDate(d);
    console.log(44, d, time);

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
  const subject = [
    {
      id: 0,
    },
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
  ];
  const [tutors, setTutors] = useState([
    {
      id: 0,
      firstText: 'Sarah Welson',
      image: require('../../../image/profile.jpg'),
      secondText: "Hi, we aren't ready to start our class today...",
      subject: subject,
    },
    {
      id: 1,
      firstText: 'Sarah Welson',
      image: require('../../../image/profile.jpg'),
      subject: subject,
      secondText: "Hi, we aren't ready to start our class today...",
    },
    {
      id: 2,
      firstText: 'Sarah Welson',
      subject: subject,
      image: require('../../../image/profile.jpg'),
      secondText: "Hi, we aren't ready to start our class today...",
    },
    {
      id: 3,
      firstText: 'Sarah Welson',
      subject: subject,
      image: require('../../../image/profile.jpg'),
      secondText: "Hi, we aren't ready to start our class today...",
    },
    {
      id: 4,
      firstText: 'Sarah Welson',
      subject: subject,
      image: require('../../../image/profile.jpg'),
      secondText: "Hi, we aren't ready to start our class today...",
    },
    {
      id: 5,
      firstText: 'Sarah Welson',
      subject: subject,
      image: require('../../../image/profile.jpg'),
      secondText: "Hi, we aren't ready to start our class today...",
    },
    {
      id: 6,
      firstText: 'Sarah Welson',
      subject: subject,
      image: require('../../../image/profile.jpg'),
      secondText: "Hi, we aren't ready to start our class today...",
    },
    {
      id: 7,
      firstText: 'Sarah Welson',
      subject: subject,
      image: require('../../../image/profile.jpg'),
      secondText: "Hi, we aren't ready to start our class today...",
    },
    {
      id: 8,
      firstText: 'Sarah Welson',
      subject: subject,
      image: require('../../../image/profile.jpg'),
      secondText: "Hi, we aren't ready to start our class today...",
    },
    {
      id: 9,
      firstText: 'Sarah Welson',
      subject: subject,
      image: require('../../../image/profile.jpg'),
      secondText: "Hi, we aren't ready to start our class today...",
    },
    {
      id: 10,
      firstText: 'Sarah Welson',
      subject: subject,
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
    console.log(1444, value);
  };

  return (
    <View
      style={{
        backgroundColor: colorTutor_.ipalBlue,
        flex: 1,
      }}>
      <HeaderComponent
        navigatorName={topNavigator}
        search={true}
        checkIndexStatus={checkIndexStatus}
      />

      {index == 0 &&
        (list?.length > 0 ? (
          <FlatList
            data={tutors}
            keyExtractor={(item, index) => index.toString()}
            numColumns={2}
            contentContainerStyle={{
              width: wp('95'),
              alignSelf: 'center',
              paddingBottom: hp('15'),
            }}
            renderItem={({item}) => {
              return <TuteeHomeComp data={item} />;
            }}
          />
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

      {index == 1 &&
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

export default TuteeDashboardScreen;
