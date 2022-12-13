import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {View, Text, ScrollView, Platform} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useDispatch, useSelector} from 'react-redux';
import {BackHeaderComponent} from '../../../components/BackHeaderComponent/BackHeaderComponent';
import {ButtonThemeComp} from '../../../components/ButtonThemeComp/ButtonThemeComp';
import {LoginInputComp} from '../../../components/LoginInputComp/LoginInputComp';
import PickerComponent from '../../../components/PickerComponent/PickerComponent';
import {TextComp} from '../../../components/TextComponent';
import {color, colorTutor_} from '../../../config/color';
import {ApiGet} from '../../../config/helperFunction';
import {errorMessage} from '../../../config/NotificationMessage';
import {GetCitiesUrl, GetCountryUrl, GetStatesUrl} from '../../../config/Urls';
import {styles} from './styles';

const SeacrhFilterScreen = ({navigation}) => {
  const [tutorValue, setTutorValue] = useState({
    CountryData: {},
    CityData: {},
    StateData: {},
  });
  const [teacherName, setTeacherName] = useState('');
  const [zipCode, setZipCode] = useState('');
  const h = {
    CountryData: 'CountryData',
    CityData: 'CityData',
    StateData: 'StateData',
  };
  const getTutorValue = (value, State) => {
    setTutorValue(pre => ({
      ...tutorValue,
      [State]: value,
    }));
  };
  const [pickerState, setPickerState] = useState({
    CountryData: [],
    CityData: [],
    StateData: [],
  });
  const getPickerData = (state, url) => {
    ApiGet(url).then(res => {
      if (res.status == 200) {
        updateState({[state]: res.json.data});
      } else {
        errorMessage('Network Request Failed');
      }
    });
  };
  const updateState = data => setPickerState(prev => ({...prev, ...data}));
  const {CityData, CountryData, StateData, ZipCodeData} = pickerState;
  const onPressFilter = () => {
    const allData = {
      name: teacherName,
      countryId: tutorValue.CountryData,
      cityId: tutorValue.CityData,
      stateId: tutorValue.StateData,
      zipCode: zipCode,
    };
    if (
      teacherName != '' ||
      tutorValue.CityData != null ||
      tutorValue.CountryData != null ||
      tutorValue.StateData != null ||
      zipCode != ''
    ) {
      navigation.navigate('TeacherFilterScreen', {item: allData});
    } else {
      errorMessage('Please type for apply filter');
    }
  };
  useEffect(() => {
    getPickerData('CountryData', GetCountryUrl);
  }, []);

  return (
    <View
      style={{
        backgroundColor: colorTutor_.ipalBlue,
        flex: 1,
      }}>
      <BackHeaderComponent heading={'Search Filter'} />
      <ScrollView
        keyboardShouldPersistTaps={'always'}
        contentContainerStyle={{flex: 1}}>
        <TextComp
          text="Search by name"
          style={{marginLeft: wp('3'), marginTop: hp('2')}}
        />
        <LoginInputComp
          value={teacherName}
          Entypo={true}
          eyeIconPress={() => setTeacherName('')}
          eyeIconName={teacherName.length > 0 && 'circle-with-cross'}
          onChangeText={e => {
            setTeacherName(e);
          }}
          style={{alignSelf: 'center', marginBottom: hp('2'), width: wp('95')}}
          placeholder="Search for tutors by name"
        />
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
            // itemStyle={{marginTop: hp('0')}}
            data={CityData}
            setSelectedValue={(val, state) => {
              getTutorValue(val, state);
            }}
            h={h.CityData}
            selectedValue={tutorValue.CityData}
          />
          <LoginInputComp
            style={{
              width: wp('45'),
              marginTop: Platform.OS == 'ios' ? hp('5') : hp('4'),
            }}
            eyeIconPress={() => setZipCode('')}
            Entypo={true}
            eyeIconName={zipCode.length > 0 && 'circle-with-cross'}
            placeholder={'Zip Code'}
            keyboardType="number-pad"
            value={zipCode}
            onChangeText={e => {
              setZipCode(e);
            }}
          />
        </View>
        <ButtonThemeComp
          //   disabled={buttonType}
          onPress={() => onPressFilter()}
          style={{alignSelf: 'center', marginTop: hp('2')}}
          text="Search"
        />
        {/* <ButtonThemeComp
          onPress={() => {
            setTeacherName(''),
              setTutorValue(pre => ({
                ...tutorValue,
                CountryData: {},
                CityData: {},
                StateData: {},
              }));
            setZipCode('');
          }}
          style={{alignSelf: 'center', marginTop: hp('2')}}
          text="Clear Filter"
        /> */}
      </ScrollView>
    </View>
  );
};

export default SeacrhFilterScreen;
