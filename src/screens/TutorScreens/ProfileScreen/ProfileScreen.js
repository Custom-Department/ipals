import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  Dimensions,
  ScrollView,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import {HeaderComponent} from '../../../components/HeaderComponent/HeaderComponent';
import {color, colorTutor_} from '../../../config/color';
import {globalStyles} from '../../../config/globalStyles';
import {styles} from './style';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {TextComp} from '../../../components/TextComponent';
import {ButtonIconComp} from '../../../components/ButtonIconComp/ButtonIconComp';
import {ButtonThemeComp} from '../../../components/ButtonThemeComp/ButtonThemeComp';
import {SettingIconComp} from '../../../components/SettingIconComp/SettingIconComp';
import * as Animatable from 'react-native-animatable';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import InformationTextView from '../../../components/InformationTextView/InformationTextView';
import {BackHeaderComponent} from '../../../components/BackHeaderComponent/BackHeaderComponent';
import {useDispatch, useSelector} from 'react-redux';
import {LoginInputComp} from '../../../components/LoginInputComp/LoginInputComp';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import axios from 'react-native-axios';
import {GetCourseUrl, UpdateProfileUrl} from '../../../config/Urls';
import {useEffect} from 'react';
import {
  errorMessage,
  successMessage,
} from '../../../config/NotificationMessage';
import {errorHandler} from '../../../config/helperFunction';
import types from '../../../Redux/types';

