import {
  Image,
  Keyboard,
  Platform,
  ScrollView,
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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import PickerComponent from '../../components/PickerComponent/PickerComponent';
import {ApiGet, errorHandler} from '../../config/helperFunction';
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
  const [mentorPicker, setMentorPicker] = useState([]);
  const [tutorValue, setTutorValue] = useState({
    SchoolData: [],
    YearData: [],
    tutorData: null,
    languageData: null,
    CountryData: null,
    CityData: null,
    StateData: null,
    ZipCodeData: '',
    AcademicYearDatas: [],
    CourcesData: '',
    CategoriesData: '',
    PhoneNumber: '',
    BioData: '',
    Password: '',
    ConfirmPassword: '',
    SchoolName: [],
    SchoolEmail: '',
    CompleteSchoolAddress: '',
    ConfirmPassword: '',
    linkedin_id: 'asdasd',
    linkedin_token: 'asdasd',
    linkedin_avatar: 'asdas',
    linkedin_expires: 'asdasd',
    linkedin_refresh_token: 'asdasd',
    FirstName: '',
    LastName: '',
    Email: '',
    educationTest: [],
  });

  const [EducationData, setEducationData] = useState([]);
  const [AcademicYearData, setAcademicYearData] = useState([]);
  const [className, setClassName] = useState([]);
  const [schoolEmail, setSchoolEmail] = useState([]);
  const [schoolAdd, setSchoolAdd] = useState([]);
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
    AcademicYearDatas: 'AcademicYearDatas',
    CourcesData: 'CourcesData',
    CategoriesData: 'CategoriesData',
    YearData: 'YearData',
    SchoolData: 'SchoolData',
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
    FirstName,
    LastName,
    ZipCodeData,
    AcademicYearDatas,
    Email,
    SchoolName,
    SchoolEmail,
    CompleteSchoolAddress,
  } = tutorValue;
  const [isKeyboardVisible, setKeyboardVisible] = useState(hp('20'));
  const [showBottomBar, setShowBottomBar] = useState(false);
  const updateInputState = data => {
    setTutorValue(() => ({...tutorValue, ...data}));
  };
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
      {
        id: 'Mentor',
        title: 'Mentor',
        value: 'mentorData',
        type: 'mentorData',
      },
      {
        id: 'Mentee',
        title: 'Mentee',
        value: 'MenteeData',
        type: 'MenteeData',
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
    YearData: [
      {
        id: '2000',
        title: '2000',
        value: '2000',
        type: 'YearData',
      },
      {
        id: '2001',
        title: '2001',
        value: '2001',
        type: 'YearData',
      },
      {
        id: '2002',
        title: '2002',
        value: '2002',
        type: 'YearData',
      },
      {
        id: '2003',
        title: '2003',
        value: '2003',
        type: 'YearData',
      },
      {
        id: '2004',
        title: '2004',
        value: '2004',
        type: 'YearData',
      },
      {
        id: '2005',
        title: '2005',
        value: '2005',
        type: 'YearData',
      },
      {
        id: '2006',
        title: '2006',
        value: '2006',
        type: 'YearData',
      },
      {
        id: '2007',
        title: '2007',
        value: '2007',
        type: 'YearData',
      },
      {
        id: '2008',
        title: '2008',
        value: '2008',
        type: 'YearData',
      },
      {
        id: '2009',
        title: '2009',
        value: '2009',
        type: 'YearData',
      },
      {
        id: '2010',
        title: '2010',
        value: '2010',
        type: 'YearData',
      },
      {
        id: '2011',
        title: '2011',
        value: '2011',
        type: 'YearData',
      },
      {
        id: '2012',
        title: '2012',
        value: '2012',
        type: 'YearData',
      },
      {
        id: '2013',
        title: '2013',
        value: '2013',
        type: 'YearData',
      },
      {
        id: '2014',
        title: '2014',
        value: '2014',
        type: 'YearData',
      },
      {
        id: '2015',
        title: '2015',
        value: '2015',
        type: 'YearData',
      },
      {
        id: '2016',
        title: '2016',
        value: '2016',
        type: 'YearData',
      },
      {
        id: '2017',
        title: '2017',
        value: '2017',
        type: 'YearData',
      },
      {
        id: '2018',
        title: '2018',
        value: '2018',
        type: 'YearData',
      },
      {
        id: '2019',
        title: '2019',
        value: '2019',
        type: 'YearData',
      },
      {
        id: '2020',
        title: '2020',
        value: '2020',
        type: 'YearData',
      },
      {
        id: '2021',
        title: '2021',
        value: '2021',
        type: 'YearData',
      },
      {
        id: '2022',
        title: '2022',
        value: '2022',
        type: 'YearData',
      },
    ],
    SchoolData: [
      {
        id: 'Sec.School',
        title: 'Sec.School',
        value: 'Sec.School',
        type: 'SchoolData',
      },
      {
        id: 'High School',
        title: 'High School',
        value: 'High School',
        type: 'SchoolData',
      },
      {
        id: 'College',
        title: 'College',
        value: 'College',
        type: 'SchoolData',
      },
      {
        id: 'Undergraduate',
        title: 'Undergraduate',
        value: 'Undergraduate',
        type: 'SchoolData',
      },
      {
        id: 'Masters',
        title: 'Masters',
        value: 'Masters',
        type: 'SchoolData',
      },
      {
        id: 'PHD',
        title: 'PHD',
        value: 'PHD',
        type: 'SchoolData',
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
    YearData,
    SchoolData,
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
    console.log(
      193,
      AddField,
      EducationData,
      AcademicYearData,
      className,
      schoolAdd,
      schoolEmail,
    );
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
        institution_name: EducationData,
        academic_year: AcademicYearData,
        linkedin_id: linkedin_id,
        linkedin_token: linkedin_token,
        linkedin_avatar: linkedin_avatar,
        linkedin_expires: linkedin_expires,
        linkedin_refresh_token: linkedin_refresh_token,
        bio: BioData,
      };
      axios
        .post(SignUpUrl, body)
        .then(function (res) {
          dispatch({
            type: types.LoginType,
            payload: res.data.data,
          });
          setIsloading(false);
        })
        .catch(function (error) {
          setIsloading(false);
          errorMessage(errorHandler(error));
        });
    } else {
      setIsloading(false);
      errorMessage('Please complete all fields');
    }
  };
  const removeFeild = i => {
    EducationData.splice(i, 1);
    AddField.splice(i, 1);
    AcademicYearData.splice(i, 1);
    setDummy(dummy - 1);
  };
  useEffect(() => {
    getPickerData('CourcesData', GetCourcesUrl);
    getPickerData('CountryData', GetCountryUrl);
    getPickerData('CategoriesData', GetCategoriesUrl);
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(hp('60'));
        setShowBottomBar(true);
        // or some other action
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(hp('20'));
        setShowBottomBar(false);
        // or some other action
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);
  const allFieldsEmpty = () => {
    setAddField(['']);
    setEducationData([]);
    setClassName([]);
    setAcademicYearData([]);
    setSchoolAdd([]);
    setSchoolEmail([]);
  };
  const checkAccountType = () => {
    return tutorValue.tutorData == 'Mentor' || tutorValue.tutorData == 'Mentee'
      ? true
      : false;
  };
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
            paddingTop: hp('14'),
            paddingBottom: isKeyboardVisible,
            justifyContent: 'center',
          }}>
          <View style={styles.twoPickerView}>
            <PickerComponent
              style={{width: wp('45'), marginRigh: wp('2')}}
              text={'Account Type'}
              data={tutorData}
              setSelectedValue={(val, state) => {
                getTutorValue(val, state), allFieldsEmpty();
              }}
              h={h.tutorData}
              selectedValue={tutorValue.tutorData}
            />
            {tutorValue.tutorData == 'teacher' ? (
              <PickerComponent
                style={{width: wp('45'), marginRigh: wp('2')}}
                text={'Courses'}
                data={CourcesData}
                setSelectedValue={(val, state) => getTutorValue(val, state)}
                h={h.CourcesData}
                selectedValue={tutorValue.CourcesData}
              />
            ) : tutorValue.tutorData == 'student' ||
              tutorValue.tutorData == 'Mentor' ? (
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
            style={{marginBottom: hp('2'), width: wp('95'), borderRaduis: 30}}
            onChangeText={PhoneNumber =>
              updateFinalState({PhoneNumber: PhoneNumber})
            }
            value={PhoneNumber}
            keyboardType="number-pad"
          />
          <View style={styles.twoPickerView}>
            <PickerComponent
              style={{
                width: wp('45'),
                overFlow: 'hiddden',
                borderRaduis: 30,
              }}
              text={'Language'}
              data={languageData}
              setSelectedValue={(val, state) => getTutorValue(val, state)}
              h={h.languageData}
              selectedValue={tutorValue.languageData}
            />
            <View>
              <TouchableOpacity style={styles.linkButtonView}>
                <Entypo
                  name="linkedin-with-circle"
                  color={'white'}
                  size={hp('3')}
                />
                <TextComp text="LinkedIn" style={styles.linkButtonText} />
              </TouchableOpacity>
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
            <View style={{marginTop: Platform.OS == 'ios' ? hp('2') : hp('0')}}>
              <Text style={{...styles.accView}}>Zip Code</Text>
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
                color: 'black',
                fontWeight: 'bold',
              }}>
              Academic
            </Text>
            <TouchableOpacity
              onPress={() => {
                if (AddField.length <= 6) {
                  AddField.push('');
                  EducationData.push('');
                  className.push('');
                  AcademicYearData.push('');
                  setDummy(dummy + 1);
                }
              }}
              style={styles.btnTxt}>
              <Text
                style={{...globalStyles.globalModuletutor, fontWeight: 'bold'}}>
                Add More
              </Text>
              <Octicons name={'plus'} size={hp('3')} color={'white'} />
            </TouchableOpacity>
          </View>

          {AddField.length > 0 &&
            AddField.map((res, i) => {
              return (
                <>
                  <View
                    style={{...styles.twoPickerView, marginBottom: hp('0')}}>
                    <View>
                      <Text style={{...styles.accView, marginTop: hp('2')}}>
                        Education
                      </Text>
                      <LoginInputComp
                        style={{width: wp('45')}}
                        placeholder={'School Name'}
                        secureTextEntry={false}
                        value={EducationData}
                        onChangeText={e => {
                          EducationData[i] = e;
                        }}
                      />
                    </View>
                    {tutorValue.tutorData != null && (
                      <View style={styles.pickerView}>
                        <PickerComponent
                          style={{
                            width: wp('40'),
                            backgroundColor: 'transparent',
                          }}
                          text={'Classes'}
                          data={checkAccountType() ? SchoolData : YearData}
                          setSelectedValue={(val, state) => {
                            checkAccountType()
                              ? (className[i] = val)
                              : (AcademicYearData[i] = val);
                            setDummy(dummy + 1);
                          }}
                          h={checkAccountType() ? h.SchoolData : h.YearData}
                          selectedValue={
                            checkAccountType()
                              ? className[i]
                              : AcademicYearData[i]
                          }
                        />
                      </View>
                    )}
                  </View>
                  <LoginInputComp
                    style={{width: wp('95')}}
                    placeholder={'School Email'}
                    secureTextEntry={false}
                    value={schoolEmail}
                    onChangeText={e => {
                      schoolEmail[i] = e;
                    }}
                  />

                  <LoginInputComp
                    inputStyle={{
                      alignSelf: 'flex-start',
                      paddingTop: hp('2'),
                    }}
                    style={{width: wp('95'), height: hp('15')}}
                    placeholder={'Complete School Address'}
                    secureTextEntry={false}
                    value={schoolAdd}
                    onChangeText={e => {
                      schoolAdd[i] = e;
                    }}
                  />
                </>
              );
            })}
          <View style={{marginVertical: hp('2')}}>
            <Text
              style={{
                ...globalStyles.globalModuletutor,
                fontSize: hp('1.7'),
                color: 'black',
              }}>
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
              style={{
                ...globalStyles.globalModuletutor,
                fontSize: hp('1.7'),
                color: 'black',
              }}>
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
            style={{
              ...styles.signBtn,
              marginTop: hp('2'),
              width: wp('95'),
              alignSelf: 'center',
            }}
            TextStyle={{fontSize: hp('2')}}
            text={'Create Account'}
          />
        </ScrollView>
        {/* <LinkedInModal
          clientID={'78f8s5y9yzttcn'}
          clientSecret={'nt4zisEnfiqVpTA2'}
          redirectUri="hhttp://cheryl-lee.test/callback/linkedin"
          onSuccess={token => {
            let name_surname = 'https://api.linkedin.com/v2/me';
            let user_mail =
              'https://api.linkedin.com/v2/clientAwareMemberHandles?q=members&projection=(elements*(primary,type,handle~))';
            let namereq = new XMLHttpRequest();
            namereq.open('GET', user_mail);
            namereq.setRequestHeader(
              'Authorization',
              'Bearer ' + token.access_token,
            );
            namereq.onreadystatechange = function () {
              if (namereq.readyState === 4) {
                console.log('Text:', namereq.responseText);
              }
            };
            namereq.send();
          }}
        /> */}
        {!showBottomBar && (
          <View style={{...styles.bottomBar}}>
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
        )}
      </View>
    </>
  );
};

export default CreateAccount;
