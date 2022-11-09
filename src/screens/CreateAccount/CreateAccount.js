import {
  Image,
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './style';
import {LoginInputComp} from '../../components/LoginInputComp/LoginInputComp';
import {color, colorTutor_} from '../../config/color';
import {ButtonThemeComp} from '../../components/ButtonThemeComp/ButtonThemeComp';
import {globalStyles} from '../../config/globalStyles';
import {Divider, TextInput} from 'react-native-paper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Octicons from 'react-native-vector-icons/Octicons';
import Entypo from 'react-native-vector-icons/Entypo';
import PickerComponent from '../../components/PickerComponent/PickerComponent';
import {ApiGet, ApiPost, errorHandler} from '../../config/helperFunction';
import {
  GetCategoriesUrl,
  GetCitiesUrl,
  GetCountryUrl,
  GetCourcesUrl,
  GetStatesUrl,
  SignUpUrl,
} from '../../config/Urls';
import {errorMessage} from '../../config/NotificationMessage';
import {TextComp} from '../../components/TextComponent';
import {useDispatch} from 'react-redux';
import types from '../../Redux/types';
import axios from 'react-native-axios';

const CreateAccount = ({navigation}) => {
  const dispatch = useDispatch();
  const [tutorValue, setTutorValue] = useState({
    tutorData: null,
    languageData: null,
    CountryData: null,
    CityData: null,
    StateData: null,
    ZipCodeData: '',
    AcademicYearData: [],
    CourcesData: '',
    CategoriesData: '',
    PhoneNumber: '',
    BioData: '',
    Password: '',
    ConfirmPassword: '',
    linkedin_id: 'asdasd',
    linkedin_token: 'asdasd',
    linkedin_avatar: 'asdas',
    linkedin_expires: 'asdasd',
    linkedin_refresh_token: 'asdasd',
    // EducationData: [],
    FirstName: '',
    LastName: '',
    Email: '',
    educationTest: [],
  });

  const [EducationData, setEducationData] = useState([]);
  const [AddField, setAddField] = useState(['']);
  const [dummy, setDummy] = useState(1);
  const [isloading, setIsloading] = useState(false);
  const h = {
    tutorData: 'tutorData',
    languageData: 'languageData',
    CountryData: 'CountryData',
    CityData: 'CityData',
    StateData: 'StateData',
    ZipCodeData: 'ZipCodeData',
    AcademicYearData: 'AcademicYearData',
    CourcesData: 'CourcesData',
    CategoriesData: 'CategoriesData',
  };
  const {
    PhoneNumber,
    BioData,
    Password,
    ConfirmPassword,
    linkedin_id,
    linkedin_token,
    linkedin_avatar,
    linkedin_expires,
    linkedin_refresh_token,
    // EducationData,
    FirstName,
    LastName,
    ZipCodeData,
    AcademicYearData,
    Email,
  } = tutorValue;
  const [isKeyboardVisible, setKeyboardVisible] = useState(hp('20'));
  const updateInputState = data =>
    setTutorValue(() => ({...tutorValue, ...data}));
  const [pickerState, setPickerState] = useState({
    tutorData: [
      {
        id: 'teacher',
        title: 'Tutor',
        value: 'tutorData',
        type: 'tutorData',
      },
      {
        id: 'student',
        title: 'Tweety',
        value: 'tweetyData',
        type: 'tweetyData',
      },
    ],
    languageData: [
      {
        id: 0,
        title: 'English',
        value: 'English',
        type: 'languageData',
      },
      {
        id: 1,
        title: 'French',
        value: 'French',
        type: 'languageData',
      },
    ],
    CountryData: [],
    CityData: [],
    StateData: [],
    CourcesData: [],
    CategoriesData: [],
  });
  const {
    tutorData,
    CityData,
    CountryData,
    StateData,
    languageData,
    CourcesData,
    CategoriesData,
  } = pickerState;
  const updateState = data => setPickerState(prev => ({...prev, ...data}));
  const updateFinalState = data => setTutorValue(prev => ({...prev, ...data}));

  const getTutorValue = (value, State) => {
    setTutorValue(pre => ({
      ...tutorValue,
      [State]: value,
    }));
  };
  const getPickerData = (state, url) => {
    ApiGet(url).then(res => {
      if (res.status == 200) {
        updateState({[state]: res.json.data});
      } else {
        errorMessage('Network Request Failed');
      }
    });
  };
  const signUpFun = () => {
    setIsloading(true);
    const {
      languageData,
      CountryData,
      CourcesData,
      StateData,
      CityData,
      tutorData,
      linkedin_avatar,
      linkedin_expires,
      linkedin_id,
      linkedin_refresh_token,
      linkedin_token,
    } = tutorValue;
    if (
      tutorData != null &&
      CourcesData != null &&
      FirstName != '' &&
      LastName != '' &&
      PhoneNumber != '' &&
      ZipCodeData != '' &&
      CountryData != null &&
      StateData != null &&
      CityData != null &&
      languageData != null &&
      EducationData != '' &&
      AcademicYearData != '' &&
      BioData != '' &&
      Password != '' &&
      Password.length >= 8 &&
      ConfirmPassword != '' &&
      Email != ''
    ) {
      let body = {
        user_type: tutorData,
        f_name: FirstName,
        l_name: LastName,
        language: languageData,
        email: Email,
        password: Password,
        password_confirmation: ConfirmPassword,
        country_id: CountryData,
        state_id: StateData,
        city_id: CityData,
        zip_code: ZipCodeData,
        course_id: CourcesData,
        phone_number: PhoneNumber,
        institution_name: ['test instituion name'],
        academic_year: ['test year'],
        linkedin_id: linkedin_id,
        linkedin_token: linkedin_token,
        linkedin_avatar: linkedin_avatar,
        linkedin_expires: linkedin_expires,
        linkedin_refresh_token: linkedin_refresh_token,
        bio: BioData,
      };
      console.log(221, body);
      // ApiPost(SignUpUrl, body).then(res => {
      //   if (res.status == 200) {
      //     setIsloading(false);
      //     dispatch({
      //       type: types.LoginType,
      //       payload: res.json.data,
      //     });
      //   } else {
      //     setIsloading(false);
      //     console.log(203, res.json);
      //   }
      // });
      axios
        .post(SignUpUrl, body)
        .then(function (res) {
          console.log(res.data);
          dispatch({
            type: types.LoginType,
            payload: res.data.data,
          });
          setIsloading(false);
        })
        .catch(function (error) {
          setIsloading(false);
          console.log(246, error);
          // errorMessage(errorHandler(error));
          // console.log(errorHandler(error));
        });
    } else {
      setIsloading(false);
      errorMessage('Please complete all fields');
    }
  };

  const upadateAcademic = (value, state, i) => {
    EducationData[i] = value;
  };
  useEffect(() => {
    getPickerData('CourcesData', GetCourcesUrl);
    getPickerData('CountryData', GetCountryUrl);
    getPickerData('CategoriesData', GetCategoriesUrl);
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(hp('60')); // or some other action
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(hp('20')); // or some other action
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);
  return (
    <>
      <View style={styles.container}>
        <View style={styles.headerView}>
          <Image
            resizeMode="contain"
            source={require('../../image/sideLogo.png')}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate('LoginScreen')}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Octicons
              name={'arrow-left'}
              style={{textAlign: 'center', marginTop: hp('0.5')}}
              size={hp('3.5')}
            />
            <View style={{alignItems: 'center'}}>
              <Text
                style={{
                  ...globalStyles.globalModuletutor2,
                  fontSize: hp('2.6'),
                  justifyContent: 'center',
                  marginLeft: wp('4'),
                  textAlign: 'center',
                }}>
                Sign In
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingTop: hp('13'),
            paddingBottom: isKeyboardVisible,
            justifyContent: 'center',
          }}>
          <View style={styles.twoPickerView}>
            <PickerComponent
              style={{width: wp('45'), marginRigh: wp('2')}}
              text={'Account Type'}
              data={tutorData}
              setSelectedValue={(val, state) => getTutorValue(val, state)}
              h={h.tutorData}
              selectedValue={tutorValue.tutorData}
            />
            {tutorValue.tutorData == 'teacher' ? (
              <PickerComponent
                style={{width: wp('45'), marginRigh: wp('2')}}
                text={'Cources'}
                data={CourcesData}
                setSelectedValue={(val, state) => getTutorValue(val, state)}
                h={h.CourcesData}
                selectedValue={tutorValue.CourcesData}
              />
            ) : tutorValue.tutorData == 1 ? (
              <PickerComponent
                style={{width: wp('45'), marginRigh: wp('2')}}
                text={'Category'}
                data={CategoriesData}
                setSelectedValue={(val, state) => getTutorValue(val, state)}
                h={h.CategoriesData}
                selectedValue={tutorValue.CategoriesData}
              />
            ) : null}
          </View>
          <Text style={{...styles.accView, marginTop: hp('2')}}>
            First Name
          </Text>

          <LoginInputComp
            secureTextEntry={false}
            placeholder={'First Name'}
            style={{width: wp('95')}}
            value={FirstName}
            onChangeText={FirstName => updateFinalState({FirstName: FirstName})}
          />
          <Text style={{...styles.accView, marginTop: hp('2')}}>Last Name</Text>
          <LoginInputComp
            secureTextEntry={false}
            placeholder={'Last Name'}
            value={LastName}
            onChangeText={LastName => updateFinalState({LastName: LastName})}
            style={{marginBottom: hp('2'), width: wp('95')}}
          />
          <Text style={{...styles.accView, marginTop: hp('2')}}>
            Email Address
          </Text>
          <LoginInputComp
            secureTextEntry={false}
            placeholder={'Email Address'}
            value={Email}
            onChangeText={Email => updateFinalState({Email: Email})}
            style={{marginBottom: hp('2'), width: wp('95')}}
          />
          <Text style={{...styles.accView, marginTop: hp('2')}}>
            Phone Number
          </Text>
          <LoginInputComp
            secureTextEntry={false}
            placeholder={'Phone Number'}
            style={{marginBottom: hp('2'), width: wp('95')}}
            onChangeText={PhoneNumber =>
              updateFinalState({PhoneNumber: PhoneNumber})
            }
            value={PhoneNumber}
            keyboardType="number-pad"
          />
          <View style={styles.twoPickerView}>
            <View>
              <Text style={{...styles.accView, marginTop: hp('2')}}>
                Zip Code
              </Text>
              <LoginInputComp
                secureTextEntry={false}
                placeholder={'Zip Code'}
                keyboardType="number-pad"
                style={{width: wp('45')}}
                value={ZipCodeData}
                onChangeText={ZipCodeData =>
                  updateFinalState({ZipCodeData: ZipCodeData})
                }
              />
            </View>
            <View>
              <TouchableOpacity style={styles.linkButtonView}>
                <Entypo
                  name="linkedin-with-circle"
                  color={'white'}
                  size={hp('3')}
                />
                <TextComp text="LinkedIn" style={styles.linkButtonText} />
              </TouchableOpacity>
              {/* <Text style={{...styles.accView, marginTop: hp('2')}}>
                Last Name
              </Text>

              <LoginInputComp
                secureTextEntry={false}
                placeholder={'Last Name'}
                style={{width: wp('45')}}
              /> */}
            </View>
          </View>
          <View style={styles.twoPickerView}>
            <PickerComponent
              style={{width: wp('45'), marginRigh: wp('2')}}
              text={'Country'}
              data={CountryData}
              setSelectedValue={(val, state) => {
                getTutorValue(val, state),
                  getPickerData('StateData', GetStatesUrl + val);
              }}
              h={h.CountryData}
              selectedValue={tutorValue.CountryData}
            />
            <PickerComponent
              style={{width: wp('45'), marginRigh: wp('2')}}
              text={'State'}
              data={StateData}
              setSelectedValue={(val, state) => {
                getTutorValue(val, state),
                  getPickerData(
                    'CityData',
                    GetCitiesUrl + tutorValue.CountryData + '/' + val,
                  );
              }}
              h={h.StateData}
              selectedValue={tutorValue.StateData}
            />
          </View>

          <View style={styles.twoPickerView}>
            <PickerComponent
              style={{width: wp('45'), marginRigh: wp('2')}}
              text={'City'}
              data={CityData}
              setSelectedValue={(val, state) => getTutorValue(val, state)}
              h={h.CityData}
              selectedValue={tutorValue.CityData}
            />
            <PickerComponent
              style={{width: wp('45'), marginRigh: wp('2')}}
              text={'Language'}
              data={languageData}
              setSelectedValue={(val, state) => getTutorValue(val, state)}
              h={h.languageData}
              selectedValue={tutorValue.languageData}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: hp('2'),
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                ...globalStyles.globalModuletutor,
                fontSize: hp('2.5'),
                color: 'white',
              }}>
              Academic
            </Text>
            <TouchableOpacity
              onPress={() => {
                AddField.push('');
                setDummy(dummy + 1);
              }}
              style={styles.btnTxt}>
              <Text style={{...globalStyles.globalModuletutor}}>Add More</Text>
              <Octicons name={'plus'} size={hp('3')} color={'white'} />
            </TouchableOpacity>
          </View>
          {AddField.length > 0 &&
            AddField.map((res, i) => {
              return (
                <View style={styles.twoPickerView}>
                  <View>
                    <Text style={{...styles.accView, marginTop: hp('2')}}>
                      Education
                    </Text>
                    <LoginInputComp
                      secureTextEntry={false}
                      keyboardType="number-pad"
                      style={{width: wp('45')}}
                      placeholder={'Education'}
                      value={EducationData[i]}
                      onChangeText={e => {
                        EducationData[i] = e;
                      }}
                    />
                  </View>
                  <View>
                    <Text style={{...styles.accView, marginTop: hp('2')}}>
                      Academic Year
                    </Text>
                    <LoginInputComp
                      secureTextEntry={false}
                      keyboardType="number-pad"
                      style={{width: wp('45')}}
                      placeholder={'Academic Year'}
                      value={AcademicYearData}
                      onChangeText={e => {
                        AcademicYearData[i] = e;
                      }}
                    />
                  </View>
                </View>
              );
            })}
          <View style={{marginVertical: hp('2')}}>
            <Text
              style={{...globalStyles.globalModuletutor, fontSize: hp('1.7')}}>
              Bio
            </Text>
            <LoginInputComp
              placeholder={'About Yourself'}
              style={{height: hp('20'), width: wp('95')}}
              value={BioData}
              onChangeText={BioData => updateFinalState({BioData: BioData})}
              multiline={true}
              inputStyle={{
                alignSelf: 'flex-start',
                paddingTop: hp('2'),
              }}
            />
          </View>
          <View style={{flexDirection: 'row', marginVertical: hp('2')}}>
            <Text
              style={{...globalStyles.globalModuletutor, fontSize: hp('1.7')}}>
              Password
            </Text>
          </View>
          <LoginInputComp
            secureTextEntry={false}
            placeholder={'Create Password'}
            value={Password}
            onChangeText={Password => updateFinalState({Password: Password})}
            style={{width: wp('95')}}
            eyeIconName={'lock'}
          />
          <LoginInputComp
            secureTextEntry={false}
            placeholder={'Confirm Password'}
            value={ConfirmPassword}
            onChangeText={ConfirmPassword =>
              updateFinalState({ConfirmPassword: ConfirmPassword})
            }
            style={{width: wp('95')}}
            eyeIconName={'lock'}
            color={colorTutor_.ipallightGreen}
          />
          <ButtonThemeComp
            onPress={() => signUpFun()}
            isLoading={isloading}
            // onPress={() => navigation.navigate('TuteeDashboardScreen')}
            style={{
              ...styles.signBtn,
              marginTop: hp('2'),
              width: wp('95'),
              alignSelf: 'center',
            }}
            TextStyle={{fontSize: hp('2')}}
            text={'Create Account'}
            onPress={() => navigation.navigate('TuteeDashboardScreen')}
          />
        </ScrollView>
        <View style={styles.bottomBar}>
          <TouchableOpacity onPress={() => console.log('dont have you acc')}>
            <Text style={{...globalStyles.globalModuletutor, color: 'white'}}>
              Term of use
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('dont have you acc')}>
            <Text style={{...globalStyles.globalModuletutor, color: 'white'}}>
              Privacy Policy
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default CreateAccount;
