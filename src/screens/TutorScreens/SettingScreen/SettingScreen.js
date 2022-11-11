import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  Dimensions,
  ScrollView,
  StyleSheet,
  FlatList,
  Modal,
} from 'react-native';
import React, {useState,useEffect} from 'react';
import {color, colorTutor_} from '../../../config/color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {TextComp} from '../../../components/TextComponent';
import {SettingIconComp} from '../../../components/SettingIconComp/SettingIconComp';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './style';
import {BackHeaderComponent} from '../../../components/BackHeaderComponent/BackHeaderComponent';
import {ButtonThemeComp} from '../../../components/ButtonThemeComp/ButtonThemeComp';
import {globalStyles} from '../../../config/globalStyles';
import InformationTextView from '../../../components/InformationTextView/InformationTextView';
import {LoginInputComp} from '../../../components/LoginInputComp/LoginInputComp';
import ChildAccountView from '../../../components/ChildAccountView/ChildAccountView';
import {PendingReqComp} from '../../../components/PendingReqComp/PendingReqComp';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { useDispatch } from 'react-redux';
import types from '../../../Redux/types';
import axios from 'react-native-axios';
import { GetCourseUrl, UpdateProfileUrl } from '../../../config/Urls';
import { errorHandler } from '../../../config/helperFunction';
import { errorMessage } from '../../../config/NotificationMessage';

