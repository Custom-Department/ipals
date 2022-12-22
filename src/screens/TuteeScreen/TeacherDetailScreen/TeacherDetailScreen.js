import React from 'react';
import {useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  FlatList,
  ScrollView,
  Modal,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {color, colorTutor_, MentorColor} from '../../../config/color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {CircleImageComp} from '../../../components/CircleImageComp/CircleImageComp';
import {TextComp} from '../../../components/TextComponent';
import HorizontalDividerComp from '../../../components/HorizontalDividerComp/HorizontalDividerComp';
import {styles} from './styles';
import {ButtonThemeComp} from '../../../components/ButtonThemeComp/ButtonThemeComp';
import {
  CreateStudentRequestUrl,
  GetTeacherClassesUrl,
} from '../../../config/Urls';
import axios from 'react-native-axios';
import {useEffect} from 'react';
import {
  errorMessage,
  successMessage,
} from '../../../config/NotificationMessage';
import {errorHandler} from '../../../config/helperFunction';
import {useSelector} from 'react-redux';
import {SkypeIndicator} from 'react-native-indicators';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import moment from 'moment/moment';
import {RadioButton} from 'react-native-paper';
import {BackHeaderComponent} from '../../../components/BackHeaderComponent/BackHeaderComponent';
import InformationTextView from '../../../components/InformationTextView/InformationTextView';

const TeacherDetailScreen = ({route, navigation}) => {
  const [checked, setChecked] = useState(false);
  const [scheduleDays, setScheduleDays] = useState([]);
  const {userData, token} = useSelector(state => state.userData);

  const item = route.params;

  const [topNavigator, setTopNavigator] = useState([
    'HOME',
    'MY CLASSES',
    'MESSAGES',
  ]);
  const [data, setData] = useState({
    getData: [],
    postData: {},
    scheduleArray: '',
    subjectTitle: '',
    timeSlot: null,
    allTimeSlot: [],
    subjectId: '',
    getSpecData: {},
  });
  const [loading, setLoading] = useState({
    startLoading: true,
    buttonloading: false,
    isVisible: false,
    timeSlotButton: false,
  });
  const [showModal, setShowModal] = useState(false);
  const {
    getData,
    postData,
    scheduleArray,
    subjectTitle,
    timeSlot,
    allTimeSlot,
    subjectId,
    getSpecData,
  } = data;
  const {startLoading, buttonloading, isVisible, timeSlotButton} = loading;
  const updateState = data => {
    setData(prev => ({...prev, ...data}));
  };
  const updateLoadingState = data => {
    setLoading(prev => ({...prev, ...data}));
  };
  const getApiData = () => {
    updateLoadingState({startLoading: true});
    // let url = GetTeacherClassesUrl + '16';
    let url = GetTeacherClassesUrl + item.id;
    axios
      .get(url, {
        headers: {Authorization: `Bearer ${token}`},
      })
      .then(function (response) {
        updateLoadingState({startLoading: false});
        updateState({getData: response.data.data});
      })
      .catch(function (error) {
        updateLoadingState({startLoading: false});
        errorMessage(errorHandler(error));
      });
  };
  const selectActivities = (v, i) => {
    if (scheduleArray.includes(v)) {
      updateState({
        scheduleArray: scheduleArray.filter(
          scheduleArray => scheduleArray.id !== v.id,
        ),
      });
    } else {
      updateState({scheduleArray: [...scheduleArray, v]});
    }
  };
  const RenderCard = prop => {
    const {data} = prop;
    const from = moment(data.from, 'hh:mm').format('LT');
    const to = moment(data.to, 'hh:mm').format('LT');
    return (
      <View style={styles.innerView}>
        <View style={styles.timeView}>
          <AntDesign name="clockcircle" size={hp('2.5')} color={'gray'} />
          <TextComp style={{fontSize: hp('1.6')}} text={from + ' - ' + to} />
        </View>
        <HorizontalDividerComp
          style={{
            marginHorizontal: 0,
            alignSelf: 'center',
            marginTop: hp('0.5'),
          }}
          width={'40'}
        />
        <View style={styles.centerView}>
          <View style={styles.innerBottomView}>
            <FontAwesome name="book" size={hp('2')} color={'gray'} />
            <TextComp style={{fontSize: hp('1.6')}} text={data.course.title} />
          </View>
          <View style={styles.verDivider} />
          <View
            style={{
              ...styles.innerBottomView,
              alignItems: 'center',
              width: wp('23'),
              justifyContent: 'center',
            }}>
            <MaterialIcons name="timer" size={hp('2')} color={'gray'} />
            <TextComp style={{fontSize: hp('1.5')}} text={data.total_hours} />
          </View>
        </View>
        <ButtonThemeComp
          onPress={() => {
            setScheduleDays(data?.class_schedules),
              updateState({subjectTitle: data?.course});
            updateState({getSpecData: data});
            updateLoadingState({isVisible: true});
          }}
          style={styles.bottomButton}
          text={'Apply Now'}
        />
      </View>
    );
  };
  const applyForClass = () => {
    updateLoadingState({timeSlotButton: true});
    const from = moment(getSpecData.from, 'h:mm:ss A').format('HH:mm');
    const to = moment(getSpecData.to, 'h:mm:ss A').format('HH:mm');
    if (scheduleArray.length > 0) {
      const fromToObject = scheduleArray.map(res => {
        return res.schedule;
      });
      let body = {
        my_class_id: getSpecData.id,
        course_id: subjectTitle.id,
        from: from,
        schedule: fromToObject,
        to: to,
      };
      axios
        .post(CreateStudentRequestUrl, body, {
          headers: {Authorization: `Bearer ${token}`},
        })
        .then(function (res) {
          updateLoadingState({isVisible: false});
          updateLoadingState({timeSlotButton: false});
          successMessage('Your Have Succefully Apply for Class');
        })
        .catch(function (error) {
          updateLoadingState({timeSlotButton: false});
          errorMessage(errorHandler(error));
        });
    } else {
      updateLoadingState({timeSlotButton: false});
      errorMessage('Please Select Days');
    }
  };
  const ModalView = () => {
    return (
      <View style={styles.modalMainView}>
        <View style={styles.modalInnerView}>
          <Entypo
            name="circle-with-cross"
            color={'gray'}
            size={hp('3')}
            onPress={() => {
              updateLoadingState({
                isVisible: false,
              }),
                updateState({
                  scheduleArray: '',
                  timeSlot: null,
                  allTimeSlot: [],
                });
            }}
            style={styles.crowsIcon}
          />
          <TextComp
            text="Subject"
            style={{marginLeft: wp('5'), fontWeight: 'bold'}}
          />
          <View style={styles.modalSubjectView}>
            <View
              style={{
                ...styles.subView,
                backgroundColor: colorTutor_.blue,
              }}>
              <TextComp
                text={subjectTitle?.title}
                style={{fontSize: hp('1.7'), color: 'white'}}
              />
            </View>
          </View>

          <TextComp text="Select schedule for class" style={styles.heading} />
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.daysView}>
              {scheduleDays.map((res, i) => {
                const Month = moment(res?.schedule).format('YYYY-MM-DD');
                return (
                  <TouchableOpacity
                    onPress={() => selectActivities(res, i)}
                    style={{
                      ...styles.activitiesContainer,
                      backgroundColor: scheduleArray.includes(res)
                        ? colorTutor_.lightSeaGreen
                        : 'white',
                      borderColor: scheduleArray.includes(res)
                        ? colorTutor_.blue
                        : 'black',
                      borderWidth: scheduleArray.includes(res) ? 2 : 1,
                    }}>
                    <Text
                      style={{
                        textAlign: 'center',
                        color: scheduleArray.includes(res)
                          ? colorTutor_.blue
                          : 'black',
                        fontWeight: scheduleArray.includes(res)
                          ? 'bold'
                          : 'normal',
                        fontSize: hp('1.5'),
                      }}>
                      {Month}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
            <ButtonThemeComp
              style={styles.getTimeButton}
              text={'Apply For Class'}
              onPress={() => applyForClass()}
              isLoading={timeSlotButton}
            />
          </ScrollView>
        </View>
      </View>
    );
  };
  useEffect(() => {
    getApiData();
  }, []);
  return (
    <View
      style={{
        backgroundColor: colorTutor_.ipalBlue,
        flex: 1,
      }}>
      <BackHeaderComponent heading={'Teacher  About'} />
      <ScrollView
        contentContainerStyle={{paddingBottom: hp('10')}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.detailsView}>
          <View style={styles.innerTopView}>
            <CircleImageComp
              styles={styles.circleImage}
              image={{uri: item.profileImageLink}}
            />
            <View
              style={{
                marginLeft: wp('2'),
              }}>
              <TextComp
                style={{fontSize: hp('2.5'), color: 'black'}}
                text={item?.f_name + ' ' + item?.l_name}
              />
              <HorizontalDividerComp
                width={wp('15')}
                style={styles.topLine}
                color={colorTutor_.topNavigationColor}
              />
              {item.course.length > 0 && (
                <>
                  <TextComp text="Subject" style={{fontSize: hp('1.4')}} />
                  <View style={styles.subjectView}>
                    {item.course.length > 0 &&
                      item?.course?.map(res => {
                        return (
                          <View style={styles.subMainView}>
                            <View style={styles.subView}>
                              <TextComp
                                text={res?.title}
                                style={{fontSize: hp('1.3'), color: 'white'}}
                              />
                            </View>
                          </View>
                        );
                      })}
                  </View>
                </>
              )}
            </View>
          </View>
          <TextComp
            // text={'Lorem'}
            text={userData?.bio}
            style={{...styles.desText, textAlign: 'left', marginLeft: wp('10')}}
          />
          <HorizontalDividerComp
            width={'75'}
            style={styles.bottomLine}
            color={colorTutor_.topNavigationColor}
          />
        </View>
        {startLoading ? (
          <SkypeIndicator
            color={'white'}
            size={hp('4')}
            style={{
              alignSelf: 'center',
              justifyContent: 'center',
              marginTop: hp('10'),
            }}
          />
        ) : getData.length > 0 ? (
          <FlatList
            data={getData}
            scrollEnabled={false}
            contentContainerStyle={{
              marginTop: hp('2'),
              width: wp('95'),
              alignSelf: 'center',
            }}
            keyExtractor={(item, index) => index.toString()}
            numColumns={2}
            renderItem={({item}) => {
              return <RenderCard data={item} />;
            }}
          />
        ) : (
          <InformationTextView
            iconcolor={'white'}
            style={{
              width: wp('85'),
              backgroundColor: MentorColor.MentorLightTheme,
              marginTop: hp('20'),
            }}
            textColor={'white'}
            text={'You don’t have any class created'}
          />
        )}
      </ScrollView>
      {isVisible && <ModalView />}
    </View>
  );
};

export default TeacherDetailScreen;
