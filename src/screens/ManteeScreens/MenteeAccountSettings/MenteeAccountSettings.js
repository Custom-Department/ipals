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
import {MenteeAddUserUrl, MenteeGetUserUrl} from '../../../config/Urls';
import {useSelector} from 'react-redux';

const MenteeAccountSettings = () => {
  const {userData, token} = useSelector(state => state.userData);
  const [fir, setFir] = useState('');
  const [list, setList] = useState([
    {
      id: 0,
      name: 'Freddy Mercury',
      image: require('../../../image/profile.jpg'),
      user: {
        f_name: 'Daniel Martin',
        l_name: 'Martin',
      },
    },
    {
      id: 1,
      name: 'Freddy Mercury',
      image: require('../../../image/profile.jpg'),
      user: {
        f_name: 'Daniel Martin',
        l_name: 'Martin',
      },
    },
    {
      id: 2,
      name: 'Freddy Mercury',
      image: require('../../../image/profile.jpg'),
      user: {
        f_name: 'Daniel Martin',

        l_name: 'Martin',
      },
    },
    {
      id: 3,
      name: 'Freddy Mercury',
      image: require('../../../image/profile.jpg'),
      user: {
        f_name: 'Daniel Martin',

        l_name: 'Martin',
      },
    },
    {
      id: 4,
      name: 'Freddy Mercury',
      image: require('../../../image/profile.jpg'),
      user: {
        f_name: 'Daniel Martin',

        l_name: 'Martin',
      },
    },
    {
      id: 5,
      name: 'Freddy Mercury',
      image: require('../../../image/profile.jpg'),
      user: {
        f_name: 'Daniel Martin',
        l_name: 'Martin',
      },
    },
  ]);
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
          Authorization: `Bearer ${'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZGFmMTkxNTgyM2EyNzg3ZTZhNGE3NjAxYWI1YzM4YmI1MWQ2NjRhMGVhYjljNDQxYzJhZjA0NmYyNTQwNTJjOTBkODlmODBhZDg2MDZiMGYiLCJpYXQiOjE2Njg3OTQzMDUuNjExMjQ0LCJuYmYiOjE2Njg3OTQzMDUuNjExMjQ2LCJleHAiOjE3MDAzMzAzMDUuNjA5OTkzLCJzdWIiOiIzIiwic2NvcGVzIjpbXX0.2ScF3oE4_6I2y6WFF1ma9VfVDjTj51bH-H-WCQ4cgEMGv3KbMiYCTGuX97YRQyGQtP2DKSjyu-Ue--ovU-Jw2XxHqDguT2iUJPoSF_FgrLxoQ7OpFNK9IKmAY7f5CVoM_KGU-xtZ37CLjRQIgMvBGpgeLOfM0nI53_VJd8ybAb2D3IPwOs5lECczneIo0EzYJvL7tsOulltsFMZZhJ89zmF99UJ_Gmf0DLK1_ozBu-Rg2Mtt8kt92IcdpVXe6b8eC_vSEPSnSaDM6X0tHbhLgfOVasWrs0gBdFXmtx2hWUvFeSgGcNGF05FiGxj_0oa4HydSxEr65iOroq7WHMpIxWGgJVzSgqltS8RElIMqDRoq9K1zu2uVps_YhZvNk57x6tW5_-oFSaFYE-qLYnRGML_VTeOQsNbEL_W_VkT-lovDGFE3G3ODxj-HcF7mpYktFcTncsqDTdjya2C6QhMNQjw2NYKjmXPSgVf48GO0yUTkJezsjrr79vC2JOCo-eP63gLXLUITSupc2TzA3C3Ull3fpsF-nsPW-0Ih8yvgoGdZHDm9TIVOsRulwVftv0HW7kxIldYueYWUSqF7ZKZwWvv_YLdY0eUoaSWhi7bhwQaUays4Qty0-ZU2JyI4jonjgoCdUCIfnY5vkgXQ1-S57JOcxF2kb-bYXEuguArPgFM'}`,
        },
      })
      .then(function (response) {
        console.log(response.data);
        updateState({[state]: response.data.data});
        updateLoadingState({[loading]: false});
      })
      .catch(function (error) {
        updateLoadingState({[loading]: false});
        errorMessage(errorHandler(error));
      });
  };
  const postApiData = (url, loading) => {
    updateLoadingState({[loading]: true});
    let body = {
      f_name: fullNameState,
      l_name: lastNameState,
      email: emailState,
      password: passwordState,
    };
    axios
      .post(url, body, {
        headers: {Authorization: `Bearer ${token}`},
      })
      .then(function (response) {
        // updateState({[state]: response.data.data});
        updateLoadingState({[loading]: false});
      })
      .catch(function (error) {
        console.log(980, error);
        updateLoadingState({[loading]: false});
        errorMessage(errorHandler(error));
      });
  };
  useEffect(() => {
    getApiData(MenteeGetUserUrl, 'getChildAccState', 'getChildAccLoading');
    postApiData(MenteeAddUserUrl, 'postChildAccountLoading');
  }, []);
  console.log(144, fullNameState, lastNameState, emailState, passwordState);

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
      <Animatable.View
        // animation="fadeInRight"
        style={styles.setContainer}>
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
                text="First Name"
                style={{
                  marginLeft: wp('7'),
                  color: colorTutor_.TxtColor,
                  marginTop: hp('1'),
                }}
              />
              <LoginInputComp
                // value={fullNameState}
                // onChangeText={fullNameState => {
                //   updateState({fullNameState: fullNameState});
                // }}
                value={fir}
                onChangeText={res => setFir(res)}
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
          ) : (
            getChildAccState.length > 0 && (
              <FlatList
                data={getChildAccState}
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
                        isLoading={getChildAccLoading}
                        tickStatus={false}
                        data={{user: item}}
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