const SettingScreen = ({route,navigation}) => {
  const [isVisible,setIsVisible]=useState();
  const {user,token}=route.params;

  const dispatch=useDispatch();
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
  const [stateChange, setStateChange] = useState({
    editState: false,
    accState: false,
    createAccoutState: false,
    childAccState: false,
    deleteAccState: false,
    BioData:user?.bio,
    isLoading:false,
    userImage: [],
    subjectModelLoader:false,
    subjectModelList:[],
    activities: [],
    idSubjectArray:[]
  });
  const updateState = data => setStateChange((prev) => ({...prev, ...data}));
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
    idSubjectArray
  } = stateChange;

  const selectActivities = (v, i) => {
    if (activities.includes(v)) {
      updateState({
        activities: activities.filter(activities => activities.id !== v.id),
      });
    } else {
      updateState({activities: [...activities, v]});
    }
  };
  const SubjectDetailScreen = () => {
    return (
     
        <View style={styles.modalMainView}>
          <View style={styles.modalInnerView}>
          <TextComp text="Select schedule for class" style={styles.heading} />
          <View style={styles.daysView}>
          {subjectModelList.length > 0
              ? subjectModelList.map((res, i) => {
                  return (
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
                        }}/>
                    </TouchableOpacity>
                     
                  );
                })
              : null}
              </View>

           <View style={styles.Bottombtn}>
                       {/* <ButtonThemeComp onPress={()=>updateState({isVisible:false})} text={'Apply For Class'} /> */}
                       <ButtonThemeComp onPress={()=>setIsVisible(false)} text={'Apply For Class'} />
           
                       </View>
          </View>
        </View>
    );
  };

  
  // const loginUserFun = () => {
  //   // setIsloading(true);
  //   const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  //   if (
  //     email != '' &&
  //     password != '' &&
  //     reg.test(email) === true &&
  //     password.length >= 8
  //   ) {
  //     let body = {
  //       email: email,
  //       password: password,
  //     };
  //     axios
  //       .post(LoginUrl, body)
  //       .then(function (res) {
  //         setIsloading(false);
  //         dispatch({
  //           type: types.LoginType,
  //           payload: res.data.data,
  //         });
  //       })
  //       .catch(function (error) {
  //         setIsloading(false);
  //         console.log(54, error);
  //         errorMessage(errorHandler(error));
  //       });
  //   } else {
  //     setIsloading(false);
  //     errorMessage('Please type correct information');
  //   }
  // };
  // const updateProfileFunc =()=>{
  
  //   updateState({isLoading:true})
  //   if(BioData !=null && BioData !='' && userImage !=null && userImage != ''){
  //       let body={
  //         profile_image:userImage,
  //         bio:BioData,
  //         course_id:idSubjectArray
  //       }
  //       axios.post(UpdateProfileUrl,body).then(
  //         res=>{
  //         updateState({isLoading:false})
  //         dispatch({
  //         type: types.LoginType,
  //         payload: res.data.data,
  //       });
  //         }
  //       )
  //       .catch(function (error) {
  //         updateState({isLoading:false})

  //                 console.log(54, error);
  //                 errorMessage(errorHandler(error));
  //               });
  //           } else {
  //             updateState({isLoading:false})
  //             errorMessage('Please type correct information');
  //           }
  //   }
  


  const getSubjectFunct = () => {
    setIsVisible(true)
    // updateState({isVisible:true,subjectModelLoader: true});
    updateState({subjectModelLoader: true});
    axios
      .get(GetCourseUrl, {
        headers: {Authorization: `Bearer ${token}`},
      })
      .then(function (response) {
        updateState({subjectModelList: response.data.data});
        // updateLoadingState({[loading]: false});
    updateState({subjectModelLoader: false});
      })
      .catch(function (error) {
        // updateLoadingState({[loading]: false});
        updateState({subjectModelLoader: false});
        errorMessage(errorHandler(error));
      });
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
  const ProfileScreen = () => {
    console.log('profile')
    return (
   
      <Animatable.View animation="fadeInRight">
        <ScrollView contentContainerStyle={styles.midView}>
          <View style={{flexDirection: 'row', alignSelf: 'baseline'}}>
            <Ionicons
              style={styles.icon1}
              name={'md-arrow-back'}
              size={hp('3')}
              color={'white'}
              onPress={() => updateState({editState: false})}
            />
          </View>
          
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
            source={{uri:userImage.length>0?userImage[0]?.uri:user?.profileImageLink}}            
            >
            <FontAwesome onPress={()=>pickImagesFromGalary()} name="camera" size={hp('3.8')} color="white" />
          </ImageBackground>
          <TextComp style={styles.textharMatin} text={user?.f_name+" "+user?.l_name} />
          <View
            style={{
              flexDirection: 'row',
              width: wp('100'),
              alignItems:'center',
              justifyContent: 'center',
              flexWrap:'wrap',
              display:'flex'
            }}>
          {/* {activities.length>0?
          activities?.map(res =>{
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
          })
          :user?.course?.map(res =>{
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
          })}
         */}
         {   user?.course?.map(res =>{
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
          })}
            <TouchableOpacity
              onPress={()=>{getSubjectFunct()}}
              style={{...styles.subView, backgroundColor: colorTutor_.blue}}>
              <TextComp
                text="Add Subject"
                style={{fontSize: hp('1.3'), color: 'white'}}
              />
            </TouchableOpacity>
          </View>
          <LoginInputComp
              placeholder={'About Yourself'}
              style={{height: hp('20'),  width: wp('95')}}
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
            onPress={() => console.log('Save Profile')}
            text="Save Profile"
          />
        </ScrollView>
      
      </Animatable.View>
    );
  };

  const CreateChildAccount = () => {
    return (
      <Animatable.View animation="fadeInRight" style={styles.setContainer}>
        <View style={{flexDirection: 'row', marginLeft: wp('5')}}>
          <Ionicons
            style={styles.icon1}
            name={'md-arrow-back'}
            size={hp('3')}
            color={'white'}
            onPress={() =>
              createAccoutState == true
                ? updateState({createAccoutState: false})
                : updateState({childAccState: false})
            }
          />
          <TextComp
            color={colorTutor_.TxtColor}
            text={'Create child account'}
            style={{
              marginLeft: wp('3'),
              marginBottom: hp('2'),
              fontSize: hp('2'),
            }}
          />
        </View>
        <View style={styles.ViewContainer}>
          <InformationTextView
            text={'Your email address remains same for every child account'}
          />
          <View style={styles.createAcc}>
            <TextComp
              color={colorTutor_.TxtColor}
              text={'Create child account'}
              style={{
                marginLeft: wp('3'),
                marginBottom: hp('2'),
                fontSize: hp('2'),
              }}
            />
            <TouchableOpacity
              onPress={() => updateState({createAccoutState: true})}
              style={{
                ...styles.plusView,
                backgroundColor: createAccoutState
                  ? colorTutor_.topNavigationColor
                  : colorTutor_.blue,
              }}>
              <Ionicons name={'add'} size={hp('3')} color="white" />
            </TouchableOpacity>
          </View>

          {createAccoutState ? (
            <View>
              <TextComp
                text="Nick name"
                style={{
                  marginLeft: wp('7'),
                  color: colorTutor_.TxtColor,
                  marginTop: hp('2'),
                }}
              />
              <LoginInputComp
                style={{
                  alignSelf: 'center',
                  marginBottom: hp('2'),
                  width: wp('90'),
                }}
                placeholder="Child account name"
              />
              <TextComp
                text="Password"
                style={{
                  marginLeft: wp('7'),
                  color: colorTutor_.TxtColor,
                  marginTop: hp('2'),
                }}
              />
              <LoginInputComp
                style={{
                  alignSelf: 'center',
                  marginBottom: hp('2'),
                  width: wp('90'),
                }}
                placeholder="Password"
              />
              <TextComp
                text="Confirm password"
                style={{
                  marginLeft: wp('7'),
                  color: colorTutor_.TxtColor,
                  marginTop: hp('2'),
                }}
              />
              <LoginInputComp
                style={{
                  alignSelf: 'center',
                  marginBottom: hp('2'),
                  width: wp('90'),
                }}
                placeholder="Confirm password"
              />

              <ButtonThemeComp
                style={{
                  ...styles.signBtn,
                  marginTop: hp('2'),
                  width: wp('95'),
                  alignSelf: 'center',
                }}
                TextStyle={{fontSize: hp('2')}}
                text={'Create Account'}
                onPress={() => updateState({createAccoutState: false})}
              />
            </View>
          ) : (
            list.length > 0 && (
              <FlatList
                data={list}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={{
                  width: wp('95'),
                  alignSelf: 'center',
                  paddingBottom: hp('15'),
                }}
                renderItem={({item}) => {
                  return (
                    <Animatable.View animation="fadeInUp">
                      <PendingReqComp
                        text={'Daniel martin'}
                        changeIcon1={
                          <MaterialIcons
                            name={'delete'}
                            size={hp('5')}
                            color={'red'}
                          />
                        }
                        changeIcon2={
                          <Ionicons
                            name={'settings'}
                            size={hp('5')}
                            color={colorTutor_.darkGreen}
                          />
                        }
                      />
                    </Animatable.View>
                  );
                }}
              />
            )
          )}
        </View>
      </Animatable.View>
    );
  };

  const AccountSettings = () => {
    return (
      <Animatable.View animation="fadeInRight" style={styles.setContainer}>
        <View style={{flexDirection: 'row', marginLeft: wp('3')}}>
          <Ionicons
            name={'md-arrow-back'}
            size={hp('3')}
            color={'white'}
            onPress={() => updateState({accState: false})}
          />

          <TextComp
            color={colorTutor_.TxtColor}
            text={'Settings'}
            style={{
              marginLeft: wp('3'),
              marginBottom: hp('2'),
              fontSize: hp('2'),
            }}
          />
        </View>
        <TouchableOpacity onPress={() => updateState({childAccState: true})}>
          <SettingIconComp
            changeIcon={
              <MaterialCommunityIcons
                name={'account-child'}
                size={hp('3')}
                color={'white'}
              />
            }
            text={'Create child account'}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => updateState({deleteAccState: true})}>
          <SettingIconComp
            changeIcon={
              <MaterialIcons name={'delete'} size={hp('3')} color={'white'} />
            }
            text={'Delete Account'}
          />
        </TouchableOpacity>
      </Animatable.View>
    );
  };

  const DeleteAccount = () => {
    return (
      <Animatable.View animation="fadeInRight" style={styles.setContainer}>
        <View style={{flexDirection: 'row',marginLeft:wp('5')}}>
          <Ionicons
            style={styles.icon1}
            name={'md-arrow-back'}
            size={hp('3')}
            color={'white'}
            onPress={() => updateState({deleteAccState: false})}
          />
          <TextComp
            color={colorTutor_.TxtColor}
            text={'Delete account'}
            style={{
              marginLeft: wp('3'),
              marginBottom: hp('2'),
              fontSize: hp('2'),
            }}
          />
        </View>
        <TextComp
          text="Are you sure you want to delete account ?"
          style={{
            color: 'white',
            textAlign: 'center',
            fontSize: hp('2.0'),
            marginTop: hp('3'),
          }}
        />
        <View style={styles.buttonView}>
          <ButtonThemeComp
            style={{
              ...styles.yesView,
            }}
            text={'Yes'}
            onPress={() => console.log('yes')}
          />
          <ButtonThemeComp
            style={{
              backgroundColor: colorTutor_.topNavigationColor,
              ...styles.yesView,
            }}
            text={'No'}
            onPress={() => console.log('No')}
          />
        </View>
      </Animatable.View>
    );
  };
  return (
    <View
      style={{
        backgroundColor: colorTutor_.ipalBlue,
        flex: 1,
      }}>
      {console.log(
        362,
        createAccoutState,
        accState,
        editState,
        childAccState,
        deleteAccState,
      )}

      <BackHeaderComponent heading={'SettingScreen'} data={true} name3={"settings"} name2={"search"} bellOnPress={()=>console.log('bell')} settingOnPress={() => console.log('hello')} />
      {editState ? (
        <ProfileScreen />
      ) : accState ? (
        childAccState ? (
          <CreateChildAccount />
        ) : deleteAccState ? (
          <DeleteAccount />
        ) : (
          <AccountSettings />
        )
      ) : (
        <Animatable.View animation="fadeInLeft" style={styles.topView}>
          <TextComp
            color={colorTutor_.TxtColor}
            text={'Settings'}
            style={{
              marginLeft: wp('3'),
              marginBottom: hp('2'),
              fontSize: hp('2'),
            }}
          />
          <SettingIconComp
            name={'bell-fill'}
            text={'Notifications'}
            switch={true}
          />
          <TouchableOpacity onPress={() => updateState({accState: true})}>
            <SettingIconComp
              onPress={() => console.log('hellow')}
              name={'person-fill'}
              text={' Account settings'}
            />
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={() => updateState({editState: true})}> */}
          <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
            <SettingIconComp
              text={'Edit Profile'}
              changeIcon={
                <FontAwesome5
                  name={'user-edit'}
                  size={hp('3')}
                  color={'white'}
                />
              }
            />
          </TouchableOpacity>
          <SettingIconComp
            onPress={() => console.log('hellow')}
            name={'info'}
            text={'Help & Guide'}
          />
          <TouchableOpacity onPress={()=>dispatch({type:types.LogoutType  })}>
          <SettingIconComp  name={'sign-out'} text={' Log out'} />
          </TouchableOpacity>
        </Animatable.View>
      )}
      <View style={styles.bottomBar}>
        <TouchableOpacity onPress={() => console.log('dont have you acc')}>
          <Text style={globalStyles.globalModuletutor}>Term of use</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('dont have you acc')}>
          <Text style={globalStyles.globalModuletutor}>Privacy Policy</Text>
        </TouchableOpacity>
      </View>
      { isVisible && <SubjectDetailScreen/>}

    </View>
    
  );
            }
export default SettingScreen;
