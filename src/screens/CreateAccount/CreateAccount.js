import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { styles } from './style'
import { LoginInputComp } from '../../components/LoginInputComp/LoginInputComp'
import { color, colorTutor_ } from '../../config/color'
import { ButtonThemeComp } from '../../components/ButtonThemeComp/ButtonThemeComp'
import { globalStyles } from '../../config/globalStyles'
import { Divider, TextInput } from 'react-native-paper'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Octicons from 'react-native-vector-icons/Octicons';
import PickerComponent from '../../components/PickerComponent/PickerComponent'
const CreateAccount = ({ navigation }) => {
  const [tutorValue, setTutorValue] = useState({
    tutorData: {},
    languageData: {},
    CountryData: {},
    CityData: {},
    StateData: {},
    ZipCodeData: {},
    AcademicYearData: {}
  });
  const h = {
    tutorData: "tutorData",
    languageData: "languageData",
    CountryData: "CountryData",
    CityData: "CityData",
    StateData: "StateData",
    ZipCodeData: "ZipCodeData",
    AcademicYearData: "AcademicYearData"
  }
  const updateState1 = data => setTutorValue(() => ({ ...tutorValue, ...data }));
  const [pickerState, setPickerState] = useState({
    tutorData: [
      {
        id: 0,
        label: 'Tutor',
        value: 'Tutor',
        type: "tutorData"
      },
      {
        id: 1,
        label: 'Tweety',
        value: 'Tweety',
        type: "tutorData"
      },
    ],
    languageData: [
      {
        id: 0,
        label: 'English',
        value: 'English',
        type: "languageData"
      },
      {
        id: 1,
        label: 'French',
        value: 'French',
        type: "languageData"
      },
    ],
    CountryData: [
      {
        id: 0,
        label: 'Aus',
        value: 'Aus',
        type: "CountryData"
      },
      {
        id: 1,
        label: 'Eng',
        value: 'Aus',
        type: "CountryData"
      },
    ],
    CityData: [
      {
        id: 0,
        label: 'Malbourne',
        value: 'Malbourne',
        type: "CityData"
      },
      {
        id: 1,
        label: 'NewYork',
        value: 'NewYork',
        type: "CityData"
      },
    ],
    StateData: [
      {
        id: 0,
        label: 'Malbourne',
        value: 'Malbourne',
        type: "StateData"
      },
      {
        id: 1,
        label: 'NewYork',
        value: 'NewYork',
        type: "StateData"
      },
    ],
    ZipCodeData: [
      {
        id: 0,
        label: '075245',
        value: '075245',
        type: "ZipCodeData"
      },
      {
        id: 1,
        label: '35689',
        value: '35689',
        type: "ZipCodeData"
      },
    ],
    AcademicYearData: [
      {
        id: 0,
        label: 'acadmic year',
        value: 'acadmic year',
        type: "AcademicYearData"
      },
      {
        id: 1,
        label: 'acadmic year',
        value: 'acadmic year',
        type: "AcademicYearData"
      },
    ],
  })
  const { AcademicYearData, tutorData, CityData, CountryData, StateData, ZipCodeData, languageData } = pickerState
  const updateState = data => setPickerState(() => ({ ...pickerState, ...data }));
  const getTutorValue = (value, State) => {
    console.log(113, State, value)
    setTutorValue((pre) => ({
      ...tutorValue
      , [State]: value
    }))
  }
  return (
    <>


      <View style={styles.container}>
        <View style={styles.headerView}>
          <Image resizeMode='contain' source={require('../../image/sideLogo.png')} />
          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')} style={{ flexDirection: 'row', alignItems: 'center' }}>

            <Octicons name={'arrow-left'} style={{ textAlign: 'center', marginTop: hp('0.5') }} size={hp('3.5')} />
            <View style={{ alignItems: 'center' }}>
              <Text style={{ ...globalStyles.globalModuletutor2, fontSize: hp('2.6'), justifyContent: 'center', marginLeft: wp('4'), textAlign: 'center' }} >Sign In</Text>
            </View>
          </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingTop: hp('13'), paddingBottom: hp('40'), justifyContent: 'center' }}>
          <View style={styles.twoPickerView}>

            <PickerComponent style={{ width: wp('45'), marginRigh: wp('2') }} text={'Account Type'} data={tutorData} setSelectedValue={(val, state) => getTutorValue(val, state)} h={h.tutorData} selectedValue={tutorValue.tutorData} />
            <PickerComponent style={{ width: wp('45'), marginRigh: wp('2') }} text={'Language'} data={languageData} setSelectedValue={(val, state) => getTutorValue(val, state)} h={h.languageData} selectedValue={tutorValue.languageData} />
          </View>
          <Text style={{ ...styles.accView, marginTop: hp('2') }}>First Name</Text>

          <LoginInputComp secureTextEntry={false} placeholder={'First Name'} style={{ width: wp('95') }} />
          <Text style={{ ...styles.accView, marginTop: hp('2') }}>Last Name</Text>

          <LoginInputComp secureTextEntry={false} placeholder={'Last Name '} style={{ marginBottom: hp('2'), width: wp('95') }} />
          <View style={styles.twoPickerView}>
            <View>

              <Text style={{ ...styles.accView, marginTop: hp('2') }}>First Name</Text>

              <LoginInputComp secureTextEntry={false} placeholder={'First Name'} style={{ width: wp('45') }} />
            </View>
            <View>

              <Text style={{ ...styles.accView, marginTop: hp('2') }}>Last Name</Text>

              <LoginInputComp secureTextEntry={false} placeholder={'Last Name'} style={{ width: wp('45') }} />
            </View>

          </View>
          <View style={styles.twoPickerView}>

            <PickerComponent style={{ width: wp('45'), marginRigh: wp('2') }} text={'Country'} data={CountryData} setSelectedValue={(val, state) => getTutorValue(val, state)} h={h.CountryData} selectedValue={tutorValue.CountryData} />
            <PickerComponent style={{ width: wp('45'), marginRigh: wp('2') }} text={'City'} data={CityData} setSelectedValue={(val, state) => getTutorValue(val, state)} h={h.CityData} selectedValue={tutorValue.CityData} />
          </View>


          <View style={styles.twoPickerView}>
            <PickerComponent style={{ width: wp('45'), marginRigh: wp('2') }} text={'State'} data={StateData} setSelectedValue={(val, state) => getTutorValue(val, state)} h={h.StateData} selectedValue={tutorValue.StateData} />
            <PickerComponent style={{ width: wp('45'), marginRigh: wp('2') }} text={'Zip Code'} data={ZipCodeData} setSelectedValue={(val, state) => getTutorValue(val, state)} h={h.ZipCodeData} selectedValue={tutorValue.ZipCodeData} />
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: hp('2'), justifyContent: 'space-between' }}>
            <Text style={{ ...globalStyles.globalModuletutor, fontSize: hp('2.5'), }}>Academic</Text>
            <View style={styles.btnTxt}>
              <Text style={{ ...globalStyles.globalModuletutor, }}>Add More</Text>
              <Octicons name={'plus'} size={hp('3')} color={'white'} />
            </View>
          </View>
          <View style={styles.twoPickerView}>
            <View style={{ justifyContent: 'center' }}>

              <Text style={{ ...styles.accView }}>Education</Text>

              <LoginInputComp secureTextEntry={false} placeholder={'Education'} style={{ height: wp('15'), width: wp('53') }} />
            </View>

            <PickerComponent style={{ width: wp('35'), height: hp('7'), marginRigh: wp('2') }} text={'AcademicYearData'} data={AcademicYearData} setSelectedValue={(val, state) => getTutorValue(val, state)} h={h.AcademicYearData} selectedValue={tutorValue.AcademicYearData} />
          </View>
          <View style={{ marginVertical: hp('2') }}>

            <Text style={{ ...globalStyles.globalModuletutor, fontSize: hp('2.5'), }}>Bio</Text>
            <LoginInputComp placeholder={'About Yourself'} style={{ height: hp('20'), width: wp('95') }} />
          </View>
          <View style={{ flexDirection: 'row', marginVertical: hp('2') }}>

            <Text style={{ ...globalStyles.globalModuletutor, fontSize: hp('2.5'), }}>Password</Text>
          </View>
          <LoginInputComp secureTextEntry={false} placeholder={'Create Password '} style={{ width: wp('95') }} eyeIconName={'lock'} />
          <LoginInputComp secureTextEntry={true} placeholder={'Confirm Password '} style={{ width: wp('95') }} eyeIconName={'lock'} color={colorTutor_.ipallightGreen} />
          <ButtonThemeComp onPress={()=>navigation.navigate('DashboardScreen')} style={{ ...styles.signBtn, marginTop: hp('2'), width: wp('95'), alignSelf: 'center' }} text={'SIGN IN'} />
        </ScrollView>
        <View style={styles.bottomBar}>
          <TouchableOpacity onPress={() => console.log('dont have you acc')}>
            <Text style={globalStyles.globalModuletutor}>Term of use</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('dont have you acc')} >
            <Text style={globalStyles.globalModuletutor}>Privacy Policy</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>

  )
}

export default CreateAccount