const ProfileScreen = ({navigation}) => {
  const {userData, token} = useSelector(state => state.userData);

  const dispatch = useDispatch();
  const [stateChange, setStateChange] = useState({
    editState: false,
    accState: false,
    createAccoutState: false,
    childAccState: false,
    deleteAccState: false,
    BioData: userData?.bio,
    isLoading: false,
    userImage: [],
    subjectModelLoader: false,
    subjectModelList: [],
    activities: [],
    idSubjectArray: [],
    isVisible: false,
  });
  const updateState = data => setStateChange(prev => ({...prev, ...data}));
  const {
    editState,
    accState,
    createAccoutState,
    childAccState,
    deleteAccState,
    BioData,
    isLoading,
    userImage,
    subjectModelLoader,
    subjectModelList,
    activities,
    idSubjectArray,
    isVisible,
  } = stateChange;

  useEffect(() => {
    getSubjectFunct();
    return () => {
      updateState({isVisible: false});
    };
  }, []);

  const getSubjectFunct = () => {
    updateState({subjectModelLoader: true});
    axios
      .get(GetCourseUrl, {
        headers: {Authorization: `Bearer ${token}`},
      })
      .then(function (response) {
        updateState({subjectModelList: response.data.data});
        updateState({subjectModelLoader: false});
      })
      .catch(function (error) {
        updateState({subjectModelLoader: false});
        errorMessage(errorHandler(error));
      });
  };

  const updateProfileFunc = () => {
    updateState({isLoading: true});
    if (activities.length > 0) {
      activities.map(res => {
        return idSubjectArray.push(res?.id);
      });
    } else {
      userData?.course?.map(res => {
        return idSubjectArray.push(res?.id);
      });
    }

    if (BioData != null && BioData != '') {
      var bodyFormData = new FormData();

      userImage.length > 0 &&
        bodyFormData.append('profile_image', {
          name: userImage[0]?.fileName,
          uri: userImage[0]?.uri,
          type: userImage[0]?.type,
        });
      bodyFormData.append('bio', BioData);
      bodyFormData.append('course_id', [1]);
      console.log(34, bodyFormData);
      axios
        .post(UpdateProfileUrl, bodyFormData, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        })
        .then(res => {
          updateState({isLoading: false});
          console.log(137, res.data.data);
          dispatch({
            type: types.UpdateProfile,
            payload: {user: res.data.data},
          });
          successMessage('Your Profile Successful Updated');
        })
        .catch(function (error) {
          updateState({isLoading: false});
          console.log(149, error);
          errorMessage(errorHandler(error));
        });
    } else {
      updateState({isLoading: false});
      errorMessage('Please type correct information');
    }
  };
  const SubjectDetailScreen = () => {
    return (
      <>
        <View style={styles.modalMainView}>
          <View style={styles.modalInnerView}>
            <TextComp text="Select schedule for class" style={styles.heading} />
            <View style={styles.daysView}>
              {subjectModelList.length > 0
                ? subjectModelList.map((res, i) => {
                    return (
                      <>
                        <TouchableOpacity
                          onPress={() => selectActivities(res, i)}
                          style={{
                            ...styles.activitiesContainer,
                            backgroundColor: activities.includes(res)
                              ? color.lightPurple
                              : 'white',
                            borderColor: activities.includes(res)
                              ? color.orderBoxColor
                              : 'black',
                            borderWidth: activities.includes(res) ? 2 : 1,
                          }}>
                          <TextComp
                            text={res?.title}
                            style={{
                              textAlign: 'center',
                              color: activities.includes(res)
                                ? color.orderBoxColor
                                : 'black',
                              fontWeight: activities.includes(res)
                                ? 'bold'
                                : 'normal',
                              fontSize: hp('1.5'),
                            }}
                          />
                        </TouchableOpacity>
                      </>
                    );
                  })
                : null}
            </View>

            <View style={styles.Bottombtn}>
              <ButtonThemeComp
                onPress={() => {
                  updateState({isVisible: false});
                }}
                text={'Apply For Class'}
              />
            </View>
          </View>
        </View>
      </>
    );
  };
  const selectActivities = (v, i) => {
    if (activities.includes(v)) {
      updateState({
        activities: activities.filter(activities => activities.id !== v.id),
      });
    } else {
      updateState({activities: [...activities, v]});
    }
  };
  const pickImagesFromGalary = () => {
    launchImageLibrary(
      {
        selectionLimit: 1,
        mediaType: 'photo',
        quality: 0.5,
        maxWidth: 300,
        maxHeight: 300,
      },
      res => {
        if (!res?.didCancel) {
          updateState({userImage: res?.assets});
        }
      },
    );
  };
  return (
    <>
      <View style={{flex: 1, backgroundColor: colorTutor_.ipalBlue}}>
        <BackHeaderComponent
          heading={'Profile Screen'}
          data={true}
          bellOnPress={() => console.log('bell')}
          settingOnPress={() => console.log('hello')}
        />
        <ScrollView
          keyboardShouldPersistTaps="always"
          contentContainerStyle={styles.midView}>
          <ImageBackground
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: Dimensions.get('window').width * 0.35,

              height: Dimensions.get('window').width * 0.35,
            }}
            imageStyle={{
              borderRadius: Math.round(
                Dimensions.get('window').width +
                  Dimensions.get('window').height,
              ),
            }}
            source={{
              uri:
                userImage.length > 0
                  ? userImage[0]?.uri
                  : userData?.profileImageLink,
            }}>
            <FontAwesome
              onPress={() => pickImagesFromGalary()}
              name="camera"
              size={hp('3.8')}
              color="white"
            />
          </ImageBackground>
          <TextComp
            style={styles.textharMatin}
            text={userData?.f_name + ' ' + userData?.l_name}
          />
          <View
            style={{
              flexDirection: 'row',
              width: wp('100'),
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap',
              display: 'flex',
            }}>
            {activities.length > 0
              ? activities?.map(res => {
                  return (
                    <View style={styles.subView}>
                      <TextComp
                        text={res?.title}
                        style={{
                          fontSize: hp('1.3'),
                          textAlign: 'center',
                          color: 'white',
                        }}
                      />
                    </View>
                  );
                })
              : userData?.course?.map(res => {
                  return (
                    <View style={styles.subView}>
                      <TextComp
                        text={res?.title}
                        style={{
                          fontSize: hp('1.3'),
                          textAlign: 'center',
                          color: 'white',
                        }}
                      />
                    </View>
                  );
                })}

            {/* { activities.length>0?activities?.map: userData?.user?.course?.map (res =>{
          return(
            <View style={styles.subView}>
            <TextComp
              text={res?.title}
              style={{
                fontSize: hp('1.3'),
                textAlign: 'center',
                color: 'white',
              }}
            />
          </View>
          )
        })} */}
            <TouchableOpacity
              onPress={() => {
                updateState({isVisible: true});
              }}
              style={{
                ...styles.subView,
                marginLeft: wp('2'),
                backgroundColor: colorTutor_.blue,
              }}>
              <TextComp
                text="Add Subject"
                style={{fontSize: hp('1.3'), color: 'white'}}
              />
            </TouchableOpacity>
          </View>
          <LoginInputComp
            placeholder={'About Yourself'}
            style={{height: hp('20'), width: wp('95')}}
            value={BioData}
            onChangeText={BioData => updateState({BioData: BioData})}
            multiline={true}
            inputStyle={{
              alignSelf: 'flex-start',
              paddingTop: hp('2'),
            }}
          />
          <ButtonThemeComp
            TextStyle={{fontSize: hp('1.9')}}
            style={{
              width: wp('80'),
              height: hp('7'),
              marginVertical: hp('3'),
            }}
            isLoading={isLoading}
            onPress={() => updateProfileFunc()}
            text="Save Profile"
          />
        </ScrollView>
      </View>
      <View style={styles.bottomBar}>
        <TouchableOpacity onPress={() => console.log('dont have you acc')}>
          <Text style={globalStyles.globalModuletutor}>Term of use</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('dont have you acc')}>
          <Text style={globalStyles.globalModuletutor}>Privacy Policy</Text>
        </TouchableOpacity>
      </View>
      {isVisible && <SubjectDetailScreen />}
    </>
  );
};

export default ProfileScreen;
