import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  Text,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Button,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {color, colorTutor_, MentorColor} from '../../../config/color';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {SearchbarHeader} from '../../../components/SearchBarHeaderComp/SearchbarHeader';
import {TextComp} from '../../../components/TextComponent';
import axios from 'react-native-axios';
import moment from 'moment/moment';
import {useDispatch, useSelector} from 'react-redux';
import HorizontalDividerComp from '../../../components/HorizontalDividerComp/HorizontalDividerComp';
import {ButtonThemeComp} from '../../../components/ButtonThemeComp/ButtonThemeComp';
import {BackHeaderComponent} from '../../../components/BackHeaderComponent/BackHeaderComponent';
import {
  GetMenteementorClassesUrl,
  GetMenteeTimeslot,
  MentorPaymentUrl,
} from '../../../config/Urls';
import {SkypeIndicator} from 'react-native-indicators';
import {
  errorMessage,
  successMessage,
} from '../../../config/NotificationMessage';
import {errorHandler} from '../../../config/helperFunction';
import InformationTextView from '../../../components/InformationTextView/InformationTextView';
import {styles} from './styles';

const MentorPaymentCardScreen = ({route}) => {
  const {userData, token} = useSelector(state => state.userData);
  const items = route.params;
  // console.log(48, items);
  const handleCardNumber = text => {
    let formattedText = text.split(' ').join('');
    if (formattedText.length > 0) {
      formattedText = formattedText.match(new RegExp('.{1,4}', 'g')).join(' ');
    }
    updateState({number: formattedText});
    // setnumbervlaue({ number: formattedText });
    return formattedText;
  };
  const [numbervalue, setnumbervlaue] = useState({
    name: '',
    number: '',
    MM: '',
    YY: '',
    cvc: '',
    isLoading: false,
  });
  const updateState = data => setnumbervlaue(() => ({...numbervalue, ...data}));
  const {name, number, MM, YY, cvc, isLoading} = numbervalue;

  // console.log(156, name, number, MM, YY, cvc);

  hitStripeAPi = () => {
    updateState({isLoading: true});
    var cardno =
      /^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/;
    var today, someday;
    today = new Date();
    someday = new Date();
    someday.setFullYear(YY, MM, 1);

    if (
      number.replace(/\s/g, '').length == 16 &&
      someday < today &&
      number != null &&
      number != '' &&
      MM != null &&
      MM != '' &&
      YY != null &&
      YY != '' &&
      cvc != null &&
      cvc != ''
    ) {
      var data = new FormData();
      data.append('plan_id', items?.id);
      data.append('cardNumber', number.replace(/\s/g, ''));
      data.append('exp_month', MM);
      data.append('exp_year', YY);
      data.append('cvc', cvc);

      axios
        .post(
          MentorPaymentUrl,
          // userData.user_type == 'mentee'
          //   ? MenteeUpdateProfileUrl
          //   : MentorUpdateProfileUrl,
          data,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'multipart/form-data',
            },
          },
        )
        .then(res => {
          updateState({isLoading: false});
          // dispatch({
          //   type: types.UpdateProfile,
          //   payload: {user: res.data.data},
          // });
          successMessage('Your Payment Successful Proceed');
        })
        .catch(function (error) {
          updateState({isLoading: false});
          errorMessage(errorHandler(error));
        });
    } else {
      errorMessage('Please type correct information');
    }
  };
  return (
    <View style={styles.mainView}>
      <BackHeaderComponent heading={'Mentor Payment Card'} />
      <View style={{...styles.classDashBoard, marginTop: hp('3')}}>
        <TextComp
          style={{color: MentorColor.MentorThemeFirst}}
          text="Add Payment Methods"
        />
        <HorizontalDividerComp
          width={'53'}
          color={MentorColor.MentorThemeFirst}
        />
      </View>
      <View style={styles.textheading}>
        <TextComp
          style={{color: MentorColor.MentorThemeFirst, fontSize: hp('2.5')}}
          text="Add Credit or Debit Card"
        />
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'position' : 'padding'}>
        <View style={styles.modalbottamView}>
          {/* <View style={styles.stripecardnumber}>
            <TextInput
              style={styles.childcardname}
              placeholder="Enter Your Full Name"
              placeholderTextColor="grey"
              value={name}
              onChangeText={fname => updateState({name: fname})}
            />
          </View> */}

            <View style={styles.stripecardnumber}>
              <TextInput
                style={styles.childcardname}
                placeholder="Enter Card Number"
                maxLength={19}
                keyboardType={'numeric'}
                placeholderTextColor="grey"
                value={number}
                onChangeText={num => handleCardNumber(num)}
              />
            </View>
            <View
              style={{flexDirection: 'row', margin: 10, marginTop: hp('4')}}>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.childcard}>
                  <TextInput
                    style={{fontSize: hp('2'), color:color.black}}
                    placeholder="MM"
                    maxLength={2}
                    placeholderTextColor="grey"
                    keyboardType={'numeric'}
                    value={MM}
                    onChangeText={month => updateState({MM: month})}
                  />
                </View>
                <View style={styles.childcard}>
                  <TextInput
                    style={{flex: 1, fontSize: hp('2'), color:color.black}}
                    placeholder="YY"
                    maxLength={2}
                    placeholderTextColor="grey"
                    keyboardType={'numeric'}
                    value={YY}
                    onChangeText={year => updateState({YY: year})}
                  />
                </View>
              </View>
              <View style={styles.childcvc}>
                <TextInput
                  style={{flex: 1, fontSize: hp('2'), color:color.black}}
                  placeholder="CVC"
                  maxLength={4}
                  keyboardType={'numeric'}
                  value={cvc}
                  onChangeText={cvcs => updateState({cvc: cvcs})}
                />
              </View>
            </View>
            <View onPress={() => hitStripeAPi()} style={{alignItems: 'center'}}>
            <ButtonThemeComp
            isLoading={isLoading}
              onPress={() => hitStripeAPi()}
              style={styles.continue}
              text={'Continue'}
            />
          </View>
          </View>
          
          {/* <TouchableOpacity
            style={styles.continue}
            onPress={() => {
              // PaymentMethod();
              hitStripeAPi();
              //   numbervalue.name === ''?(
              //   errorMessage('Please Fill Name Field')):
              //   numbervalue.number === ''?(
              //     errorMessage('Please Fill Number Field')
              //   ):
              //   numbervalue.MM === ''?(
              //     errorMessage('Please Fill Month Field')
              //   ): numbervalue.YY === ''?(
              //     errorMessage('Please Fill Year Field')
              //   ):numbervalue.cvc === ''?(
              //     errorMessage('Please Fill Cvc Field')
              //   ):
              // applyForClass();
              console.log('testnumber', numbervalue);
            }}>
            <Text style={{color: 'white', fontSize: hp('2.3')}}>Continue</Text>
          </TouchableOpacity> */}
      </KeyboardAvoidingView>
        </View>
  );
};
export default MentorPaymentCardScreen;