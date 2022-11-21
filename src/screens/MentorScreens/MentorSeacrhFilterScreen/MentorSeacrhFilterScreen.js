import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useDispatch, useSelector} from 'react-redux';
import {BackHeaderComponent} from '../../../components/BackHeaderComponent/BackHeaderComponent';
import {ButtonThemeComp} from '../../../components/ButtonThemeComp/ButtonThemeComp';
import {HeaderComponent} from '../../../components/HeaderComponent/HeaderComponent';
import {LoginInputComp} from '../../../components/LoginInputComp/LoginInputComp';
import PickerComponent from '../../../components/PickerComponent/PickerComponent';
import {TextComp} from '../../../components/TextComponent';
import {color, colorTutor_} from '../../../config/color';
import {ApiGet, errorHandler} from '../../../config/helperFunction';
import {errorMessage} from '../../../config/NotificationMessage';
import {
  GetCategoriesUrl,
  GetCitiesUrl,
  GetCountryUrl,
  GetStatesUrl,
  GetTeachreClasses,
  MentorFilterMenteeUrl,
} from '../../../config/Urls';
import types from '../../../Redux/types';
import {styles} from './styles';
import axios from 'react-native-axios';

const MentorSeacrhFilterScreen = ({navigation}) => {
  const [pickerState, setPickerState] = useState({
    CountryData: {},
    CityData: {},
    StateData: {},
  });

  const [tutorValue, setTutorValue] = useState({
    CountryData: {},
    CityData: {},
    StateData: {},
  });
  const [fullName, setFullName] = useState('');
  const [zipCode, setZipCode] = useState('');
  const h = {
    CountryData: 'CountryData',
    CityData: 'CityData',
    StateData: 'StateData',
    GetCategory: 'GetCategory',
  };
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
  const getCategory = (state, url) => {
    ApiGet(url).then(res => {
      if (res.status == 200) {
        updateState({[state]: res.json.data});
      } else {
        errorMessage('Network Request Failed');
      }
    });
  };
  const updateState = data => setPickerState(prev => ({...prev, ...data}));
  const {CityData, CountryData, StateData, ZipCodeDatam, GetCategory} =
    pickerState;

  const onPressFilter = () => {
    const allData = {
      name: fullName,
      countryId: tutorValue.CountryData,
      cityId: tutorValue.CityData,
      stateId: tutorValue.StateData,
      zipCode: zipCode,
    };
    if (
      fullName != '' ||
      fullName != null ||
      tutorValue.CityData != null ||
      tutorValue.CountryData != null ||
      tutorValue.StateData != null ||
      zipCode != ''
    ) {
      navigation.navigate('MenFilterScreen', {item: allData});
    } else {
      errorMessage('Please type for apply filter');
    }
  };

  useEffect(() => {
    getPickerData('CountryData', GetCountryUrl);
    getCategory('GetCategory', GetCategoriesUrl);
  }, []);
  return (
    <View
      style={{
        backgroundColor: colorTutor_.ipalBlue,
        flex: 1,
      }}>
      <BackHeaderComponent heading={'Search Filter'} />
      <ScrollView contentContainerStyle={{flex: 1}}>
        <LoginInputComp
          value={fullName}
          onChangeText={e => {
            setFullName(e);
          }}
          style={{alignSelf: 'center', marginBottom: hp('2'), width: wp('95')}}
          placeholder="Full Name"
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
            style={{
              width: wp('45'),
              marginRight: wp('2'),
            }}
            text={'City'}
            data={CityData}
            setSelectedValue={(val, state) => {
              getTutorValue(val, state);
            }}
            h={h.CityData}
            selectedValue={tutorValue.CityData}
          />
          <LoginInputComp
            style={{width: wp('45')}}
            placeholder={'Zip Code'}
            keyboardType="number-pad"
            value={zipCode}
            onChangeText={e => {
              setZipCode(e);
            }}
          />
        </View>
        <ButtonThemeComp
          onPress={() => onPressFilter()}
          style={{alignSelf: 'center', marginTop: hp('2')}}
          text="Search"
        />
        <ButtonThemeComp
          onPress={() => {
            setFullName(''),
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
        />
      </ScrollView>
    </View>
  );
};

export default MentorSeacrhFilterScreen;
