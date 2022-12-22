import {
  TouchableOpacity,
  Text,
  View,
  ScrollView,
  StatusBar,
  FlatList,
  RefreshControl,
  Platform,
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
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import PickerComponent from '../../../components/PickerComponent/PickerComponent';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment/moment';
import {ButtonThemeComp} from '../../../components/ButtonThemeComp/ButtonThemeComp';
import {CreateClassComp} from '../../../components/CreateClassComp/CreateClassComp';
import {ThreeViewComp} from '../../../components/ThreeViewComp/ThreeViewComp';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {useDispatch} from 'react-redux';
import types from '../../../Redux/types';
import {
  errorMessage,
  successMessage,
} from '../../../config/NotificationMessage';
import {errorHandler} from '../../../config/helperFunction';
import {
  CreateClassUrl,
  DeleteMyClassUrl,
  GetApprovedClassUrl,
  GetCourcesUrl,
  GetMyClasses,
  GetPendingClassUrl,
  UpdateMyClasses,
  UpdateRequestStatusUrl,
} from '../../../config/Urls';
import axios from 'react-native-axios';
import {useSelector} from 'react-redux';
import {SkypeIndicator} from 'react-native-indicators';
import {useCallback} from 'react';

var arrayCalender = [];
const DashboardScreen = ({navigation}) => {
  const {userData, token} = useSelector(state => state.userData);

  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    updateLoadingState({
      acceptLoading: true,
      pendingLoading: true,
      myClassLoading: true,
      courcesLoading: true,
    });
    wait(2000).then(() => {
      getApiData(GetCourcesUrl, 'courcesState', 'courcesLoading');
      getApiData(GetPendingClassUrl, 'pendingClassState', 'pendingLoading');
      getApiData(GetMyClasses, 'myClassState', 'myClassLoading');
      getApiData(GetApprovedClassUrl, 'acceptClassState', 'acceptLoading');
      setRefreshing(false);
    });
  }, []);
  const dispatch = useDispatch();
  const [classState, setClassState] = useState(false);
  const [isVisibleTime, setIsVisibleTime] = useState(false);
  const [isVisibleEndTime, setIsVisibleEndTime] = useState(false);
  const [allStates, setAllStates] = useState({
    acceptClassState: [],
    pendingClassState: [],
    myClassState: [],
    messagesState: [],
    courcesState: [],
  });
  const [allLoading, setAllLoading] = useState({
    acceptLoading: false,
    pendingLoading: true,
    messageLoading: false,
    myClassLoading: false,
    courcesLoading: false,
    createClassLoading: false,
  });
  const {
    acceptLoading,
    pendingLoading,
    messageLoading,
    myClassLoading,
    courcesLoading,
    createClassLoading,
  } = allLoading;
  const {
    acceptClassState,
    pendingClassState,
    messagesState,
    myClassState,
    courcesState,
  } = allStates;
  const updateState = data => {
    setAllStates(prev => ({...prev, ...data}));
  };
  const updateLoadingState = data => {
    setAllLoading(prev => ({...prev, ...data}));
  };

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
  const [classId, setClassId] = useState('');
  const [buttonText, setButtonText] = useState('Create Class');

  const [selectedDate, setSelectedDate] = useState('');
  const [markedDates, setMarkedDates] = useState({});

  const [subject, setSubject] = useState(null);
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
  const createClasses = (url, method, params) => {
    updateLoadingState({createClassLoading: true});
    if (
      arrayCalender.length > 0 &&
      subject != null &&
      endDate != null &&
      endDate != ''
    ) {
      let body = JSON.stringify({
        // course_id: '1',
        course_id: subject,
        from: moment(startDate, 'h:mm:ss A').format('HH:mm'),
        to: moment(endDate, 'h:mm:ss A').format('HH:mm'),
        schedule: arrayCalender,
      });
      let config = {
        url: url,
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        data: body,
        params: params,
      };
      config.headers.Authorization = `Bearer ${token}`;

      axios(config)
        .then(function (res) {
          setMarkedDates({});
          setSubject('');
          setStartDate(time);
          setEndDate(null);
          successMessage('You has been Create My Class successfully');
          updateLoadingState({createClassLoading: false});
          arrayCalender = [];
          getApiData(GetMyClasses, 'myClassState', 'myClassLoading');
          setClassState(false);
        })
        .catch(function (error) {
          updateLoadingState({createClassLoading: false});
          errorMessage(errorHandler(error));
        });
    } else {
      errorMessage('Please Select All Fields');
      updateLoadingState({createClassLoading: false});
    }
  };
  const getApiData = (url, state, loading) => {
    updateLoadingState({[loading]: true});
    axios
      .get(url, {
        headers: {Authorization: `Bearer ${token}`},
      })
      .then(function (response) {
        updateState({[state]: response.data.data});
        updateLoadingState({[loading]: false});
      })
      .catch(function (error) {
        updateLoadingState({[loading]: false});
        errorMessage(errorHandler(error));
      });
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
              let date = moment(e).format('LL');
              console.log(date);
              upadateStartDate(date);
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
                backgroundColor: colorTutor_.topNavigationColor,
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
  const IndexZeroComp = () => {
    return (
      <View>
        <View style={styles.classDashBoard}>
          <TextComp text="My Classes" />
          <HorizontalDividerComp color={colorTutor_.blue} />
        </View>
        {acceptLoading == true ? (
          <SkypeIndicator
            color={'white'}
            size={hp('4')}
            style={{
              alignSelf: 'center',
              justifyContent: 'center',
            }}
          />
        ) : acceptClassState.length > 0 ? (
          <FlatList
            data={acceptClassState}
            contentContainerStyle={{marginTop: hp('2')}}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => {
              return <ClassesDetailView data={item} />;
            }}
          />
        ) : (
          <>
            <InformationTextView text={'You don’t have any classes.'} />
          </>
        )}
      </View>
    );
  };
  const updateStatus = (data, status) => {
    updateLoadingState({pendingLoading: true});
    let url = UpdateRequestStatusUrl + data.data.id;
    let body = {
      status: status,
    };

    axios
      .put(url, body, {
        headers: {Authorization: `Bearer ${token}`},
      })
      .then(function (response) {
        updateLoadingState({pendingLoading: false});
        getApiData(GetPendingClassUrl, 'pendingClassState', 'pendingLoading');
        status == 'approve' &&
          getApiData(GetApprovedClassUrl, 'acceptClassState', 'acceptLoading');
      })
      .catch(function (error) {
        updateLoadingState({pendingLoading: false});
        errorMessage(errorHandler(error));
      });
  };
  const checkPendingReq = data => {
    data.data.class_schedules.map(res => {
      arrayCalender.push(res.schedule);
    });
    arrayCalender.map(item => {
      markedDates[item] = {
        selected: true,
        color: '#00B0BF',
        textColor: '#FFFFFF',
        borderRadius: 20,
        fontWeight: 'bold',
      };
    });
    setClassId(data.data.id);
    setSubject(data.data.course.id);
    let startDate = data.data.from;
    let endDate = data.data.to;
    setStartDate(startDate);
    setEndDate(endDate);
    setButtonText('Approved');
    setClassState(true);
  };
  const PendingView = () => {
    return pendingLoading ? (
      <>
        <View style={{...styles.classDashBoard, marginTop: hp('6')}}>
          <TextComp text="Pending Requests" />
          <HorizontalDividerComp width={'53'} color={colorTutor_.blue} />
        </View>
        <SkypeIndicator
          color={'white'}
          size={hp('4')}
          style={{
            alignSelf: 'center',
            justifyContent: 'center',
          }}
        />
      </>
    ) : pendingClassState.length == 0 ? (
      <>
        <View style={{...styles.classDashBoard, marginTop: hp('6')}}>
          <TextComp text="Pending Requests" />
          <HorizontalDividerComp width={'53'} color={colorTutor_.blue} />
        </View>
        <InformationTextView text={'You don’t have pending requests.'} />
      </>
    ) : (
      <>
        <View style={{...styles.classDashBoard, marginTop: hp('6')}}>
          <TextComp text="Pending Requests" />
          <HorizontalDividerComp width={'53'} color={colorTutor_.blue} />
        </View>
        <FlatList
          data={pendingClassState}
          contentContainerStyle={{marginTop: hp('2')}}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => {
            return (
              <PendingReqComp
                checkPendingReq={() => checkPendingReq(item)}
                onPress={item => updateStatus(item, 'approve')}
                onCancel={item => updateStatus(item, 'reject')}
                data={item}
              />
            );
          }}
        />
      </>
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
        borderRadius: 20,
        fontWeight: 'bold',
      };
    });
    let serviceDate = moment(date);
    serviceDate = serviceDate.format('DD.MM.YYYY');
    setSelectedDate(selectedDate);
    setMarkedDates(markedDates);
  };
  const onPressClass = data => {
    data.class_schedules.map(res => {
      arrayCalender.push(res.schedule);
    });
    arrayCalender.map(item => {
      markedDates[item] = {
        selected: true,
        color: '#00B0BF',
        textColor: '#FFFFFF',
        borderRadius: 20,
        fontWeight: 'bold',
      };
    });
    setClassId(data.id);
    setSubject(data.course.id);
    let startDate = data.from;
    let endDate = data.to;
    setStartDate(startDate);
    setEndDate(endDate);
    setClassState(true);
    setButtonText('Update Class');
  };
  const deleteClass = data => {
    let url = DeleteMyClassUrl + data.id;
    axios
      .delete(url, {
        headers: {Authorization: `Bearer ${token}`},
      })
      .then(function (response) {
        getApiData(GetMyClasses, 'myClassState', 'myClassLoading');
      })
      .catch(function (error) {
        updateLoadingState({myClassLoading: false});
        errorMessage(errorHandler(error));
      });
  };
  const checkButtonType = data => {
    if (buttonText == 'Create Class') {
      createClasses(CreateClassUrl, 'post', null);
    } else if (buttonText == 'Update Class') {
      let url = UpdateMyClasses + classId;
      createClasses(url, 'put', null);
    }
  };
  useEffect(() => {
    getApiData(GetCourcesUrl, 'courcesState', 'courcesLoading');
    getApiData(GetPendingClassUrl, 'pendingClassState', 'pendingLoading');
    getApiData(
      GetMyClasses,
      'myClassState',
      'myClassLoading',
      // setClassState(true),
      // true,
    );
    getApiData(GetApprovedClassUrl, 'acceptClassState', 'acceptLoading');
  }, []);
  return (
    <View
      style={{
        backgroundColor: colorTutor_.ipalBlue,
        flex: 1,
      }}>
      <StatusBar
        hidden={false}
        barStyle={Platform.OS == 'ios' ? 'dark-content' : 'default'}
      />
      <HeaderComponent
        headerText={userData.f_name}
        uri={userData?.profileImageLink}
        profileOnPress={() => navigation.navigate('SettingScreen', userData)}
        bellOnPress={() => navigation.navigate('NotificationScreen')}
        navigatorName={topNavigator}
        checkIndexStatus={checkIndexStatus}
      />
      {index == 0 && (
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          contentContainerStyle={{paddingBottom: hp('10')}}
          showsVerticalScrollIndicator={false}>
          <IndexZeroComp />
          <PendingView />
        </ScrollView>
      )}
      {index == 1 && (
        <>
          {classState == true || myClassState.length < 1 ? (
            <ScrollView contentContainerStyle={styles.container}>
              <View style={styles.myClassViewDashBoard}>
                <View style={{flexDirection: 'row'}}>
                  <Ionicons
                    onPress={() => {
                      setMarkedDates({});
                      arrayCalender = [];
                      setSubject('');
                      setStartDate(time);
                      setEndDate(null);
                      setClassState(false);
                    }}
                    name={'arrow-back'}
                    size={hp('2')}
                    color="white"
                  />
                  <TextComp
                    style={{marginLeft: wp('3'), color: colorTutor_.TxtColor}}
                    text="My Classes"
                  />
                </View>
              </View>
              <Calendar
                minDate={new Date()}
                style={{width: wp('90'), alignSelf: 'center', borderRadius: 10}}
                markingType={'period'}
                onDayPress={(day, index) =>
                  buttonText !== 'Approved'
                    ? getSelectedDayEvents(day.dateString, index)
                    : console.log('djbfj')
                }
                markedDates={markedDates}
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
                  dropdownIconColor={'black'}
                  selectedValue={subject}
                  itemStyle={{
                    color: 'black',
                  }}
                  onValueChange={(itemValue, itemIndex) =>
                    setSubject(itemValue)
                  }>
                  <Picker.Item label={'Please Select Subject'} value={null} />
                  {courcesState.length > 0 &&
                    courcesState.map(res => {
                      return <Picker.Item label={res.title} value={res.id} />;
                    })}
                </Picker>
              </View>
              <View>
                <TextComp
                  style={{
                    marginLeft: wp('7'),
                    marginBottom: hp('1.5'),
                    color: colorTutor_.TxtColor,
                  }}
                  text={'Create time schedule'}
                />
                <DropDownView />
              </View>
              <View>
                <ButtonThemeComp
                  style={styles.createClass}
                  TextStyle={{fontSize: hp('2')}}
                  text={buttonText}
                  onPress={() => checkButtonType()}
                  isLoading={createClassLoading}
                />
              </View>
            </ScrollView>
          ) : myClassLoading == true ? (
            <View>
              <View style={styles.classDashBoard}>
                <TextComp text={'My Classes'} />
                <TouchableOpacity
                  onPress={() => setClassState(true)}
                  style={styles.plusView}>
                  <Ionicons name={'add'} size={hp('3')} color="white" />
                </TouchableOpacity>
              </View>
              <SkypeIndicator
                color={'white'}
                size={hp('4')}
                style={{
                  alignSelf: 'center',
                  justifyContent: 'center',
                  marginTop: hp('10'),
                }}
              />
            </View>
          ) : (
            <>
              <View style={styles.classDashBoard}>
                <TextComp text={'My Classes'} />
                <TouchableOpacity
                  onPress={() => {
                    setButtonText('Create Class'), setClassState(true);
                  }}
                  style={styles.plusView}>
                  <Ionicons name={'add'} size={hp('3')} color="white" />
                </TouchableOpacity>
              </View>
              <FlatList
                data={myClassState}
                scrollEnabled={true}
                contentContainerStyle={{
                  marginTop: hp('2'),
                  paddingBottom: hp('20'),
                }}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => {
                  return (
                    <CreateClassComp
                      onDelete={() => deleteClass(item)}
                      onPress={() => onPressClass(item)}
                      data={item}
                    />
                  );
                }}
              />
            </>
          )}
        </>
      )}
      {index == 2 && (
        <ScrollView
          contentContainerStyle={{
            ...styles.container,
          }}>
          {message.length > 0 &&
            message.map(res => {
              return (
                <TouchableOpacity
                  onPress={() => navigation.navigate('MessageScreen', res)}>
                  <ThreeViewComp
                    data={res}
                    viewStyle={{marginTop: hp('2'), alignSelf: 'center'}}
                  />
                </TouchableOpacity>
              );
            })}
        </ScrollView>
      )}

      <View style={styles.bottomBar}>
        <TouchableOpacity onPress={() => dispatch({type: types.LogoutType})}>
          <Text style={globalStyles.globalModuletutor}>Term of use</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => dispatch({type: types.LogoutType})}>
          <Text style={globalStyles.globalModuletutor}>Privacy Policy</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DashboardScreen;
