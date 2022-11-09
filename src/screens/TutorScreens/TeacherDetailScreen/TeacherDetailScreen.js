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
} from 'react-native';
import {HeaderComponent} from '../../../components/HeaderComponent/HeaderComponent';
import {colorTutor_} from '../../../config/color';
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
import {errorMessage} from '../../../config/NotificationMessage';
import {errorHandler} from '../../../config/helperFunction';
import {useSelector} from 'react-redux';
import {SkypeIndicator} from 'react-native-indicators';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import moment from 'moment/moment';

const TeacherDetailScreen = ({route, navigation}) => {
  const {userData} = useSelector(state => state.userData);
  const item = route.params;
  const [topNavigator, setTopNavigator] = useState([
    'HOME',
    'MY CLASSES',
    'MESSAGES',
  ]);
  const [data, setData] = useState({
    getData: [],
    postData: {},
  });
  const [loading, setLoading] = useState({
    startLoading: true,
    buttonloading: false,
    isVisible: false,
  });
  const [showModal, setShowModal] = useState(false);
  const {getData, postData} = data;
  const {startLoading, buttonloading, isVisible} = loading;
  const updateState = data => {
    setData(prev => ({...prev, ...data}));
  };
  const updateLoadingState = data => {
    setLoading(prev => ({...prev, ...data}));
  };
  //   const scheduleData = item.course.map(res => data.push(res.))
  //   const applyClass = () => {
  //     setIsloading(true);
  //     let body = {
  //       my_class_id: 30,
  //       course_id: 1,
  //       from: '04:13',
  //       // schedule:item.course.length > 0 ?  : [],
  //       to: '07:13',
  //     };
  //     axios
  //       .post(SignUpUrl, body)
  //       .then(function (res) {
  //         dispatch({
  //           type: types.LoginType,
  //           payload: res.data.data,
  //         });
  //         setIsloading(false);
  //       })
  //       .catch(function (error) {
  //         setIsloading(false);
  //         errorMessage(errorHandler(error));
  //       });
  //   };
  const getApiData = () => {
    updateLoadingState({startLoading: true});
    let url = GetTeacherClassesUrl + '10';
    // let url = GetTeacherClassesUrl + item.id;
    axios
      .get(url, {
        headers: {Authorization: `Bearer ${userData.token}`},
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
          <FontAwesome name="book" size={hp('2')} color={'gray'} />
          <TextComp style={{fontSize: hp('1.6')}} text={data.course.title} />
          <View style={styles.verDivider} />
          <MaterialIcons name="timer" size={hp('2.5')} color={'gray'} />
          <TextComp style={{fontSize: hp('1.6')}} text={data.total_hours} />
        </View>
        <ButtonThemeComp
          onPress={() => updateLoadingState({isVisible: true})}
          style={styles.bottomButton}
          text={'Apply Now'}
        />
      </View>
    );
  };
  const ModalView = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        collapsable={true}
        visible={isVisible}
        onRequestClose={() => {
          updateLoadingState({isVisible: false});
        }}>
        <View style={styles.modalMainView}>
          <View style={styles.modalInnerView}>
            <Entypo
              name="circle-with-cross"
              color={'gray'}
              size={hp('3')}
              onPress={() => updateLoadingState({isVisible: false})}
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
                  marginTop: hp('1.2'),
                  backgroundColor: colorTutor_.blue,
                }}>
                <TextComp
                  text={'English'}
                  style={{fontSize: hp('1.7'), color: 'white'}}
                />
              </View>
            </View>
            <TextComp text="Select schedule for class" style={styles.heading} />
          </View>
        </View>
      </Modal>
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
      <HeaderComponent navigatorName={topNavigator} search={true} />
      <ScrollView
        contentContainerStyle={{paddingBottom: hp('10')}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.detailsView}>
          <View style={styles.innerTopView}>
            <CircleImageComp
              styles={styles.circleImage}
              image={require('../../../image/profile.jpg')}
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
              <TextComp text="Subject" style={{fontSize: hp('1.4')}} />
              <View style={styles.subjectView}>
                {item.course.length > 0 &&
                  topNavigator.map(res => {
                    return (
                      <View style={styles.subView}>
                        <TextComp
                          text="English"
                          style={{fontSize: hp('1.3'), color: 'white'}}
                        />
                      </View>
                    );
                  })}
              </View>
            </View>
          </View>
          <TextComp
            text={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
            }
            style={styles.desText}
          />
          <HorizontalDividerComp
            width={'75'}
            style={styles.bottomLine}
            color={colorTutor_.topNavigationColor}
          />
          <ButtonThemeComp
            onPress={() => applyClass()}
            text="Apply Now"
            style={styles.buttonView}
          />
        </View>
        {startLoading ? (
          <SkypeIndicator
            color={'white'}
            size={hp('4')}
            style={{
              alignSelf: 'center',
              justifyContent: 'center',
            }}
          />
        ) : (
          getData.length > 0 && (
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
          )
        )}
      </ScrollView>
      <ModalView />
    </View>
  );
};

export default TeacherDetailScreen;
