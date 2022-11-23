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
import {color, colorTutor_} from '../../../config/color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {TextComp} from '../../../components/TextComponent';
import {SettingIconComp} from '../../../components/SettingIconComp/SettingIconComp';
import * as Animatable from 'react-native-animatable';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useState} from 'react';
import {BackHeaderComponent} from '../../../components/BackHeaderComponent/BackHeaderComponent';
import {ButtonThemeComp} from '../../../components/ButtonThemeComp/ButtonThemeComp';
import {LoginInputComp} from '../../../components/LoginInputComp/LoginInputComp';
import InformationTextView from '../../../components/InformationTextView/InformationTextView';
import {PendingReqComp} from '../../../components/PendingReqComp/PendingReqComp';
import {styles} from './style';
import {useEffect} from 'react';
import axios from 'react-native-axios';
import {
  MenteeAddUserUrl,
  MenteeDelUserUrl,
  MenteeGetUserUrl,
} from '../../../config/Urls';
import {useSelector} from 'react-redux';
import {
  errorMessage,
  successMessage,
} from '../../../config/NotificationMessage';
import {useIsFocused} from '@react-navigation/native';
import {SkypeIndicator} from 'react-native-indicators';
import {errorHandler} from '../../../config/helperFunction';
const MenteeAccountSettings = ({navigation}) => {
  const {userData, token} = useSelector(state => state.userData);
  const isFocused = useIsFocused();
  const [stateChange, setStateChange] = useState({
    editState: false,
    accState: false,
    createAccoutState: false,
    childAccState: false,
    deleteAccState: false,
    BioData: user?.bio,
    isLoading: false,
    userImage: [],
    subjectModelLoader: false,
    subjectModelList: [],
    activities: [],
    idSubjectArray: [],
    getChildAccState: [],
    fullNameState: '',
    lastNameState: '',
    emailState: '',
    passwordState: '',
  });
  const updateState = data => setStateChange(prev => ({...prev, ...data}));
  const {
    createAccoutState,
    childAccState,
    getChildAccState,
    fullNameState,
    lastNameState,
    emailState,
    passwordState,
  } = stateChange;

  const user = [
    {id: 0, name: 'Daniel Martin'},
    {id: 1, name: 'Daniel Martin'},
    {id: 2, name: 'Daniel Martin'},
  ];

  const [allLoading, setAllLoading] = useState({
    getChildAccLoading: false,
    postChildAccountLoading: false,
  });
  const {getChildAccLoading, postChildAccountLoading} = allLoading;
  const updateLoadingState = data => {
    setAllLoading(prev => ({...prev, ...data}));
  };
  const getApiData = (url, state, loading) => {
    updateLoadingState({[loading]: true});
    axios
      .get(url, {
        headers: {
          // Authorization: `Bearer ${token}`,
          Authorization: `Bearer ${token}`,
        },
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
  const updateStatus = (data, status) => {
    updateLoadingState({pendingLoading: true});
    let url = MenteeDelUserUrl + data?.data?.user?.id;
    let body = {
      status: status,
    };
    console.log(108, url, data.data.user.id);

    axios
      .delete(url, {
        headers: {Authorization: `Bearer ${token}`},
      })
      .then(function (response) {
        updateLoadingState({pendingLoading: false});
        getApiData(MenteeGetUserUrl, 'getChildAccState', 'getChildAccLoading');
      })
      .catch(function (error) {
        updateLoadingState({pendingLoading: false});
        errorMessage(errorHandler(error));
      });
  };
  useEffect(() => {
    getApiData(MenteeGetUserUrl, 'getChildAccState', 'getChildAccLoading');
    if (isFocused) {
      getApiData(MenteeGetUserUrl, 'getChildAccState', 'getChildAccLoading');
    } else {
      console.log('Screen is not focused');
    }
  }, [isFocused]);

  // const DeleteAccount = () => {
  //   return (
  //     <Animatable.View animation="fadeInRight" style={styles.setContainer}>
  //       <View style={{flexDirection: 'row', marginLeft: wp('5')}}>
  //         <Ionicons
  //           style={styles.icon1}
  //           name={'md-arrow-back'}
  //           size={hp('3')}
  //           color={'white'}
  //           onPress={() => updateState({deleteAccState: false})}
  //         />
  //         <TextComp
  //           color={colorTutor_.TxtColor}
  //           text={'Delete account'}
  //           style={{
  //             marginLeft: wp('3'),
  //             marginBottom: hp('2'),
  //             fontSize: hp('2'),
  //           }}
  //         />
  //       </View>
  //       <TextComp
  //         text="Are you sure you want to delete account ?"
  //         style={{
  //           color: 'white',
  //           textAlign: 'center',
  //           fontSize: hp('2.0'),
  //           marginTop: hp('3'),
  //         }}
  //       />
  //       <View style={styles.buttonView}>
  //         <ButtonThemeComp
  //           style={{
  //             ...styles.yesView,
  //           }}
  //           text={'Yes'}
  //           onPress={() => console.log('yes')}
  //         />
  //         <ButtonThemeComp
  //           style={{
  //             backgroundColor: colorTutor_.topNavigationColor,
  //             ...styles.yesView,
  //           }}
  //           text={'No'}
  //           onPress={() => console.log('No')}
  //         />
  //       </View>
  //     </Animatable.View>
  //   );
  // };

  const CreateChildAccount = () => {
    return (
      <View animation="fadeInRight" style={styles.setContainer}>
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
              // onPress={() => updateState({createAccoutState: true})}
              onPress={() => navigation.navigate('MenteeCreateChildAccount')}
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
                text="First Name"
                style={{
                  marginLeft: wp('7'),
                  color: colorTutor_.TxtColor,
                  marginTop: hp('1'),
                }}
              />
              <LoginInputComp
                value={fullNameState}
                onChangeText={fullNameState => {
                  updateState({fullNameState: fullNameState});
                }}
                style={{
                  alignSelf: 'center',
                  marginBottom: hp('1'),
                  width: wp('90'),
                }}
                placeholder="First Name"
              />
              <TextComp
                text="Last Name"
                style={{
                  marginLeft: wp('7'),
                  color: colorTutor_.TxtColor,
                  marginTop: hp('1'),
                }}
              />
              <LoginInputComp
                value={lastNameState}
                onChangeText={lastNameState =>
                  updateState({lastNameState: lastNameState})
                }
                style={{
                  alignSelf: 'center',
                  marginBottom: hp('1'),
                  width: wp('90'),
                }}
                placeholder="Last Name"
              />
              <TextComp
                text="Email"
                style={{
                  marginLeft: wp('7'),
                  color: colorTutor_.TxtColor,
                  marginTop: hp('1'),
                }}
              />
              <LoginInputComp
                value={emailState}
                onChangeText={emailState =>
                  updateState({emailState: emailState})
                }
                style={{
                  alignSelf: 'center',
                  marginBottom: hp('1'),
                  width: wp('90'),
                }}
                placeholder="Email"
              />
              <TextComp
                text="Password"
                style={{
                  marginLeft: wp('7'),
                  color: colorTutor_.TxtColor,
                  marginTop: hp('1'),
                }}
              />
              <LoginInputComp
                value={passwordState}
                onChangeText={passwordState =>
                  updateState({passwordState: passwordState})
                }
                style={{
                  alignSelf: 'center',
                  marginBottom: hp('1'),
                  width: wp('90'),
                }}
                placeholder="Password"
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
          ) : getChildAccLoading == true ? (
            <View
              style={{
                height: hp('50'),
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <SkypeIndicator
                color={'white'}
                size={hp('4')}
                style={{
                  alignSelf: 'center',
                  justifyContent: 'center',
                }}
              />
            </View>
          ) : (
            getChildAccState.length > 0 && (
              <FlatList
                data={getChildAccState}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={{
                  width: wp('95'),
                  alignSelf: 'center',
                  paddingBottom: hp('20'),
                }}
                renderItem={({item}) => {
                  return (
                    <View animation="fadeInUp">
                      <PendingReqComp
                        tickStatus={false}
                        data={{user: item}}
                        onCancel={item => updateStatus(item, 'reject')}
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
                    </View>
                  );
                }}
              />
            )
          )}
        </View>
      </View>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: colorTutor_.ipalBlue}}>
      <BackHeaderComponent heading={'Setting'} data={true} />
      {childAccState ? (
        <CreateChildAccount />
      ) : (
        // deleteAccState ? (
        //   <DeleteAccount />
        // ) :
        <Animatable.View animation="fadeInRight" style={styles.setContainer}>
          <View style={{flexDirection: 'row', marginLeft: wp('3')}}>
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
          {/* <TouchableOpacity onPress={() => updateState({deleteAccState: true})}>
            <SettingIconComp
              changeIcon={
                <MaterialIcons name={'delete'} size={hp('3')} color={'white'} />
              }
              text={'Delete Account'}
            />
          </TouchableOpacity> */}
        </Animatable.View>
      )}
    </View>
  );
};

export default MenteeAccountSettings;
