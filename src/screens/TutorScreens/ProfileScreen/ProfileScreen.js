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
import { useDispatch, useSelector } from 'react-redux';
import { LoginInputComp } from '../../../components/LoginInputComp/LoginInputComp';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import axios from 'react-native-axios';
import { GetCourseUrl, UpdateProfileUrl } from '../../../config/Urls';
import { useEffect } from 'react';
import { errorMessage, successMessage } from '../../../config/NotificationMessage';
import { errorHandler } from '../../../config/helperFunction';
import types from '../../../Redux/types';

const ProfileScreen = ({navigation}) => {
  const {userData} = useSelector(state => state.userData);
  const dispatch = useDispatch();

    const [stateChange, setStateChange] = useState({
    editState: false,
    accState: false,
    createAccoutState: false,
    childAccState: false,
    deleteAccState: false,
    BioData:userData?.user?.bio,
    isLoading:false,
    userImage: [],
    subjectModelLoader:false,
    subjectModelList:[],
    activities: [],
    idSubjectArray:[],
    isVisible:false
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
    idSubjectArray,
    isVisible
  } = stateChange;
  
  
  
  useEffect(()=>{
    getSubjectFunct();
    console.log('mount')
    return () => {
      updateState({isVisible:false})
      console.log(userData?.user?.course?.pivot,"cleaned up");
    };
    
  },[])

  const getSubjectFunct = () => {
    // updateState({isVisible:true,subjectModelLoader: true});
    updateState({subjectModelLoader: true});
    axios
      .get(GetCourseUrl, {
        headers: {Authorization: `Bearer ${userData?.token}`},
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

  
  const updateProfileFunc =()=>{
    var bodyFormData = new FormData();
    updateState({isLoading:true})
    if(activities != []){
      activities.map((res)=>{
       return idSubjectArray.push(res?.id)
      })
    }
    else{
      userData?.user?.course?.map((res)=>{
        return idSubjectArray.push(res?.id)
       })      
    }
    console.log(110,idSubjectArray,BioData,userImage[0]?.fileName, userData.token);
    // bodyFormData.append('profile_image',userImage[0]?.fileName);
    bodyFormData.append('profile_image',{
      name: userImage[0]?.fileName,
      uri: userImage[0]?.uri,
      type: userImage[0]?.type,
    });
    bodyFormData.append('bio',BioData);
    bodyFormData.append('course_id',1);
    
    if(BioData !=null && BioData !='' && userImage !=null && userImage != ''){
        axios.post(UpdateProfileUrl,bodyFormData,{
          headers: {Authorization: `Bearer ${userData.token}`,"Content-Type": "multipart/form-data"},
        }).then(

          res=>{
            console.log(146,res)
            updateState({isLoading:false})
        //   dispatch({
        //   type: types.LoginType,
        //   payload: res.data.data,
        // });
          successMessage("Your Profile Successful Updated")
      }

        )
        .catch(function (error) {
          updateState({isLoading:false})

                  console.log(54, error);
                  errorMessage(errorHandler(error));
                });
            } else {
              updateState({isLoading:false})
              errorMessage('Please type correct information');
            }
    }
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
                       <ButtonThemeComp onPress={()=>{updateState({isVisible:false})}} text={'Apply For Class'} />
                        {console.log(155,activities)}
                       </View>
          </View>
        </View>
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
    <Animatable.View animation="fadeInRight">
      <ScrollView contentContainerStyle={styles.midView}>
        <View style={{flexDirection: 'row', alignSelf: 'baseline'}}>
          <Ionicons
            style={styles.icon1}
            name={'md-arrow-back'}
            size={hp('3')}
            color={'white'}
            // onPress={() => updateState({editState: false})}
            onPress={() => navigation.goBack()}
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
          source={{uri:userImage.length>0?userImage[0]?.uri:userData?.user?.profileImageLink}}            
          >
          <FontAwesome onPress={()=>pickImagesFromGalary()} name="camera" size={hp('3.8')} color="white" />
        </ImageBackground>
        <TextComp style={styles.textharMatin} text={userData?.user?.f_name+" "+userData?.user?.l_name} />
        <View
          style={{
            flexDirection: 'row',
            width: wp('100'),
            alignItems:'center',
            justifyContent: 'center',
            flexWrap:'wrap',
            display:'flex'
          }}>
        {activities.length>0?
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
        :userData?.user?.course?.map(res =>{
          console.log('out')
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
            onPress={()=>{updateState({isVisible:true})}}
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
          onPress={() => updateProfileFunc()}
          text="Save Profile"
        />
      </ScrollView>
    
    </Animatable.View>
      { isVisible && <SubjectDetailScreen/>}
</>
  );
};

export default ProfileScreen;
