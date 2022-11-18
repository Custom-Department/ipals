import {
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {styles} from './style';
import {LoginInputComp} from '../../components/LoginInputComp/LoginInputComp';
import {color, colorTutor_} from '../../config/color';
import {ButtonThemeComp} from '../../components/ButtonThemeComp/ButtonThemeComp';
import {globalStyles} from '../../config/globalStyles';
import {Divider} from 'react-native-paper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {errorMessage} from '../../config/NotificationMessage';
import {ApiPost, errorHandler} from '../../config/helperFunction';
import {LoginUrl} from '../../config/Urls';
import {useDispatch} from 'react-redux';
import types from '../../Redux/types';
import axios from 'react-native-axios';

const LoginScreen = ({navigation}) => {
  const [loginData, setLoginData] = useState({
    // email: 'studentr@test.com',
    email: 'test@mentee.com',
    // email: 'teacher@test4com',
    // email: '',
    // password: '',
    // email: 'test@teacher.com',
    password: '12345678',
  });

  const dispatch = useDispatch();
  const [isloading, setIsloading] = useState(false);
  const {email, password} = loginData;
  const loginUserFun = () => {
    setIsloading(true);
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (
      email != '' &&
      password != '' &&
      reg.test(email) === true &&
      password.length >= 8
    ) {
      let body = {
        email: email,
        password: password,
      };
      axios
        .post(LoginUrl, body)
        .then(function (res) {
          setIsloading(false);
          dispatch({
            type: types.LoginType,
            payload: res.data.data,
          });
          // dispatch({
          //   type: types.LoginTypeToken,
          //   payload: token,
          // });
        })
        .catch(function (error) {
          setIsloading(false);
          errorMessage(errorHandler(error));
        });
    } else {
      setIsloading(false);
      errorMessage('Please type correct information');
    }
  };
  const focusInput = () => {
    inputElement.current.focus();
  };
  const inputElement = useRef();
  const updateState = data => setLoginData(() => ({...loginData, ...data}));
  return (
    <View style={styles.container}>
      <StatusBar
        hidden={false}
        barStyle={Platform.OS == 'ios' ? 'dark-content' : 'default'}
      />
      <Image
        resizeMode="contain"
        style={styles.imageView}
        source={require('../../image/logo.png')}
      />
      <LoginInputComp
        ref={inputElement}
        // ref={nextS.current.focus()}
        otherProps={{
          blurOnSubmit: false,
        }}
        // onSubmitEditing={()=>divElement.focus()}

        placeholder={'Email Address'}
        value={email}
        onChangeText={e => updateState({email: e})}
        eyeIconName={'email'}
      />
      <LoginInputComp
        placeholder={'Password'}
        value={password}
        onChangeText={e => updateState({password: e})}
        eyeIconName={'lock'}
        color={colorTutor_.ipallightGreen}
      />
      <ButtonThemeComp
        style={styles.signBtn}
        text={'SIGN IN'}
        onPress={() => loginUserFun()}
        isLoading={isloading}
        // onPress={() => navigation.navigate('TuteeDashboardScreen')}
      />
      <View style={styles.forgetView}>
        <TouchableOpacity onPress={() => navigation.navigate('MybottomTabs')}>
          <Text style={globalStyles.globalTextStyles2}>Forget email?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('MenteebottomTabs')}>
          <Text style={globalStyles.globalTextStyles2}>Forget password?</Text>
        </TouchableOpacity>
      </View>

      <Divider style={styles.divider} />
      <View>
        <Text style={{color: 'black'}}>Don't have you account</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('CreateAccount')}>
        <Text style={{color: 'black'}}>Create New Account</Text>
      </TouchableOpacity>
      <View style={styles.bottomBar}>
        <TouchableOpacity onPress={() => console.log('dont have you acc')}>
          <Text style={globalStyles.globalModuletutor}>Term of use</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('dont have you acc')}>
          <Text style={globalStyles.globalModuletutor}>Privacy Policy</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
