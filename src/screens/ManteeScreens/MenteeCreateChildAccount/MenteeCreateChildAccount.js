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
import * as Animatable from 'react-native-animatable';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ButtonThemeComp} from '../../../components/ButtonThemeComp/ButtonThemeComp';
import {LoginInputComp} from '../../../components/LoginInputComp/LoginInputComp';
import InformationTextView from '../../../components/InformationTextView/InformationTextView';
import {PendingReqComp} from '../../../components/PendingReqComp/PendingReqComp';
import axios from 'react-native-axios';
import {MenteeAddUserUrl} from '../../../config/Urls';
import {useSelector} from 'react-redux';
import {styles} from './styles';
import {useState, useEffect} from 'react';
import {BackHeaderComponent} from '../../../components/BackHeaderComponent/BackHeaderComponent';
import {
  errorMessage,
  successMessage,
} from '../../../config/NotificationMessage';
import {errorHandler} from '../../../config/helperFunction';
const MenteeCreateChildAccount = () => {
  const {userData, token} = useSelector(state => state.userData);

  const [stateChange, setStateChange] = useState({
    fullNameState: '',
    lastNameState: '',
    emailState: '',
    passwordState: '',
  });
  const updateState = data => setStateChange(prev => ({...prev, ...data}));
  const {fullNameState, lastNameState, emailState, passwordState} = stateChange;
  const [allLoading, setAllLoading] = useState({
    postChildAccountLoading: false,
  });
  const {postChildAccountLoading} = allLoading;
  const updateLoadingState = data => {
    setAllLoading(prev => ({...prev, ...data}));
  };
  const postApiData = (url, loading) => {
    updateLoadingState({[loading]: true});
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (
      emailState != '' &&
      passwordState != '' &&
      reg.test(emailState) === true &&
      passwordState.length >= 8
    ) {
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
          // console.log(73, response.data);
          successMessage(response?.data?.message);
          // updateState({[state]: response.data.data});
          updateLoadingState({[loading]: false});
        })
        .catch(function (error) {
          // console.log(980, error);
          updateLoadingState({[loading]: false});
          errorMessage(errorHandler(error));
        });
    } else {
      updateLoadingState({[loading]: false});

      errorMessage('Please type correct information');
    }
  };
  // console.log(144, fullNameState, lastNameState, emailState, passwordState);

  return (
    <View style={{flex: 1, backgroundColor: colorTutor_.ipalBlue}}>
      <BackHeaderComponent heading={'Setting'} data={true} />
      <ScrollView>
        <Animatable.View animation="fadeInRight" style={styles.setContainer}>
          <View style={{flexDirection: 'row', marginLeft: wp('5')}}>
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
            {/* <View style={styles.createAcc}>
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
          </View> */}

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
                isLoading={postChildAccountLoading}
                TextStyle={{fontSize: hp('2')}}
                text={'Create Account'}
                onPress={() =>
                  postApiData(MenteeAddUserUrl, 'postChildAccountLoading')
                }
              />
            </View>
          </View>
        </Animatable.View>
      </ScrollView>
    </View>
  );
};

export default MenteeCreateChildAccount;
